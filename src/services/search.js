import { serializeBlock } from "./export.js";

export function buildSearchIndex(routes) {
  const entries = [];
  for (const route of routes.filter((item) => item.nav !== false)) {
    entries.push({
      id: route.id,
      routeId: route.id,
      blockId: null,
      title: route.title,
      subtitle: route.englishTitle ?? route.shortLabel ?? "",
      type: "route",
      status: route.status ?? "draft",
      href: `#${route.id}`,
      text: normalizeText([route.title, route.englishTitle, route.shortLabel, route.source].filter(Boolean).join(" "))
    });
    for (const block of route.blocks ?? []) {
      collectBlockEntries(route, block, entries);
    }
  }
  return entries;
}

export function searchIndex(index, query, limit = 12) {
  const terms = normalizeText(query)
    .split(/\s+/)
    .filter((term) => term.length >= 2);
  if (!terms.length) {
    return [];
  }

  return index
    .map((entry) => {
      const score = scoreEntry(entry, terms);
      return score > 0
        ? {
            ...entry,
            score,
            excerpt: makeExcerpt(entry.rawText ?? entry.text, terms)
          }
        : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, limit);
}

export function initSearch({ root, routes, onNavigate }) {
  if (!root) {
    return;
  }
  const index = buildSearchIndex(routes);
  const form = root.querySelector("[data-search-form]");
  const input = root.querySelector("[data-search-input]");
  const results = root.querySelector("[data-search-results]");

  function renderResults(items) {
    results.replaceChildren();
    if (!input.value.trim()) {
      results.innerHTML = `<p class="muted">Search imported titles, prose, theorem names, equation descriptions, and LaTeX source.</p>`;
      return;
    }
    if (!items.length) {
      results.innerHTML = `<p class="muted">No source matches found.</p>`;
      return;
    }
    const list = document.createElement("ol");
    list.className = "search-results";
    for (const item of items) {
      const li = document.createElement("li");
      li.innerHTML = `
        <a href="${item.href}" data-search-hit="${item.href}">
          <strong>${escapeHtml(item.title)}</strong>
          <span>${escapeHtml(item.subtitle)}</span>
        </a>
        <small>${escapeHtml(item.type)} · ${escapeHtml(item.status)}</small>
        <p>${escapeHtml(item.excerpt)}</p>
      `;
      list.append(li);
    }
    results.append(list);
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const first = searchIndex(index, input.value, 1)[0];
    if (first) {
      onNavigate(first.href);
    }
  });

  input.addEventListener("input", () => {
    renderResults(searchIndex(index, input.value));
  });

  results.addEventListener("click", (event) => {
    const hit = event.target.closest("[data-search-hit]");
    if (hit) {
      event.preventDefault();
      onNavigate(hit.dataset.searchHit);
    }
  });

  renderResults([]);
  return { index };
}

function collectBlockEntries(route, block, entries) {
  const rawText = blockText(block);
  if (rawText.trim()) {
    entries.push({
      id: block.id,
      routeId: route.id,
      blockId: block.id,
      title: blockTitle(block),
      subtitle: route.title,
      type: block.type,
      status: block.status ?? route.status ?? "draft",
      href: `#${route.id}/${block.id}`,
      rawText,
      text: normalizeText(rawText)
    });
  }
  for (const child of block.content ?? []) {
    collectBlockEntries(route, child, entries);
  }
}

function blockText(block) {
  const parts = [
    block.id,
    block.type,
    block.title,
    block.description,
    block.number,
    block.section,
    block.status,
    block.source,
    block.text,
    block.latex,
    ...(block.tags ?? []),
    ...(block.items ?? []),
    serializeBlock(block)
  ];
  return parts.filter(Boolean).join(" ");
}

function blockTitle(block) {
  if (block.number && block.title) {
    return `${block.type} ${block.number}: ${block.title}`;
  }
  return block.title ?? block.description ?? block.id;
}

function scoreEntry(entry, terms) {
  let score = 0;
  for (const term of terms) {
    if (entry.text.includes(term)) {
      score += 2;
    }
    if (normalizeText(entry.title).includes(term)) {
      score += 4;
    }
    if (entry.id.includes(term)) {
      score += 3;
    }
  }
  return score;
}

function makeExcerpt(text, terms) {
  const normalized = normalizeText(text);
  const firstIndex = terms
    .map((term) => normalized.indexOf(term))
    .filter((index) => index >= 0)
    .sort((a, b) => a - b)[0];
  if (firstIndex === undefined) {
    return text.slice(0, 150);
  }
  const start = Math.max(0, firstIndex - 70);
  const end = Math.min(text.length, firstIndex + 150);
  return `${start > 0 ? "..." : ""}${text.slice(start, end)}${end < text.length ? "..." : ""}`;
}

function normalizeText(value) {
  return String(value ?? "")
    .toLocaleLowerCase("th-TH")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

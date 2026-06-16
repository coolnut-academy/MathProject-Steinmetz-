import { copyText } from "../services/clipboard.js";

const titledTypes = new Set([
  "definition",
  "assumption",
  "notation",
  "lemma",
  "proposition",
  "theorem",
  "corollary",
  "proof",
  "numerical-check",
  "warning",
  "note",
  "placeholder"
]);

export function getBlockTitle(block) {
  if (block.number && block.title) {
    return `${labelFor(block.type)} ${block.number}: ${block.title}`;
  }
  return block.title ?? block.description ?? block.id;
}

export function renderBlock(block) {
  switch (block.type) {
    case "heading":
      return renderHeading(block);
    case "paragraph":
      return renderParagraph(block);
    case "equation":
      return renderEquation(block);
    case "ordered-list":
      return renderOrderedList(block);
    case "link-list":
      return renderLinkList(block);
    case "status-legend":
      return renderStatusLegend(block);
    case "simulation":
      return renderSimulation(block);
    default:
      if (titledTypes.has(block.type)) {
        return renderCallout(block);
      }
      return renderUnknown(block);
  }
}

function renderHeading(block) {
  const section = document.createElement("section");
  section.className = "report-section";
  section.id = block.id;
  section.dataset.blockType = block.type;
  section.append(blockHeader(block, `h${Math.min(6, block.level ?? 2)}`));
  appendChildren(section, block.content);
  return section;
}

function renderParagraph(block) {
  const p = document.createElement("p");
  p.id = block.id;
  p.className = "report-paragraph";
  p.textContent = block.text;
  return p;
}

function renderCallout(block) {
  const section = document.createElement("section");
  section.id = block.id;
  section.className = `content-block content-block--${block.type}`;
  section.dataset.status = block.status ?? "draft";
  section.append(blockHeader(block, "h3"));
  appendChildren(section, block.content);
  if (block.type === "proof") {
    const end = document.createElement("p");
    end.className = "proof-end";
    end.textContent = block.status === "placeholder" ? "Proof pending from reviewed source." : "End of proof.";
    section.append(end);
  }
  return section;
}

function blockHeader(block, headingTag) {
  const header = document.createElement("header");
  header.className = "block-header";
  const heading = document.createElement(headingTag);
  heading.textContent = getBlockTitle(block);
  const meta = document.createElement("div");
  meta.className = "block-meta";
  meta.innerHTML = `
    <span class="status-badge status-${block.status ?? "draft"}">${block.status ?? "draft"}</span>
    ${block.section ? `<span>Section ${block.section}</span>` : ""}
    ${block.source ? `<span>Source: ${block.source}</span>` : ""}
    <button type="button" data-copy-block="${block.id}">Copy source text</button>
  `;
  header.append(heading, meta);
  return header;
}

function renderEquation(block) {
  const figure = document.createElement("figure");
  figure.id = block.id;
  figure.className = "equation-card";
  figure.dataset.status = block.status ?? "draft";

  const header = document.createElement("figcaption");
  header.className = "equation-card__header";
  header.innerHTML = `
    <div>
      <strong>${block.number ? `(${block.number}) ` : ""}${block.title ?? "Equation"}</strong>
      <p>${block.description ?? ""}</p>
    </div>
    <span class="status-badge status-${block.status ?? "draft"}">${block.status ?? "draft"}</span>
  `;

  const math = document.createElement("div");
  math.className = "equation-card__math";
  math.textContent = `\\[${block.latex}\\]`;

  const source = document.createElement("pre");
  source.className = "equation-card__source";
  source.hidden = true;
  source.textContent = block.latex;

  const actions = document.createElement("div");
  actions.className = "equation-card__actions";
  actions.innerHTML = `
    <button type="button" data-copy-latex>Copy LaTeX</button>
    <button type="button" data-toggle-source>Show LaTeX</button>
    <button type="button" data-copy-equation-detail>Copy description + LaTeX</button>
    <a href="#${location.hash.replace(/^#/, "").split("/")[0]}/${block.id}">Link</a>
  `;

  actions.addEventListener("click", async (event) => {
    if (event.target.closest("[data-copy-latex]")) {
      await copyText(block.latex, `Copied LaTeX for ${block.id}`);
    }
    if (event.target.closest("[data-toggle-source]")) {
      source.hidden = !source.hidden;
      event.target.textContent = source.hidden ? "Show LaTeX" : "Hide LaTeX";
    }
    if (event.target.closest("[data-copy-equation-detail]")) {
      const text = `[Equation ${block.number ?? block.id}] ${block.title ?? ""}\n${block.description ?? ""}\n${block.latex}`;
      await copyText(text, `Copied equation detail for ${block.id}`);
    }
  });

  figure.append(header, math, source, actions);
  return figure;
}

function renderOrderedList(block) {
  const list = document.createElement("ol");
  list.id = block.id;
  list.className = "report-list";
  for (const value of block.items ?? []) {
    const item = document.createElement("li");
    item.textContent = value;
    list.append(item);
  }
  return list;
}

function renderLinkList(block) {
  const list = document.createElement("ul");
  list.id = block.id;
  list.className = "link-list";
  for (const link of block.links ?? []) {
    const item = document.createElement("li");
    item.innerHTML = `<a href="${link.href}">${link.label}</a>`;
    list.append(item);
  }
  return list;
}

function renderStatusLegend(block) {
  const section = document.createElement("section");
  section.id = block.id;
  section.className = "status-legend";
  section.innerHTML = `
    <h2>Status legend</h2>
    <dl>
      <div><dt><span class="status-badge status-needs-review">needs-review</span></dt><dd>Supplied or planned material that still needs mathematical review.</dd></div>
      <div><dt><span class="status-badge status-placeholder">placeholder</span></dt><dd>Reserved structure where reviewed source is not yet available.</dd></div>
      <div><dt><span class="status-badge status-draft">draft</span></dt><dd>Interface or prose still under revision.</dd></div>
      <div><dt><span class="status-badge status-verified-proof">verified-proof</span></dt><dd>Reviewed analytical proof content, once imported.</dd></div>
    </dl>
  `;
  return section;
}

function renderSimulation(block) {
  const section = document.createElement("section");
  section.id = block.id;
  section.className = "simulation-shell";
  section.innerHTML = `
    <header class="block-header">
      <h2>${block.title}</h2>
      <span class="status-badge status-${block.status ?? "draft"}">${block.status ?? "draft"}</span>
    </header>
    <div data-simulation-root class="simulation-root">
      <p>Loading simulation module...</p>
    </div>
  `;
  return section;
}

function renderUnknown(block) {
  const section = document.createElement("section");
  section.id = block.id;
  section.className = "content-block content-block--warning";
  section.textContent = `Unknown block type: ${block.type}`;
  return section;
}

function appendChildren(parent, children = []) {
  for (const child of children) {
    parent.append(renderBlock(child));
  }
}

function labelFor(type) {
  return type
    .split("-")
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(" ");
}

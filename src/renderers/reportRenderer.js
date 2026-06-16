import { renderBlock, getBlockTitle } from "./blockRenderers.js";
import { copyText, setCopyStatus } from "../services/clipboard.js";
import { downloadText } from "../services/export.js";
import { serializeRoute, serializeBlock } from "../services/export.js";

export function renderRoute(main, toc, route, anchorId) {
  main.replaceChildren();
  toc.replaceChildren();

  const article = document.createElement("article");
  article.className = "report-article";
  article.dataset.routeId = route.id;

  const header = document.createElement("header");
  header.className = "article-header";
  header.innerHTML = `
    <span class="status-badge status-${route.status ?? "draft"}">${route.status ?? "draft"}</span>
    <h1>${route.title}</h1>
    <p>${route.englishTitle ?? ""}</p>
    <small>Source: ${route.source ?? "not specified"}</small>
  `;

  const controls = document.createElement("div");
  controls.className = "article-controls";
  controls.innerHTML = `
    <button type="button" data-copy-route>Copy chapter/source text</button>
    <button type="button" data-download-route>Download UTF-8 text</button>
    <button type="button" data-open-toc>Local TOC</button>
  `;
  header.append(controls);
  article.append(header);

  const body = document.createElement("div");
  body.className = "article-body";
  for (const block of route.blocks ?? []) {
    body.append(renderBlock(block));
  }
  article.append(body);
  main.append(article);

  renderToc(toc, route);
  attachRouteActions(main, route);

  if (anchorId) {
    queueMicrotask(() => {
      document.getElementById(anchorId)?.scrollIntoView({ block: "start" });
    });
  }
}

function renderToc(toc, route) {
  const list = document.createElement("ol");
  list.className = "local-toc";

  for (const entry of collectTocEntries(route.blocks ?? [])) {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = `#${route.id}/${entry.id}`;
    link.textContent = entry.title;
    item.append(link);
    list.append(item);
  }

  if (!list.children.length) {
    const empty = document.createElement("p");
    empty.className = "muted";
    empty.textContent = "No local headings yet.";
    toc.append(empty);
    return;
  }

  toc.append(list);
}

function collectTocEntries(blocks) {
  const entries = [];
  for (const block of blocks) {
    if (["heading", "theorem", "proposition", "definition", "equation", "simulation"].includes(block.type)) {
      entries.push({
        id: block.id,
        title: getBlockTitle(block)
      });
    }
    if (Array.isArray(block.content)) {
      entries.push(...collectTocEntries(block.content));
    }
  }
  return entries;
}

function attachRouteActions(main, route) {
  main.onclick = async (event) => {
    const routeCopy = event.target.closest("[data-copy-route]");
    const routeDownload = event.target.closest("[data-download-route]");
    const openToc = event.target.closest("[data-open-toc]");
    const copyBlock = event.target.closest("[data-copy-block]");
    const copyReference = event.target.closest("[data-copy-reference]");

    if (routeCopy) {
      await copyText(serializeRoute(route), `Copied ${route.title}`);
    }

    if (routeDownload) {
      downloadText(`${route.id}.txt`, serializeRoute(route));
      setCopyStatus(`Downloaded ${route.id}.txt`);
    }

    if (copyBlock) {
      const block = findBlockById(route.blocks, copyBlock.dataset.copyBlock);
      if (block) {
        await copyText(serializeBlock(block), `Copied ${getBlockTitle(block)}`);
      }
    }

    if (copyReference) {
      const reference = findReferenceById(route.blocks, copyReference.dataset.copyReference);
      if (reference) {
        await copyText(reference.formatted ?? reference.title ?? reference.id, `Copied reference ${reference.id}`);
      }
    }

    if (openToc) {
      document.querySelector(".toc-panel")?.classList.add("is-open");
    }
  };
}

function findReferenceById(blocks = [], id) {
  for (const block of blocks) {
    const found = (block.references ?? []).find((reference) => reference.id === id);
    if (found) {
      return found;
    }
    const child = findReferenceById(block.content, id);
    if (child) {
      return child;
    }
  }
  return null;
}

function findBlockById(blocks = [], id) {
  for (const block of blocks) {
    if (block.id === id) {
      return block;
    }
    const child = findBlockById(block.content, id);
    if (child) {
      return child;
    }
  }
  return null;
}

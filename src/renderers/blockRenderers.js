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
    case "table":
      return renderTable(block);
    case "code":
      return renderCode(block);
    case "link-list":
      return renderLinkList(block);
    case "status-legend":
      return renderStatusLegend(block);
    case "bibliography-list":
      return renderBibliographyList(block);
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
  appendInlineText(p, block.text ?? "", block.equationRefs);
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
    end.textContent = block.status === "placeholder" ? "รอบทพิสูจน์จากต้นฉบับที่ผ่านการตรวจทาน" : "จบบทพิสูจน์";
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
  const proofLink = block.proofId ? `<a href="#${routeHash()}/${block.proofId}">ไปยังบทพิสูจน์</a>` : "";
  const provesLink = block.proves ? `<a href="#${routeHash()}/${block.proves}">กลับไปยังข้อความที่พิสูจน์</a>` : "";
  meta.innerHTML = `
    <span class="status-badge status-${block.status ?? "draft"}">${block.status ?? "draft"}</span>
    ${block.section ? `<span>Section ${block.section}</span>` : ""}
    ${block.source ? `<span>Source: ${block.source}</span>` : ""}
    ${proofLink}
    ${provesLink}
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
  if (block.start) {
    list.start = block.start;
  }
  for (const value of block.items ?? []) {
    const item = document.createElement("li");
    appendInlineText(item, value, block.equationRefs);
    list.append(item);
  }
  return list;
}

function renderTable(block) {
  const wrapper = document.createElement("div");
  wrapper.id = block.id;
  wrapper.className = "table-scroll";

  const table = document.createElement("table");
  table.className = "report-table";
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  for (const header of block.headers ?? []) {
    const cell = document.createElement("th");
    appendInlineText(cell, header, block.equationRefs);
    headerRow.append(cell);
  }
  thead.append(headerRow);

  const tbody = document.createElement("tbody");
  for (const row of block.rows ?? []) {
    const tr = document.createElement("tr");
    for (const value of row) {
      const cell = document.createElement("td");
      appendInlineText(cell, value, block.equationRefs);
      tr.append(cell);
    }
    tbody.append(tr);
  }

  table.append(thead, tbody);
  wrapper.append(table);
  return wrapper;
}

function renderCode(block) {
  const figure = document.createElement("figure");
  figure.id = block.id;
  figure.className = "code-block";

  if (block.language) {
    const caption = document.createElement("figcaption");
    caption.textContent = block.language;
    figure.append(caption);
  }

  const pre = document.createElement("pre");
  const code = document.createElement("code");
  code.textContent = block.code ?? "";
  pre.append(code);
  figure.append(pre);
  return figure;
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

function renderBibliographyList(block) {
  const section = document.createElement("section");
  section.id = block.id;
  section.className = "content-block content-block--note bibliography-list";
  section.dataset.status = block.status ?? "placeholder";
  section.append(blockHeader(block, "h2"));

  const audit = document.createElement("p");
  audit.textContent = block.audit?.summary ?? "No bibliography audit summary available.";
  section.append(audit);

  if (!block.references?.length) {
    const empty = document.createElement("p");
    empty.className = "muted";
    empty.textContent = "No verified references are available yet. This list intentionally remains empty.";
    section.append(empty);
    return section;
  }

  const list = document.createElement("ol");
  list.className = "bibliography-items";
  for (const reference of block.references) {
    const item = document.createElement("li");
    item.id = reference.id;
    item.innerHTML = `
      <span class="status-badge status-${reference.status ?? "needs-review"}">${reference.status ?? "needs-review"}</span>
      <p>${reference.formatted ?? reference.title ?? reference.id}</p>
      <button type="button" data-copy-reference="${reference.id}">Copy reference</button>
    `;
    list.append(item);
  }
  section.append(list);
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

function appendInlineText(parent, text, refs = []) {
  if (!refs?.length) {
    parent.textContent = text;
    return;
  }

  const refMap = new Map(refs.map((ref) => [ref.label, ref.id]));
  const pattern = /\((3\.\d+)\)/g;
  let cursor = 0;
  for (const match of text.matchAll(pattern)) {
    const [raw, label] = match;
    const id = refMap.get(label);
    if (!id) {
      continue;
    }
    parent.append(document.createTextNode(text.slice(cursor, match.index)));
    const link = document.createElement("a");
    link.href = `#${routeHash()}/${id}`;
    link.textContent = raw;
    link.className = "equation-ref";
    parent.append(link);
    cursor = match.index + raw.length;
  }
  parent.append(document.createTextNode(text.slice(cursor)));
}

function routeHash() {
  return location.hash.replace(/^#/, "").split("/")[0];
}

function labelFor(type) {
  const labels = {
    definition: "นิยาม",
    assumption: "สมมติฐาน",
    notation: "สัญลักษณ์",
    lemma: "บทตั้ง",
    proposition: "ข้อเสนอ",
    theorem: "ทฤษฎีบท",
    corollary: "บทแทรก",
    proof: "บทพิสูจน์",
    "numerical-check": "การตรวจสอบเชิงตัวเลข",
    warning: "ข้อควรระวัง",
    note: "หมายเหตุ",
    placeholder: "พื้นที่รอเนื้อหา"
  };
  if (labels[type]) {
    return labels[type];
  }
  return type
    .split("-")
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(" ");
}

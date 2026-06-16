export function serializeRoute(route) {
  const lines = [
    route.title,
    route.englishTitle ? route.englishTitle : "",
    `Status: ${route.status ?? "draft"}`,
    route.source ? `Source: ${route.source}` : "",
    ""
  ];

  for (const block of route.blocks ?? []) {
    lines.push(serializeBlock(block), "");
  }

  return lines.filter((line, index) => line !== "" || lines[index - 1] !== "").join("\n");
}

export function serializeBlock(block) {
  switch (block.type) {
    case "paragraph":
      return block.text ?? "";
    case "equation":
      return [
        `[Equation ${block.number ?? block.id}] ${block.title ?? ""}`.trim(),
        block.description ?? "",
        block.latex
      ]
        .filter(Boolean)
        .join("\n");
    case "ordered-list":
      return (block.items ?? []).map((item, index) => `${index + 1}. ${item}`).join("\n");
    case "table":
      return serializeTable(block);
    case "code":
      return ["```" + (block.language ?? ""), block.code ?? "", "```"].join("\n");
    case "link-list":
      return (block.links ?? []).map((link) => `${link.label}: ${link.href}`).join("\n");
    case "status-legend":
      return "Status legend: needs-review, placeholder, draft, verified-proof";
    case "bibliography-list":
      return serializeBibliography(block);
    case "simulation":
      return `${block.title ?? block.id}\nSimulation scaffold. Numerical output is not a proof.`;
    default:
      return serializeContainer(block);
  }
}

export function downloadText(filename, text) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function serializeContainer(block) {
  const header = [
    block.number ? `${block.type.toUpperCase()} ${block.number}: ${block.title ?? block.id}` : block.title,
    block.status ? `Status: ${block.status}` : "",
    block.source ? `Source: ${block.source}` : ""
  ].filter(Boolean);
  const childText = (block.content ?? []).map(serializeBlock).filter(Boolean);
  return [...header, ...childText].join("\n");
}

function serializeBibliography(block) {
  if (!block.references?.length) {
    return [
      block.title ?? "Bibliography",
      block.audit?.summary ?? "No verified bibliography entries have been imported.",
      "No verified references available."
    ].join("\n");
  }
  return (block.references ?? [])
    .map((reference) => `${reference.formatted ?? reference.title ?? reference.id}\nStatus: ${reference.status ?? "needs-review"}`)
    .join("\n\n");
}

function serializeTable(block) {
  const headers = block.headers ?? [];
  const rows = block.rows ?? [];
  if (!headers.length) {
    return rows.map((row) => row.join(" | ")).join("\n");
  }

  return [
    `| ${headers.join(" | ")} |`,
    `| ${headers.map(() => "---").join(" | ")} |`,
    ...rows.map((row) => `| ${row.join(" | ")} |`)
  ].join("\n");
}

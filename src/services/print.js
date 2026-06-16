import { serializeRoute } from "./export.js";

export function initPrintTools({ root, routes, getCurrentRoute }) {
  if (!root) {
    return;
  }
  const printRoot = ensurePrintRoot();

  root.addEventListener("click", (event) => {
    const button = event.target.closest("[data-print-mode]");
    if (!button) {
      return;
    }
    const mode = button.dataset.printMode;
    if (mode === "current") {
      document.body.dataset.printMode = "current";
      printRoot.replaceChildren();
      window.print();
      return;
    }
    if (mode === "full") {
      document.body.dataset.printMode = "full";
      renderPrintText(printRoot, routes.filter((route) => route.nav !== false), "Complete report source print");
      window.print();
      return;
    }
    if (mode === "route") {
      document.body.dataset.printMode = "full";
      const route = getCurrentRoute();
      renderPrintText(printRoot, route ? [route] : [], `${route?.title ?? "Current route"} print`);
      window.print();
    }
  });

  window.addEventListener("afterprint", () => {
    document.body.dataset.printMode = "";
    printRoot.replaceChildren();
  });
}

function ensurePrintRoot() {
  let root = document.querySelector("#print-root");
  if (!root) {
    root = document.createElement("section");
    root.id = "print-root";
    root.setAttribute("aria-hidden", "true");
    document.body.append(root);
  }
  return root;
}

function renderPrintText(root, routes, title) {
  root.replaceChildren();
  const heading = document.createElement("h1");
  heading.textContent = title;
  root.append(heading);
  for (const route of routes) {
    const article = document.createElement("article");
    const pre = document.createElement("pre");
    pre.textContent = serializeRoute(route);
    article.append(pre);
    root.append(article);
  }
}

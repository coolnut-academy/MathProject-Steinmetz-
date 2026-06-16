import { routes, getRouteById, getDefaultRoute } from "./content/index.js";
import { createRouter } from "./app/router.js";
import { renderMainNavigation } from "./app/navigation.js";
import { initPreferences } from "./app/preferences.js";
import { renderRoute } from "./renderers/reportRenderer.js";
import { typesetMath } from "./renderers/mathRenderer.js";
import { setCopyStatus } from "./services/clipboard.js";
import { initPrintTools } from "./services/print.js";
import { initSearch } from "./services/search.js";

const elements = {
  nav: document.querySelector("#main-nav"),
  main: document.querySelector("#main-content"),
  toc: document.querySelector("#local-toc"),
  tocPanel: document.querySelector(".toc-panel"),
  searchRoot: document.querySelector("[data-search-root]"),
  printTools: document.querySelector("[data-print-tools]")
};

let currentRoute = getDefaultRoute();

function openMobileToc(open) {
  elements.tocPanel?.classList.toggle("is-open", open);
}

async function afterRender(route) {
  await typesetMath(elements.main);
  elements.main.focus({ preventScroll: true });

  if (route.id === "simulation") {
    const module = await import("./simulation/simulationController.js");
    module.initSimulation(document.querySelector("[data-simulation-root]"));
  }
}

async function handleRouteChange(routeState) {
  const route = getRouteById(routeState.routeId) ?? getDefaultRoute();
  currentRoute = route;
  renderMainNavigation(elements.nav, routes, route.id);
  renderRoute(elements.main, elements.toc, route, routeState.anchorId);
  openMobileToc(false);
  await afterRender(route);
  highlightAnchor(routeState.anchorId);
}

renderMainNavigation(elements.nav, routes, getDefaultRoute().id);

const router = createRouter({
  routes,
  onChange: handleRouteChange
});

initPreferences();
initSearch({
  root: elements.searchRoot,
  routes,
  onNavigate(href) {
    window.location.hash = href.replace(/^#/, "");
  }
});
initPrintTools({
  root: elements.printTools,
  routes,
  getCurrentRoute() {
    return currentRoute;
  }
});
router.start();

document.addEventListener("click", (event) => {
  const toggle = event.target.closest("[data-toggle-toc]");
  if (toggle) {
    openMobileToc(!elements.tocPanel.classList.contains("is-open"));
  }

  if (event.target.closest("[data-print]")) {
    document.body.dataset.printMode = "current";
    window.print();
  }
});

window.addEventListener("unhandledrejection", (event) => {
  setCopyStatus(`Error: ${event.reason?.message ?? "unknown application error"}`);
});

function highlightAnchor(anchorId) {
  if (!anchorId) {
    return;
  }
  queueMicrotask(() => {
    const target = document.getElementById(anchorId);
    if (!target) {
      return;
    }
    target.classList.add("is-search-target");
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
    window.setTimeout(() => target.classList.remove("is-search-target"), 2600);
  });
}

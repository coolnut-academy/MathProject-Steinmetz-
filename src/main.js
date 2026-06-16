import { routes, getRouteById, getDefaultRoute } from "./content/index.js";
import { createRouter } from "./app/router.js";
import { renderMainNavigation } from "./app/navigation.js";
import { initPreferences } from "./app/preferences.js";
import { renderRoute } from "./renderers/reportRenderer.js";
import { typesetMath } from "./renderers/mathRenderer.js";
import { setCopyStatus } from "./services/clipboard.js";

const elements = {
  nav: document.querySelector("#main-nav"),
  main: document.querySelector("#main-content"),
  toc: document.querySelector("#local-toc"),
  tocPanel: document.querySelector(".toc-panel")
};

let simulationStarted = false;

function openMobileToc(open) {
  elements.tocPanel?.classList.toggle("is-open", open);
}

async function afterRender(route) {
  await typesetMath(elements.main);
  elements.main.focus({ preventScroll: true });

  if (route.id === "simulation" && !simulationStarted) {
    simulationStarted = true;
    const module = await import("./simulation/simulationController.js");
    module.initSimulation(document.querySelector("[data-simulation-root]"));
  }
}

async function handleRouteChange(routeState) {
  const route = getRouteById(routeState.routeId) ?? getDefaultRoute();
  renderMainNavigation(elements.nav, routes, route.id);
  renderRoute(elements.main, elements.toc, route, routeState.anchorId);
  openMobileToc(false);
  await afterRender(route);
}

renderMainNavigation(elements.nav, routes, getDefaultRoute().id);

const router = createRouter({
  routes,
  onChange: handleRouteChange
});

initPreferences();
router.start();

document.addEventListener("click", (event) => {
  const toggle = event.target.closest("[data-toggle-toc]");
  if (toggle) {
    openMobileToc(!elements.tocPanel.classList.contains("is-open"));
  }

  if (event.target.closest("[data-print]")) {
    window.print();
  }
});

window.addEventListener("unhandledrejection", (event) => {
  setCopyStatus(`Error: ${event.reason?.message ?? "unknown application error"}`);
});

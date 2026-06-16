export function renderMainNavigation(container, routes, activeId) {
  container.replaceChildren();

  for (const route of routes.filter((item) => item.nav !== false)) {
    const link = document.createElement("a");
    link.href = `#${route.id}`;
    link.className = "main-nav__link";
    link.setAttribute("role", "tab");
    link.setAttribute("aria-selected", String(route.id === activeId));
    link.dataset.active = String(route.id === activeId);
    link.innerHTML = `<span>${route.label}</span><small>${route.shortLabel ?? route.englishTitle ?? ""}</small>`;
    container.append(link);
  }
}

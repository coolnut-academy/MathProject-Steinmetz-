export function parseHash(hash) {
  const clean = hash.replace(/^#/, "").trim();
  if (!clean) {
    return { routeId: "home", anchorId: null };
  }

  const [routeId, anchorId] = clean.split("/");
  return {
    routeId: routeId || "home",
    anchorId: anchorId || null
  };
}

export function toHash(routeId, anchorId) {
  return `#${routeId}${anchorId ? `/${anchorId}` : ""}`;
}

export function createRouter({ routes, onChange }) {
  const validIds = new Set(routes.map((route) => route.id));

  function current() {
    const parsed = parseHash(window.location.hash);
    if (!validIds.has(parsed.routeId)) {
      return { routeId: "not-found", anchorId: parsed.routeId };
    }
    return parsed;
  }

  function notify() {
    onChange(current());
  }

  return {
    start() {
      window.addEventListener("hashchange", notify);
      notify();
    },
    go(routeId, anchorId = null) {
      window.location.hash = toHash(routeId, anchorId);
    }
  };
}

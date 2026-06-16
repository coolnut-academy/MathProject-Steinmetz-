const key = "steinmetz-report-preferences";

function readPreferences() {
  try {
    return JSON.parse(localStorage.getItem(key) ?? "{}");
  } catch {
    return {};
  }
}

function writePreferences(preferences) {
  localStorage.setItem(key, JSON.stringify(preferences));
}

export function initPreferences() {
  const preferences = readPreferences();
  const root = document.documentElement;
  const initialScale = Number(preferences.textScale ?? 1);
  root.style.setProperty("--reader-scale", String(initialScale));

  document.addEventListener("click", (event) => {
    const decrease = event.target.closest("[data-font-decrease]");
    const increase = event.target.closest("[data-font-increase]");
    if (!decrease && !increase) {
      return;
    }

    const current = Number(getComputedStyle(root).getPropertyValue("--reader-scale")) || 1;
    const next = Math.min(1.25, Math.max(0.9, current + (increase ? 0.05 : -0.05)));
    root.style.setProperty("--reader-scale", next.toFixed(2));
    writePreferences({ ...readPreferences(), textScale: next.toFixed(2) });
  });
}

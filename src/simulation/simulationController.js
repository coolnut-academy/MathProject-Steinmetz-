import { drawCrossSection } from "./crossSection2d.js";
import { crossSectionArea, normalizeState, formatNumber } from "./formulas.js";
import { presets } from "./presets.js";

const defaultState = { r1: 1, r2: 2, betaDeg: 60, x: 0 };

export function initSimulation(root) {
  if (!root) {
    return;
  }

  root.innerHTML = `
    <div class="simulation-layout">
      <form class="simulation-controls" aria-label="Simulation parameters">
        <label>r1 <input name="r1" type="number" min="0.01" step="0.01" value="${defaultState.r1}" /></label>
        <label>r2 <input name="r2" type="number" min="0.01" step="0.01" value="${defaultState.r2}" /></label>
        <label>beta degrees <input name="betaDeg" type="number" min="1" max="90" step="1" value="${defaultState.betaDeg}" /></label>
        <label>x <input name="x" type="number" step="0.01" value="${defaultState.x}" /></label>
        <label>Preset
          <select name="preset">
            <option value="">Custom</option>
            ${presets.map((preset) => `<option value="${preset.id}">${preset.label}</option>`).join("")}
          </select>
        </label>
        <button type="button" data-reset-simulation>Reset</button>
      </form>
      <div class="simulation-view">
        <canvas aria-label="2D cross-section preview"></canvas>
        <div class="simulation-summary" aria-live="polite"></div>
      </div>
    </div>
  `;

  const form = root.querySelector("form");
  const canvas = root.querySelector("canvas");
  const summary = root.querySelector(".simulation-summary");

  function readState() {
    return {
      r1: Number(form.elements.r1.value),
      r2: Number(form.elements.r2.value),
      betaDeg: Number(form.elements.betaDeg.value),
      x: Number(form.elements.x.value)
    };
  }

  function writeState(state) {
    form.elements.r1.value = state.r1;
    form.elements.r2.value = state.r2;
    form.elements.betaDeg.value = state.betaDeg;
    form.elements.x.value = state.x;
  }

  function render() {
    const state = readState();
    const normalized = normalizeState(state);
    const area = crossSectionArea(state);
    drawCrossSection(canvas, state);
    summary.innerHTML = `
      <h3>Current values</h3>
      <p>Status: ${normalized.valid ? "valid" : "invalid"}</p>
      <p>k = ${formatNumber(normalized.k)}</p>
      <p>A(x) = ${formatNumber(area)}</p>
      <p>Valid cross-section interval: |x| <= ${formatNumber(normalized.a)}</p>
      <p class="muted">3D rendering and numerical comparison are reserved for a later phase.</p>
    `;
  }

  form.addEventListener("input", (event) => {
    if (event.target.name === "preset" && event.target.value) {
      const preset = presets.find((item) => item.id === event.target.value);
      if (preset) {
        writeState(preset.state);
      }
    }
    render();
  });

  root.querySelector("[data-reset-simulation]").addEventListener("click", () => {
    form.elements.preset.value = "";
    writeState(defaultState);
    render();
  });

  window.addEventListener("resize", render);
  render();
}

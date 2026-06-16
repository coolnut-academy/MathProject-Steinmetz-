import { drawCrossSection } from "./crossSection2d.js";
import {
  ELLIPTIC_CONVENTION,
  absoluteError,
  crossSectionGeometry,
  describeSimulationState,
  directVolumeQuadrature,
  exactSurfaceAreas,
  exactVolume,
  formatNumber,
  formatScientific,
  monteCarloVolume,
  normalizeState,
  relativeError,
  surfaceAreaQuadrature
} from "./formulas.js";
import { presets } from "./presets.js";
import { typesetMath } from "../renderers/mathRenderer.js";

const defaultState = { r1: 1, r2: 2, betaDeg: 60, x: 0 };
let activeCleanup = null;

export function initSimulation(root) {
  if (!root) {
    return;
  }

  activeCleanup?.();

  root.innerHTML = `
    <div class="simulation-layout">
      <form class="simulation-controls" aria-label="Simulation parameters">
        <div class="simulation-field">
          <label for="sim-r1">r1</label>
          <input id="sim-r1" name="r1" type="number" min="0.01" step="0.01" value="${defaultState.r1}" />
        </div>
        <div class="simulation-field">
          <label for="sim-r2">r2</label>
          <input id="sim-r2" name="r2" type="number" min="0.01" step="0.01" value="${defaultState.r2}" />
        </div>
        <div class="simulation-field">
          <label for="sim-beta">beta degrees</label>
          <input id="sim-beta" name="betaDeg" type="number" min="0.1" max="90" step="0.1" value="${defaultState.betaDeg}" />
        </div>
        <div class="simulation-field">
          <label for="sim-x">x</label>
          <input id="sim-x" name="x" type="number" step="0.01" value="${defaultState.x}" />
          <input name="xRange" type="range" step="0.01" value="${defaultState.x}" aria-label="Cross-section x slider" />
        </div>
        <div class="simulation-field">
          <label for="sim-resolution">3D resolution</label>
          <input id="sim-resolution" name="resolution" type="range" min="10" max="42" step="2" value="22" />
          <output name="resolutionOutput" for="sim-resolution">22</output>
        </div>
        <div class="simulation-field">
          <label for="sim-quadrature">Quadrature intervals</label>
          <input id="sim-quadrature" name="quadratureIntervals" type="range" min="64" max="2048" step="64" value="512" />
          <output name="quadratureOutput" for="sim-quadrature">512</output>
        </div>
        <div class="simulation-field">
          <label for="sim-monte-carlo">Monte Carlo samples</label>
          <input id="sim-monte-carlo" name="monteCarloSamples" type="range" min="1000" max="50000" step="1000" value="8000" />
          <output name="monteCarloOutput" for="sim-monte-carlo">8000</output>
        </div>
        <label>Preset
          <select name="preset">
            <option value="">Custom</option>
            ${presets.map((preset) => `<option value="${preset.id}">${preset.label}</option>`).join("")}
          </select>
        </label>
        <fieldset class="simulation-toggles">
          <legend>3D visibility</legend>
          <label><input name="showCylinderOne" type="checkbox" checked /> r1 cylinder</label>
          <label><input name="showCylinderTwo" type="checkbox" checked /> r2 cylinder</label>
          <label><input name="showAxes" type="checkbox" checked /> axes</label>
          <label><input name="showPlane" type="checkbox" checked /> x-plane</label>
          <label><input name="showIntersection" type="checkbox" checked /> intersection sample</label>
          <label><input name="showMonteCarlo" type="checkbox" checked /> Monte Carlo check</label>
        </fieldset>
        <div class="simulation-actions">
          <button type="button" data-reset-simulation>Reset</button>
          <button type="button" data-reset-3d-view>Reset 3D view</button>
          <a href="#chapter-3/ch3-sec-3-5">Open proof section</a>
        </div>
        <div class="simulation-errors" role="status" aria-live="polite"></div>
      </form>
      <div class="simulation-view">
        <section class="simulation-2d-panel" aria-labelledby="simulation-2d-title">
          <h3 id="simulation-2d-title">2D cross-section</h3>
          <canvas aria-label="2D cross-section preview showing strip constraints and their parallelogram intersection"></canvas>
        </section>
        <section class="simulation-3d-panel" aria-labelledby="simulation-3d-title">
          <div class="simulation-3d-header">
            <h3 id="simulation-3d-title">3D cylinder view</h3>
            <span class="status-badge status-draft">visual approximation</span>
          </div>
          <div data-three-root class="simulation-3d-root" aria-label="3D visual approximation of two intersecting cylinders">
            <p>Loading 3D module...</p>
          </div>
          <p class="simulation-3d-status" aria-live="polite">3D module loading. This view is explanatory, not a proof.</p>
          <p class="muted">The shaded point cloud is a sampled approximation of the intersection region.</p>
        </section>
        <div class="simulation-panels">
          <div class="simulation-summary" aria-live="polite"></div>
          <div class="simulation-formula-panel"></div>
          <div class="simulation-numerical-panel"></div>
        </div>
        <p class="simulation-text-alt" aria-live="polite"></p>
      </div>
    </div>
  `;

  const form = root.querySelector("form");
  const canvas = root.querySelector("canvas");
  const summary = root.querySelector(".simulation-summary");
  const formulaPanel = root.querySelector(".simulation-formula-panel");
  const numericalPanel = root.querySelector(".simulation-numerical-panel");
  const textAlternative = root.querySelector(".simulation-text-alt");
  const errors = root.querySelector(".simulation-errors");
  const threeRoot = root.querySelector("[data-three-root]");
  const threeStatus = root.querySelector(".simulation-3d-status");
  const resizeObserver = new ResizeObserver(() => render());
  let threeController = null;
  let threeDisposed = false;

  function readState() {
    return {
      r1: Number(form.elements.r1.value),
      r2: Number(form.elements.r2.value),
      betaDeg: Number(form.elements.betaDeg.value),
      x: Number(form.elements.x.value),
      resolution: Number(form.elements.resolution.value),
      quadratureIntervals: Number(form.elements.quadratureIntervals.value),
      monteCarloSamples: Number(form.elements.monteCarloSamples.value),
      showMonteCarlo: form.elements.showMonteCarlo.checked,
      visibility: {
        cylinderOne: form.elements.showCylinderOne.checked,
        cylinderTwo: form.elements.showCylinderTwo.checked,
        axes: form.elements.showAxes.checked,
        plane: form.elements.showPlane.checked,
        intersection: form.elements.showIntersection.checked
      }
    };
  }

  function writeState(state) {
    form.elements.r1.value = state.r1;
    form.elements.r2.value = state.r2;
    form.elements.betaDeg.value = state.betaDeg;
    form.elements.x.value = state.x;
    form.elements.xRange.value = state.x;
  }

  function render() {
    const state = readState();
    const normalized = normalizeState(state);
    const geometry = crossSectionGeometry(state);
    updateXRange(form, normalized);
    form.elements.resolutionOutput.value = String(state.resolution);
    form.elements.quadratureOutput.value = String(state.quadratureIntervals);
    form.elements.monteCarloOutput.value = String(state.monteCarloSamples);
    drawCrossSection(canvas, state);
    errors.innerHTML = normalized.valid
      ? `<span class="status-badge status-numerically-verified">valid 2D state</span>`
      : `<ul>${normalized.errors.map((error) => `<li>${error}</li>`).join("")}</ul>`;
    summary.innerHTML = renderSummary(normalized, geometry);
    formulaPanel.innerHTML = renderFormulaPanel(normalized, geometry);
    numericalPanel.innerHTML = renderNumericalPanel(state);
    textAlternative.textContent = describeSimulationState(state);
    threeController?.update(state);
    typesetInsertedMath(root);
  }

  form.addEventListener("input", (event) => {
    if (event.target.name === "preset" && event.target.value) {
      const preset = presets.find((item) => item.id === event.target.value);
      if (preset) {
        writeState(preset.state);
      }
    } else if (event.target.name === "xRange") {
      form.elements.x.value = event.target.value;
      form.elements.preset.value = "";
    } else if (event.target.name !== "preset") {
      form.elements.preset.value = "";
    }
    render();
  });

  root.querySelector("[data-reset-simulation]").addEventListener("click", () => {
    form.elements.preset.value = "";
    writeState(defaultState);
    render();
  });

  root.querySelector("[data-reset-3d-view]").addEventListener("click", () => {
    threeController?.resetView();
  });

  resizeObserver.observe(root.querySelector(".simulation-view"));
  activeCleanup = () => {
    threeDisposed = true;
    resizeObserver.disconnect();
    threeController?.dispose();
  };
  startGeometry3d();
  render();

  async function startGeometry3d() {
    try {
      const module = await import("./geometry3d.js");
      if (threeDisposed) {
        return;
      }
      threeController = await module.initGeometry3d(threeRoot, readState(), {
        onStatus(message) {
          threeStatus.textContent = message;
        }
      });
      threeController?.update(readState());
    } catch (error) {
      threeStatus.textContent = "3D view unavailable; using the 2D cross-section and formula panel.";
      threeRoot.innerHTML = `
        <div class="simulation-3d-fallback" role="status">
          <strong>3D fallback</strong>
          <p>The browser could not initialize the lazy-loaded WebGL view.</p>
          <p>${error.message ?? "Unknown WebGL or module loading error."}</p>
        </div>
      `;
    }
  }
}

function updateXRange(form, normalized) {
  const range = form.elements.xRange;
  if (!range) {
    return;
  }
  if (normalized.interval) {
    const [min, max] = normalized.interval;
    range.min = String(min);
    range.max = String(max);
    range.disabled = false;
  } else {
    range.min = "-1";
    range.max = "1";
    range.disabled = true;
  }
}

function renderSummary(normalized, geometry) {
  if (!geometry) {
    return `
      <h3>Current values</h3>
      <p>Status: invalid</p>
      <p>Adjust the parameters until all radii are positive, beta is in range, and x lies inside the smaller radius.</p>
    `;
  }

  return `
    <h3>Current values</h3>
    <dl class="simulation-values">
      <div><dt>Status</dt><dd>valid</dd></div>
      <div><dt>k = a / b</dt><dd>${formatNumber(geometry.k)}</dd></div>
      <div><dt>a(x)</dt><dd>${formatNumber(geometry.halfOne)}</dd></div>
      <div><dt>b(x)</dt><dd>${formatNumber(geometry.halfTwo)}</dd></div>
      <div><dt>A(x)</dt><dd>${formatNumber(geometry.area)}</dd></div>
      <div><dt>Valid interval</dt><dd>${formatNumber(-geometry.a)} <= x <= ${formatNumber(geometry.a)}</dd></div>
    </dl>
    <p class="muted">${normalized.swapped ? "The display accepts the entered radii, while k is normalized using a=min(r1,r2), b=max(r1,r2)." : "The entered radii already match the normalized order r1 <= r2."}</p>
  `;
}

function renderFormulaPanel(normalized, geometry) {
  const areaValue = geometry ? formatNumber(geometry.area) : "undefined";
  return `
    <h3>Formula panel</h3>
    <div class="simulation-equation">\\[
      A(x)=
      \\frac{4\\sqrt{r_1^2-x^2}\\sqrt{r_2^2-x^2}}
      {\\sin\\beta}
    \\]</div>
    <p>Current value: <strong>${areaValue}</strong></p>
    <p>Domain: \\(|x|\\le ${formatNumber(normalized.a)}\\), \\(0<\\beta\\le 90^\\circ\\).</p>
    <p><a href="#chapter-3/eq-ch3-031">Open equation (3.31)</a></p>
    <p class="muted">${ELLIPTIC_CONVENTION}</p>
    <p><a href="#chapter-3/ch3-sec-3-14">Open numerical verification section</a></p>
  `;
}

function renderNumericalPanel(state) {
  const exactV = exactVolume(state);
  const exactS = exactSurfaceAreas(state);
  const volumeQuad = directVolumeQuadrature(state, state.quadratureIntervals);
  const surfaceQuad = surfaceAreaQuadrature(state, state.quadratureIntervals);
  const monteCarlo = state.showMonteCarlo ? monteCarloVolume(state, state.monteCarloSamples) : null;

  if (!exactV || !exactS || !volumeQuad || !surfaceQuad) {
    return `
      <h3>Numerical verification</h3>
      <p>Enter valid positive radii and beta to compute formula checks.</p>
    `;
  }

  return `
    <h3>Numerical verification</h3>
    <p class="muted">Closed forms are compared with independent numerical procedures. These checks support review; they do not replace proof.</p>
    <dl class="simulation-values">
      <div><dt>k</dt><dd>${formatNumber(exactV.k)}</dd></div>
      <div><dt>m = k^2</dt><dd>${formatNumber(exactV.m)}</dd></div>
      <div><dt>Volume formula</dt><dd>${formatNumber(exactV.value, 8)}</dd></div>
      <div><dt>Volume quadrature</dt><dd>${formatNumber(volumeQuad.value, 8)}</dd></div>
      <div><dt>|error|</dt><dd>${formatScientific(absoluteError(volumeQuad.value, exactV.value))}</dd></div>
      <div><dt>relative error</dt><dd>${formatScientific(relativeError(volumeQuad.value, exactV.value))}</dd></div>
      <div><dt>S small</dt><dd>${formatNumber(exactS.small, 8)}</dd></div>
      <div><dt>S large</dt><dd>${formatNumber(exactS.large, 8)}</dd></div>
      <div><dt>S total formula</dt><dd>${formatNumber(exactS.total, 8)}</dd></div>
      <div><dt>S total quadrature</dt><dd>${formatNumber(surfaceQuad.total, 8)}</dd></div>
      <div><dt>S |error|</dt><dd>${formatScientific(absoluteError(surfaceQuad.total, exactS.total))}</dd></div>
      <div><dt>S relative error</dt><dd>${formatScientific(relativeError(surfaceQuad.total, exactS.total))}</dd></div>
      ${renderMonteCarloRows(monteCarlo, exactV)}
    </dl>
    <p class="muted">Quadrature intervals: ${volumeQuad.intervals}. Monte Carlo seed: ${monteCarlo?.seed ?? "off"}.</p>
  `;
}

function renderMonteCarloRows(monteCarlo, exactV) {
  if (!monteCarlo) {
    return `<div><dt>Monte Carlo</dt><dd>off</dd></div>`;
  }
  return `
    <div><dt>Monte Carlo V</dt><dd>${formatNumber(monteCarlo.value, 8)}</dd></div>
    <div><dt>MC |error|</dt><dd>${formatScientific(absoluteError(monteCarlo.value, exactV.value))}</dd></div>
    <div><dt>MC relative error</dt><dd>${formatScientific(relativeError(monteCarlo.value, exactV.value))}</dd></div>
    <div><dt>MC standard error</dt><dd>${formatScientific(monteCarlo.standardError)}</dd></div>
  `;
}

function typesetInsertedMath(root) {
  typesetMath(root);
}

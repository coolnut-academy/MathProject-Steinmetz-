import assert from "node:assert/strict";
import {
  absoluteError,
  completeEllipticE,
  completeEllipticK,
  crossSectionArea,
  crossSectionGeometry,
  describeSimulationState,
  directVolumeQuadrature,
  ellipticParameterFromModulus,
  exactSurfaceAreas,
  exactVolume,
  monteCarloVolume,
  relativeError,
  normalizeState,
  surfaceAreaQuadrature
} from "../src/simulation/formulas.js";
import {
  ORBIT_CONTROLS_URL,
  THREE_MODULE_URL,
  axisAngleDegrees,
  sampleIntersectionPoints
} from "../src/simulation/geometry3d.js";
import { presets } from "../src/simulation/presets.js";

const tolerance = 1e-10;

assert.equal(crossSectionArea({ r1: 1, r2: 1, betaDeg: 90, x: 0 }), 4);
assert.equal(crossSectionArea({ r1: 1, r2: 2, betaDeg: 90, x: 1 }), 0);
assert.equal(crossSectionArea({ r1: 1, r2: 2, betaDeg: 90, x: 1.01 }), null);

const sixtyDegreeArea = crossSectionArea({ r1: 1, r2: 2, betaDeg: 60, x: 0 });
assert.ok(Math.abs(sixtyDegreeArea - 8 / Math.sin(Math.PI / 3)) < tolerance);

const normalized = normalizeState({ r1: 3, r2: 1, betaDeg: 45, x: 0.25 });
assert.equal(normalized.valid, true);
assert.equal(normalized.a, 1);
assert.equal(normalized.b, 3);
assert.equal(normalized.swapped, true);
assert.equal(normalized.k, 1 / 3);

const invalidAngle = normalizeState({ r1: 1, r2: 2, betaDeg: 0, x: 0 });
assert.equal(invalidAngle.valid, false);
assert.match(invalidAngle.errors.join(" "), /beta/);

const invalidX = normalizeState({ r1: 1, r2: 2, betaDeg: 30, x: -1.2 });
assert.equal(invalidX.valid, false);
assert.match(invalidX.errors.join(" "), /\|x\|/);

const smallAngle = normalizeState({ r1: 1, r2: 3, betaDeg: 12, x: 0 });
assert.equal(smallAngle.valid, true);
assert.ok(crossSectionArea(smallAngle) > crossSectionArea({ r1: 1, r2: 3, betaDeg: 90, x: 0 }));

const geometry = crossSectionGeometry({ r1: 1, r2: 2, betaDeg: 60, x: 0.25 });
assert.ok(geometry);
assert.equal(geometry.vertices.length, 4);
assert.ok(Math.abs(polygonArea(geometry.vertices) - geometry.area) < tolerance);

assert.match(
  describeSimulationState({ r1: 1, r2: 2, betaDeg: 60, x: 0.25 }),
  /parallelogram/
);
assert.match(
  describeSimulationState({ r1: 1, r2: 2, betaDeg: 60, x: 2 }),
  /Invalid state/
);

const requiredPresetIds = new Set([
  "equal-perpendicular",
  "unequal-perpendicular",
  "one-two-sixty",
  "one-three-forty-five",
  "nearly-equal",
  "small-ratio",
  "small-angle"
]);
for (const id of requiredPresetIds) {
  assert.ok(presets.some((preset) => preset.id === id), `Missing preset ${id}`);
}

assert.match(THREE_MODULE_URL, /^https:\/\/esm\.sh\/three@/);
assert.match(ORBIT_CONTROLS_URL, /^https:\/\/esm\.sh\/three@/);
assert.ok(Math.abs(axisAngleDegrees({ r1: 1, r2: 2, betaDeg: 60, x: 0 }) - 60) < tolerance);
assert.ok(Math.abs(axisAngleDegrees({ r1: 1, r2: 2, betaDeg: 90, x: 0 }) - 90) < tolerance);

const sampled = sampleIntersectionPoints({ r1: 1, r2: 2, betaDeg: 60, x: 0 }, 14);
assert.ok(sampled.length > 0);
assert.ok(sampled.length <= 5200);
for (const point of sampled) {
  assert.ok(point.x * point.x + point.y * point.y <= 1 + tolerance);
  const beta = Math.PI / 3;
  const secondDistance = point.y * Math.cos(beta) - point.z * Math.sin(beta);
  assert.ok(point.x * point.x + secondDistance * secondDistance <= 4 + tolerance);
}

assert.deepEqual(sampleIntersectionPoints({ r1: 1, r2: 2, betaDeg: 60, x: 2 }, 14), []);

assert.ok(Math.abs(completeEllipticK(0) - Math.PI / 2) < tolerance);
assert.ok(Math.abs(completeEllipticE(0) - Math.PI / 2) < tolerance);
assert.equal(completeEllipticK(1), Infinity);
assert.equal(completeEllipticE(1), 1);
assert.equal(ellipticParameterFromModulus(0.5), 0.25);

const classicalVolume = exactVolume({ r1: 1, r2: 1, betaDeg: 90 });
const classicalSurface = exactSurfaceAreas({ r1: 1, r2: 1, betaDeg: 90 });
const classicalSurfaceQuadrature = surfaceAreaQuadrature({ r1: 1, r2: 1, betaDeg: 90 }, 512);
assert.ok(Math.abs(classicalVolume.value - 16 / 3) < tolerance);
assert.ok(Math.abs(classicalSurface.total - 16) < tolerance);
assert.ok(Math.abs(classicalSurfaceQuadrature.total - 16) < 1e-8);

const equalAngleVolume = exactVolume({ r1: 2, r2: 2, betaDeg: 30 });
const equalAngleSurface = exactSurfaceAreas({ r1: 2, r2: 2, betaDeg: 30 });
assert.ok(Math.abs(equalAngleVolume.value - (16 * 8) / (3 * 0.5)) < 1e-9);
assert.ok(Math.abs(equalAngleSurface.total - (16 * 4) / 0.5) < 1e-9);

const unequalState = { r1: 1, r2: 2, betaDeg: 60 };
const exactUnequal = exactVolume(unequalState);
const quadratureUnequal = directVolumeQuadrature(unequalState, 1024);
assert.ok(relativeError(quadratureUnequal.value, exactUnequal.value) < 1e-8);
assert.ok(absoluteError(quadratureUnequal.value, exactUnequal.value) < 1e-7);

const surfaceFormula = exactSurfaceAreas(unequalState);
const surfaceQuadrature = surfaceAreaQuadrature(unequalState, 1024);
assert.ok(surfaceFormula.small > 0);
assert.ok(surfaceFormula.large > 0);
assert.ok(Math.abs(surfaceFormula.total - (surfaceFormula.small + surfaceFormula.large)) < tolerance);
assert.ok(relativeError(surfaceQuadrature.total, surfaceFormula.total) < 1e-8);

const scaledVolume = exactVolume({ r1: 3, r2: 6, betaDeg: 60 });
const scaledSurface = exactSurfaceAreas({ r1: 3, r2: 6, betaDeg: 60 });
assert.ok(Math.abs(scaledVolume.value / exactUnequal.value - 27) < 1e-8);
assert.ok(Math.abs(scaledSurface.total / surfaceFormula.total - 9) < 1e-8);

const swappedVolume = exactVolume({ r1: 2, r2: 1, betaDeg: 60 });
const swappedSurface = exactSurfaceAreas({ r1: 2, r2: 1, betaDeg: 60 });
assert.ok(Math.abs(swappedVolume.value - exactUnequal.value) < 1e-10);
assert.ok(Math.abs(swappedSurface.total - surfaceFormula.total) < 1e-10);

const mcOne = monteCarloVolume(unequalState, 4000, 42);
const mcTwo = monteCarloVolume(unequalState, 4000, 42);
assert.equal(mcOne.value, mcTwo.value);
assert.equal(mcOne.inside, mcTwo.inside);
assert.ok(mcOne.standardError > 0);

function polygonArea(vertices) {
  let sum = 0;
  for (let index = 0; index < vertices.length; index += 1) {
    const current = vertices[index];
    const next = vertices[(index + 1) % vertices.length];
    sum += current.y * next.z - next.y * current.z;
  }
  return Math.abs(sum) / 2;
}

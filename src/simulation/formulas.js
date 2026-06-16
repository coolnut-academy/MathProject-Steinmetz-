export const ELLIPTIC_CONVENTION =
  "Complete elliptic integrals use the modulus k. If a library uses parameter m, pass m=k^2.";

export function normalizeState(state) {
  const r1 = Number(state.r1);
  const r2 = Number(state.r2);
  const betaDeg = Number(state.betaDeg);
  const x = Number(state.x);
  const beta = (betaDeg * Math.PI) / 180;
  const finiteInputs =
    Number.isFinite(r1) &&
    Number.isFinite(r2) &&
    Number.isFinite(betaDeg) &&
    Number.isFinite(x);
  const a = finiteInputs ? Math.min(r1, r2) : NaN;
  const b = finiteInputs ? Math.max(r1, r2) : NaN;
  const errors = [];

  if (!Number.isFinite(r1) || r1 <= 0) {
    errors.push("r1 must be a positive finite radius.");
  }
  if (!Number.isFinite(r2) || r2 <= 0) {
    errors.push("r2 must be a positive finite radius.");
  }
  if (!Number.isFinite(betaDeg) || betaDeg <= 0 || betaDeg > 90) {
    errors.push("beta must satisfy 0 < beta <= 90 degrees.");
  }
  if (!Number.isFinite(x)) {
    errors.push("x must be a finite cross-section position.");
  }
  if (Number.isFinite(a) && a > 0 && Number.isFinite(x) && Math.abs(x) > a) {
    errors.push(`x must satisfy |x| <= ${formatNumber(a)}.`);
  }

  return {
    r1,
    r2,
    a,
    b,
    betaDeg,
    beta,
    x,
    k: b > 0 ? a / b : NaN,
    swapped: Number.isFinite(r1) && Number.isFinite(r2) ? r1 > r2 : false,
    valid: errors.length === 0,
    errors,
    interval: Number.isFinite(a) && a > 0 ? [-a, a] : null
  };
}

export function normalizeFormulaState(state) {
  const normalized = normalizeState({ ...state, x: Number.isFinite(Number(state.x)) ? state.x : 0 });
  const errors = normalized.errors.filter((error) => !error.startsWith("x must satisfy"));
  return {
    ...normalized,
    valid: errors.length === 0,
    errors
  };
}

export function crossSectionArea(state) {
  const geometry = crossSectionGeometry(state);
  return geometry?.area ?? null;
}

export function crossSectionGeometry(state) {
  const normalized = normalizeState(state);
  if (!normalized.valid) {
    return null;
  }

  const { r1, r2, beta, x } = normalized;
  const halfOne = stableSqrt(r1 * r1 - x * x);
  const halfTwo = stableSqrt(r2 * r2 - x * x);
  const sinBeta = Math.sin(beta);
  const cosBeta = Math.cos(beta);
  const area = (4 * halfOne * halfTwo) / sinBeta;
  const vertices = [
    pointAt(-halfOne, -halfTwo, cosBeta, sinBeta),
    pointAt(halfOne, -halfTwo, cosBeta, sinBeta),
    pointAt(halfOne, halfTwo, cosBeta, sinBeta),
    pointAt(-halfOne, halfTwo, cosBeta, sinBeta)
  ];

  return {
    ...normalized,
    halfOne,
    halfTwo,
    sinBeta,
    cosBeta,
    area,
    vertices,
    stripOne: { label: "|y| <= a(x)", halfWidth: halfOne },
    stripTwo: { label: "|y cos beta - z sin beta| <= b(x)", halfWidth: halfTwo }
  };
}

export function describeSimulationState(state) {
  const normalized = normalizeState(state);
  if (!normalized.valid) {
    return `Invalid state. ${normalized.errors.join(" ")}`;
  }
  const geometry = crossSectionGeometry(state);
  const endpoint = Math.abs(geometry.x) === geometry.a;
  const normalizedNote = geometry.swapped
    ? "Radii were normalized for k because r1 is larger than r2."
    : "Radii order already satisfies r1 <= r2 for k.";
  return [
    `Valid cross-section with r1=${formatNumber(geometry.r1)}, r2=${formatNumber(geometry.r2)}, beta=${formatNumber(geometry.betaDeg)} degrees, and x=${formatNumber(geometry.x)}.`,
    `The admissible interval is ${formatNumber(-geometry.a)} <= x <= ${formatNumber(geometry.a)}.`,
    `a(x)=${formatNumber(geometry.halfOne)}, b(x)=${formatNumber(geometry.halfTwo)}, k=${formatNumber(geometry.k)}, and A(x)=${formatNumber(geometry.area)}.`,
    endpoint ? "This is an endpoint cross-section with zero area." : "The cross-section is a parallelogram.",
    normalizedNote
  ].join(" ");
}

export function completeEllipticK(k) {
  const modulus = normalizeModulus(k);
  if (modulus === null) {
    return null;
  }
  if (modulus === 1) {
    return Infinity;
  }
  return adaptiveSimpson(
    (theta) => 1 / Math.sqrt(1 - modulus * modulus * Math.sin(theta) ** 2),
    0,
    Math.PI / 2,
    1e-11,
    18
  );
}

export function completeEllipticE(k) {
  const modulus = normalizeModulus(k);
  if (modulus === null) {
    return null;
  }
  if (modulus === 1) {
    return 1;
  }
  return adaptiveSimpson(
    (theta) => Math.sqrt(1 - modulus * modulus * Math.sin(theta) ** 2),
    0,
    Math.PI / 2,
    1e-11,
    18
  );
}

export function ellipticParameterFromModulus(k) {
  const modulus = normalizeModulus(k);
  return modulus === null ? null : modulus * modulus;
}

export function exactVolume(state) {
  const normalized = normalizeFormulaState(state);
  if (!normalized.valid) {
    return null;
  }
  const { b, beta, k } = normalized;
  const bracket = volumeBracket(k);
  return {
    value: (8 * b ** 3 * bracket) / (3 * Math.sin(beta)),
    method: "closed-form elliptic integral",
    source: "Chapter 3 equations (3.4), (3.17), and summary formula",
    k,
    m: ellipticParameterFromModulus(k),
    bracket
  };
}

export function exactSurfaceAreas(state) {
  const normalized = normalizeFormulaState(state);
  if (!normalized.valid) {
    return null;
  }
  const { a, b, beta, k } = normalized;
  const e = completeEllipticE(k);
  const mixed = oneMinusK2TimesK(k);
  const sinBeta = Math.sin(beta);
  const small = (8 * a * b * e) / sinBeta;
  const large = (8 * b ** 2 * (e - mixed)) / sinBeta;
  return {
    small,
    large,
    total: small + large,
    method: "closed-form elliptic integral",
    source: "Chapter 3 surface formulas for S_small, S_large, and S",
    k,
    m: ellipticParameterFromModulus(k),
    E: e,
    oneMinusK2K: mixed
  };
}

export function directVolumeQuadrature(state, intervals = 512) {
  const normalized = normalizeFormulaState(state);
  if (!normalized.valid) {
    return null;
  }
  const evenIntervals = nearestEven(intervals, 32, 4096);
  const { a, b, beta } = normalized;
  const value = compositeSimpson(
    (theta) => {
      const cosTheta = Math.cos(theta);
      return (4 * a ** 2 * cosTheta ** 2 * stableSqrt(b ** 2 - a ** 2 * Math.sin(theta) ** 2)) / Math.sin(beta);
    },
    -Math.PI / 2,
    Math.PI / 2,
    evenIntervals
  );
  return {
    value,
    intervals: evenIntervals,
    method: "direct Simpson quadrature of cross-section area with x=a sin(theta)",
    source: "Chapter 3 equation V=int A(x) dx"
  };
}

export function surfaceAreaQuadrature(state, intervals = 720) {
  const normalized = normalizeFormulaState(state);
  if (!normalized.valid) {
    return null;
  }
  const evenIntervals = nearestEven(intervals, 64, 4096);
  const { a, b, beta, k } = normalized;
  const sinBeta = Math.sin(beta);
  const smallIntegral = compositeSimpson(
    (phi) => Math.sqrt(b ** 2 - a ** 2 * Math.cos(phi) ** 2),
    0,
    2 * Math.PI,
    evenIntervals
  );
  const largeIntegral =
    k === 0
      ? 0
      : k === 1
        ? 1
      : compositeSimpson(
          (u) => (k ** 2 * Math.cos(u) ** 2) / Math.sqrt(1 - k ** 2 * Math.sin(u) ** 2),
          0,
          Math.PI / 2,
          evenIntervals
        );
  const small = (2 * a * smallIntegral) / sinBeta;
  const large = (8 * b ** 2 * largeIntegral) / sinBeta;
  return {
    small,
    large,
    total: small + large,
    intervals: evenIntervals,
    method: "Simpson quadrature of Chapter 3 surface integrals with endpoint-stable substitution for S_large",
    source: "Chapter 3 equations for S1_quad and S2_quad"
  };
}

export function monteCarloVolume(state, samples = 12000, seed = 123456789) {
  const normalized = normalizeFormulaState(state);
  if (!normalized.valid) {
    return null;
  }
  const count = clampInteger(samples, 1000, 200000);
  const random = seededRandom(seed);
  const { r1, r2, a, beta } = normalized;
  const sinBeta = Math.sin(beta);
  const cosBeta = Math.cos(beta);
  const zLimit = (r2 + r1 * Math.abs(cosBeta)) / sinBeta;
  const volumeBox = 2 * a * 2 * r1 * 2 * zLimit;
  let inside = 0;

  for (let index = 0; index < count; index += 1) {
    const x = lerp(-a, a, random());
    const y = lerp(-r1, r1, random());
    const z = lerp(-zLimit, zLimit, random());
    const inFirst = x * x + y * y <= r1 * r1;
    const secondDistance = y * cosBeta - z * sinBeta;
    const inSecond = x * x + secondDistance * secondDistance <= r2 * r2;
    if (inFirst && inSecond) {
      inside += 1;
    }
  }

  const estimate = volumeBox * (inside / count);
  const p = inside / count;
  return {
    value: estimate,
    samples: count,
    inside,
    seed,
    standardError: volumeBox * Math.sqrt((p * (1 - p)) / count),
    method: "deterministic seeded Monte Carlo volume estimate",
    source: "Chapter 3 Monte Carlo verification guidance"
  };
}

export function relativeError(value, reference) {
  if (!Number.isFinite(value) || !Number.isFinite(reference)) {
    return null;
  }
  const absolute = Math.abs(value - reference);
  return Math.abs(reference) < 1e-14 ? absolute : absolute / Math.abs(reference);
}

export function absoluteError(value, reference) {
  if (!Number.isFinite(value) || !Number.isFinite(reference)) {
    return null;
  }
  return Math.abs(value - reference);
}

export function formatNumber(value, maximumFractionDigits = 6) {
  if (value === null || !Number.isFinite(value)) {
    return "undefined";
  }
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits
  }).format(value);
}

export function formatScientific(value, maximumFractionDigits = 3) {
  if (value === null || !Number.isFinite(value)) {
    return "undefined";
  }
  if (value === 0) {
    return "0";
  }
  return value.toExponential(maximumFractionDigits);
}

function volumeBracket(k) {
  const e = completeEllipticE(k);
  return (1 + k ** 2) * e - oneMinusK2TimesK(k);
}

function oneMinusK2TimesK(k) {
  if (k === 1) {
    return 0;
  }
  return (1 - k ** 2) * completeEllipticK(k);
}

function pointAt(y, signedStripTwoWidth, cosBeta, sinBeta) {
  return {
    y,
    z: (y * cosBeta - signedStripTwoWidth) / sinBeta
  };
}

function stableSqrt(value) {
  return Math.sqrt(Math.max(0, value));
}

function normalizeModulus(k) {
  const modulus = Number(k);
  if (!Number.isFinite(modulus) || modulus < 0 || modulus > 1) {
    return null;
  }
  return modulus;
}

function compositeSimpson(fn, a, b, intervals) {
  const n = nearestEven(intervals, 2, 100000);
  const h = (b - a) / n;
  let sum = fn(a) + fn(b);
  for (let index = 1; index < n; index += 1) {
    sum += (index % 2 === 0 ? 2 : 4) * fn(a + index * h);
  }
  return (h / 3) * sum;
}

function adaptiveSimpson(fn, a, b, tolerance, maxDepth) {
  const whole = simpsonEstimate(fn, a, b);
  return adaptiveSimpsonStep(fn, a, b, tolerance, whole, maxDepth);
}

function adaptiveSimpsonStep(fn, a, b, tolerance, whole, depth) {
  const midpoint = (a + b) / 2;
  const left = simpsonEstimate(fn, a, midpoint);
  const right = simpsonEstimate(fn, midpoint, b);
  const delta = left + right - whole;
  if (depth <= 0 || Math.abs(delta) <= 15 * tolerance) {
    return left + right + delta / 15;
  }
  return (
    adaptiveSimpsonStep(fn, a, midpoint, tolerance / 2, left, depth - 1) +
    adaptiveSimpsonStep(fn, midpoint, b, tolerance / 2, right, depth - 1)
  );
}

function simpsonEstimate(fn, a, b) {
  const midpoint = (a + b) / 2;
  return ((b - a) / 6) * (fn(a) + 4 * fn(midpoint) + fn(b));
}

function nearestEven(value, min, max) {
  const clamped = clampInteger(value, min, max);
  return clamped % 2 === 0 ? clamped : clamped + 1;
}

function clampInteger(value, min, max) {
  const integer = Math.round(Number(value) || min);
  return Math.min(max, Math.max(min, integer));
}

function seededRandom(seed) {
  let state = Number(seed) >>> 0;
  return () => {
    state = (1664525 * state + 1013904223) >>> 0;
    return state / 0x100000000;
  };
}

function lerp(start, end, t) {
  return start + (end - start) * t;
}

export function normalizeState(state) {
  const r1 = Number(state.r1);
  const r2 = Number(state.r2);
  const betaDeg = Number(state.betaDeg);
  const x = Number(state.x);
  const beta = (betaDeg * Math.PI) / 180;
  const a = Math.min(r1, r2);
  const b = Math.max(r1, r2);

  return {
    r1,
    r2,
    a,
    b,
    betaDeg,
    beta,
    x,
    k: a / b,
    valid:
      Number.isFinite(r1) &&
      Number.isFinite(r2) &&
      Number.isFinite(beta) &&
      r1 > 0 &&
      r2 > 0 &&
      beta > 0 &&
      beta <= Math.PI / 2 &&
      Math.abs(x) <= a
  };
}

export function crossSectionArea(state) {
  const normalized = normalizeState(state);
  if (!normalized.valid) {
    return null;
  }
  const { r1, r2, beta, x } = normalized;
  return (4 * Math.sqrt(r1 * r1 - x * x) * Math.sqrt(r2 * r2 - x * x)) / Math.sin(beta);
}

export function formatNumber(value) {
  if (value === null || !Number.isFinite(value)) {
    return "undefined";
  }
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 6
  }).format(value);
}

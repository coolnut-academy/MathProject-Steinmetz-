import assert from "node:assert/strict";
import { routes } from "../src/content/index.js";
import { validateRoutes } from "../src/services/validation.js";
import { crossSectionArea, normalizeState } from "../src/simulation/formulas.js";

const result = validateRoutes(routes);
assert.equal(result.ok, true, result.errors.join("\n"));
assert.equal(new Set(routes.map((route) => route.id)).size, routes.length);
assert.ok(routes.some((route) => route.id === "simulation"));
assert.ok(routes.some((route) => route.id === "chapter-3"));

const normalized = normalizeState({ r1: 1, r2: 1, betaDeg: 90, x: 0 });
assert.equal(normalized.valid, true);
assert.equal(crossSectionArea({ r1: 1, r2: 1, betaDeg: 90, x: 0 }), 4);

const invalid = normalizeState({ r1: 1, r2: 1, betaDeg: 90, x: 2 });
assert.equal(invalid.valid, false);

import assert from "node:assert/strict";
import { routes } from "../src/content/index.js";
import { references } from "../src/content/references.js";
import { buildSearchIndex, searchIndex } from "../src/services/search.js";
import { validateRoutes } from "../src/services/validation.js";
import { crossSectionArea, normalizeState } from "../src/simulation/formulas.js";

const result = validateRoutes(routes, { references });
assert.equal(result.ok, true, result.errors.join("\n"));
assert.equal(new Set(routes.map((route) => route.id)).size, routes.length);
assert.ok(routes.some((route) => route.id === "simulation"));
assert.ok(routes.some((route) => route.id === "chapter-3"));

const normalized = normalizeState({ r1: 1, r2: 1, betaDeg: 90, x: 0 });
assert.equal(normalized.valid, true);
assert.equal(crossSectionArea({ r1: 1, r2: 1, betaDeg: 90, x: 0 }), 4);

const invalid = normalizeState({ r1: 1, r2: 1, betaDeg: 90, x: 2 });
assert.equal(invalid.valid, false);

const broken = validateRoutes(
  [
    {
      id: "broken",
      blocks: [
        {
          id: "broken-paragraph",
          type: "paragraph",
          text: "bad ref",
          equationRefs: [{ label: "9.9", id: "missing-equation" }]
        }
      ]
    }
  ],
  { references }
);
assert.equal(broken.ok, false);
assert.match(broken.errors.join("\n"), /missing equation/);

const index = buildSearchIndex(routes);
assert.ok(index.length > 20);
assert.ok(searchIndex(index, "elliptic").some((item) => item.href.startsWith("#chapter-3")));
assert.ok(searchIndex(index, "\\frac{8r_2^3").some((item) => item.type === "equation"));

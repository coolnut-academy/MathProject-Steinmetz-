import assert from "node:assert/strict";
import { getRouteById } from "../src/content/index.js";
import { serializeRoute, serializeBlock } from "../src/services/export.js";

const chapter3 = getRouteById("chapter-3");
const text = serializeRoute(chapter3);

assert.match(text, /บทที่ 3/);
assert.match(text, /\\frac\{8r_2\^3\}/);
assert.doesNotMatch(text, /Copy LaTeX/);
assert.doesNotMatch(text, /MathJax/);

const equation = chapter3.blocks
  .flatMap((block) => block.content ?? [])
  .flatMap((block) => block.content ?? [block])
  .find((block) => block.type === "equation");

assert.ok(equation);
assert.equal(serializeBlock(equation).includes(equation.latex), true);

import { cp, mkdir, rm, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { routes } from "../src/content/index.js";
import { references } from "../src/content/references.js";
import { validateRoutes } from "../src/services/validation.js";

const root = resolve(process.cwd());
const dist = join(root, "dist");

const validation = validateRoutes(routes, { references });
if (!validation.ok) {
  console.error(validation.errors.join("\n"));
  process.exit(1);
}

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(join(root, "index.html"), join(dist, "index.html"));
await cp(join(root, "src"), join(dist, "src"), { recursive: true });

if (existsSync(join(root, "public"))) {
  await cp(join(root, "public"), join(dist, "public"), { recursive: true });
}

const rootHtml = (await readdir(root)).filter((file) => file.toLowerCase().endsWith(".html"));
if (rootHtml.length !== 1 || rootHtml[0] !== "index.html") {
  console.error(`Expected one root public HTML file named index.html, found: ${rootHtml.join(", ")}`);
  process.exit(1);
}

console.log(`Build complete: ${dist}`);

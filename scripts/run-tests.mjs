import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";

const testDir = fileURLToPath(new URL("../tests/", import.meta.url));
const files = (await readdir(testDir))
  .filter((file) => file.endsWith(".test.mjs"))
  .sort();

let failed = 0;

for (const file of files) {
  try {
    await import(pathToFileURL(join(testDir, file)).href);
    console.log(`PASS ${file}`);
  } catch (error) {
    failed += 1;
    console.error(`FAIL ${file}`);
    console.error(error.stack ?? error.message);
  }
}

if (failed > 0) {
  process.exit(1);
}

console.log(`All ${files.length} test files passed.`);

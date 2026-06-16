import { routes } from "../src/content/index.js";
import { validateRoutes } from "../src/services/validation.js";

const result = validateRoutes(routes);

if (!result.ok) {
  console.error("Content validation failed:");
  for (const error of result.errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Content validation passed for ${result.ids.length} content block IDs.`);

# Steinmetz Solid Mathematical Report

Static single-page mathematical report workspace about Steinmetz solids. The app keeps one public HTML entry point, stores equations as LaTeX source, renders them with MathJax, and provides copy/export workflows for transfer into Microsoft Word.

## Current Status

This is an in-progress report workspace. It includes the application shell, routing, academic layout, structured content renderer, MathJax pipeline, source-aware copy/export controls, search, print-source modes, validation scripts, a complete imported Chapter 3 source module, and interactive 2D/3D/numerical simulation tools. It is not the complete report.

The reviewed Chapter 3 source file `03_Steinmetz_Chapter3_Full_Proof.md` is present at the repository root and has been imported into `src/content/chapter3.js`. Chapters 1, 2, 4, 5, abstracts, bibliography, and appendices remain placeholders until reviewed source material is supplied.

## Run Locally

```powershell
node scripts/dev-server.mjs
```

Then open:

```text
http://localhost:4173/
```

The `package.json` scripts are:

```powershell
npm run dev
npm run test
npm run build
```

## Validation

```powershell
node scripts/validate-content.mjs
node scripts/run-tests.mjs
node scripts/build.mjs
```

The build script writes a static bundle to `dist/`.

## Content Editing

Content lives in `src/content/` as structured JavaScript modules. Equations must keep their original LaTeX source in the `latex` field. Copy and export features read from content data, not from MathJax-rendered DOM.

Important block fields:

- `id`: stable unique ID
- `type`: block type such as `paragraph`, `theorem`, `proof`, `equation`, `warning`, `placeholder`
- `status`: `verified-proof`, `needs-review`, `placeholder`, etc.
- `source`: source document or plan section
- `content`: nested blocks where appropriate
- `relatedIds`: internal references to validate

## Architecture Notes

- `index.html` is the only public HTML page.
- Hash routes are handled in `src/app/router.js`.
- Report content is rendered by `src/renderers/reportRenderer.js`.
- Block rendering is centralized in `src/renderers/blockRenderers.js`.
- MathJax is configured in `index.html` and triggered through `src/renderers/mathRenderer.js`.
- Copy/export logic is in `src/services/`.
- Simulation code is lazy-loaded from `src/simulation/simulationController.js` only when the Simulation tab opens.

## Next Phase

Phase 12A is Chapter 1 expansion. Do not generate Chapter 1 prose from the plan alone. Add a reviewed Chapter 1 source document first, then import it section by section while preserving source order, assumptions, scope, objectives, and citation status.

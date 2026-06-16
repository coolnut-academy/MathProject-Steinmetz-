# Accessibility Audit

## Current checkpoint

Phase 11 source-search, cross-reference, print, and accessibility checkpoint.

## Reviewed behavior

- Semantic landmarks are present for header, navigation, main content, asides, and footer.
- Main report navigation exposes tab-style links in a `tablist`.
- Route changes move focus to the main content pane.
- Search results are keyboard-accessible links and announce changes through an `aria-live` results container.
- Search result navigation highlights and focuses the destination block.
- Copy status and simulation status use live regions.
- Equations retain raw LaTeX source for copy/export and print.
- Print CSS hides interactive controls and expands equation source.
- Full-source print mode is generated from structured source data, not MathJax-rendered DOM.
- Simulation includes a text alternative for the current 2D state and a visible notice that 3D output is approximate.

## Known limitations

1. A full automated accessibility test suite is not committed yet.
2. Color contrast has not been measured with an automated contrast tool.
3. The 3D canvas is not itself screen-reader-readable; the adjacent text alternative carries the mathematical state.
4. Search highlighting is temporary and visual, although focus is also moved to the target block.
5. Bibliography accessibility is structurally ready, but no verified reference entries exist yet.
6. Browser checks were performed with headless Chrome smoke tests and screenshot review, not a full assistive-technology pass.

## Next accessibility actions

1. Add automated axe or equivalent checks when a browser test harness is committed.
2. Run keyboard-only traversal after all Phase 11 UI pieces stabilize.
3. Measure color contrast for status badges and focus indicators.
4. Add figure alt text checks when figures are imported.
5. Re-test 200% zoom after full report expansion.

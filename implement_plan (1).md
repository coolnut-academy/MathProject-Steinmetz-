# IMPLEMENTATION PLAN — Steinmetz Solid Mathematical Report Web Application

## 1. Purpose of this document

This document defines **how the project must be implemented**, in what order, what each phase must deliver, and what must be verified before moving to the next phase.

The implementation must follow `plan.md`.

The project is intentionally divided into multiple phases because the final website will contain a long mathematical report. The agent must not compress the content or substitute summaries merely to finish in one pass.

The correct approach is:

- build a robust content system first
- prove the user experience with a real prototype
- import reviewed mathematical content without shortening
- add simulation and numerical checks
- expand chapter by chapter
- audit the complete report before final release

---

# 2. Global implementation rules

## 2.1 Read before editing

Before changing code:

1. Read `plan.md` completely.
2. Read this file completely.
3. Inspect the existing repository structure.
4. Locate any mathematical source documents.
5. Locate `03_Steinmetz_Chapter3_Full_Proof.md` when present.
6. Identify existing assets, scripts, build tools, and constraints.
7. Do not delete existing work without a documented reason.

## 2.2 Source preservation

- Never overwrite a reviewed source document with generated prose.
- Import from source into structured content modules.
- Record source filenames in metadata.
- Preserve the original order and mathematical logic.
- Keep a traceable mapping between source headings and web section IDs.
- Do not silently “improve” a formula.
- Flag suspected mathematical errors instead of correcting them without review.

## 2.3 No shortening rule

During content implementation:

- do not reduce a proof to a paragraph summary
- do not remove intermediate derivation steps
- do not omit definitions that are used later
- do not merge different theorems solely to reduce component count
- do not replace detailed tables with a few sample rows unless the full table is available elsewhere and clearly linked
- do not discard caveats, limits, or exceptional cases
- do not invent missing transitions; mark them for review when necessary

Long content is expected. Solve length through navigation and rendering architecture.

## 2.4 No fabrication rule

Do not fabricate:

- references
- DOI values
- authors
- dates
- historical claims
- novelty claims
- numerical test results
- Monte Carlo output
- theorem statements
- proof steps
- application claims
- experiment results

Placeholders must be labeled `placeholder`, `draft`, or `needs-citation`.

## 2.5 Phase discipline

Complete and validate one phase before moving to the next.

After each phase:

- run relevant tests
- update `IMPLEMENTATION_STATUS.md`
- list completed deliverables
- list known limitations
- list files changed
- record decisions that affect later phases

Do not claim the complete website is finished at the prototype checkpoint.

---

# 3. Target technical direction

Recommended baseline:

- Vite
- HTML5
- CSS3
- Vanilla JavaScript ES modules
- MathJax
- Three.js for 3D
- SVG or Canvas for 2D cross-section
- lightweight test framework compatible with the selected setup
- static production build

A different equivalent tool may be used only when it preserves:

- one public `index.html`
- maintainable content modules
- reliable MathJax rendering
- source-based copy/export
- static deployment
- accessibility
- phased content expansion

Do not introduce a large framework merely to create tabs.

---

# 4. Phase 0 — Repository audit and implementation preparation

## Objective

Understand the existing project and prevent destructive or incompatible implementation.

## Tasks

1. Inspect all top-level files.
2. Inspect `package.json`, build configuration, and lockfiles.
3. Locate current HTML, CSS, JavaScript, report sources, images, and numerical code.
4. Determine whether this is a new repository or an existing application.
5. Identify whether Vite or another bundler is already configured.
6. Locate the reviewed Chapter 3 source.
7. Create a source inventory.
8. Create `IMPLEMENTATION_STATUS.md`.
9. Record any conflicts between repository reality and the proposed plan.
10. Preserve existing working code until replacement has been verified.

## Deliverables

- repository inventory
- implementation status file
- identified source documents
- initial decision log
- no unnecessary functional changes

## Exit criteria

- project structure is understood
- source documents are identified
- no unresolved destructive migration is planned
- the next phase can begin safely

---

# 5. Phase 1 — Project scaffold and single-page shell

## Objective

Create a working static application with `index.html` as the sole public HTML page.

## Tasks

1. Configure the development and production build.
2. Create the recommended source folders.
3. Create `index.html`.
4. Create a minimal application entry module.
5. Create global CSS reset and design tokens.
6. Create the main report shell:
   - header
   - main tab navigation
   - local table-of-contents area
   - main content area
   - utility area
   - footer
7. Add all required main tabs.
8. Implement hash-based route parsing.
9. Restore the active route after refresh.
10. Support browser back and forward.
11. Provide a not-found/fallback route.
12. Add placeholder content for every tab.
13. Ensure only the Simulation module is eligible for lazy loading.

## Deliverables

- working development server
- static production build
- one public HTML page
- all main routes
- responsive shell
- basic README commands

## Required tests

- route changes
- refresh persistence
- back/forward navigation
- no second public HTML page
- basic mobile layout

## Exit criteria

- every main tab opens
- direct hash links work
- production build succeeds
- application remains functional without simulation code loaded

---

# 6. Phase 2 — Academic design system and responsive layout

## Objective

Create a visual system suitable for a long mathematical report.

## Tasks

1. Define typography, spacing, content width, borders, shadows, and semantic colors.
2. Implement components for:
   - definition
   - assumption
   - notation
   - lemma
   - proposition
   - theorem
   - corollary
   - proof
   - numerical check
   - warning
   - note
   - placeholder
3. Create readable paragraph and list styles for Thai text.
4. Create responsive wrappers for:
   - equations
   - tables
   - figures
   - code
5. Create sticky desktop navigation.
6. Create mobile chapter selection and local-TOC drawer.
7. Add visible focus styles.
8. Add reduced-motion behavior.
9. Add print-oriented base styles.
10. Add status badges that use text and icons in addition to color.

## Deliverables

- academic component gallery or development preview
- desktop, tablet, and mobile layouts
- consistent status system
- preliminary print styling

## Required tests

- keyboard traversal
- 200% zoom
- long Thai paragraphs
- long theorem titles
- long equations container behavior
- tables on narrow screens

## Exit criteria

- components remain legible on all target screen sizes
- no essential control depends on hover
- proof and theorem blocks are visually distinct
- long content does not break page width

---

# 7. Phase 3 — Structured report content model

## Objective

Create the content architecture that can hold the complete report without hard-coding giant HTML fragments.

## Tasks

1. Define content block schemas.
2. Define chapter metadata.
3. Define block status metadata.
4. Define stable ID rules.
5. Define equation number storage.
6. Define theorem-proof relationships.
7. Define citation-reference relationships.
8. Create content validators.
9. Create sample content for every block type.
10. Create report renderers.
11. Create local table-of-contents generation.
12. Create cross-reference rendering.
13. Create source metadata display for development/review mode.
14. Make renderer errors visible and non-destructive.

## Recommended content functions

- `renderChapter(chapter)`
- `renderBlock(block)`
- `getBlockById(id)`
- `validateContent(content)`
- `buildLocalToc(chapter)`
- `resolveCrossReference(id)`
- `serializeBlockForCopy(block, mode)`

## Deliverables

- structured content schema
- block renderer system
- validation report
- sample chapter using all key block types

## Required tests

- duplicate IDs rejected
- missing references reported
- invalid equation numbers reported
- unknown block types handled safely
- all block types render
- source order preserved

## Exit criteria

- a chapter can be created entirely from structured data
- the renderer does not require hand-written page HTML
- invalid content is reported clearly
- future chapters can be added without editing the application shell

---

# 8. Phase 4 — MathJax and mathematical source pipeline

## Objective

Render LaTeX reliably while preserving the original source for copying and review.

## Tasks

1. Configure MathJax before it loads.
2. Enable required TeX/AMS functionality.
3. Create a math renderer service.
4. Typeset only the active or newly inserted container.
5. Clear MathJax state before re-rendering replaced content.
6. Create equation cards.
7. Display equation numbers from content data.
8. Add equation anchor links.
9. Add source reveal panels.
10. Add equation render error handling.
11. Add source validation.
12. Build a mathematical rendering test collection.

## Test formulas must include

- inline expressions
- fractions
- nested radicals
- powers and subscripts
- Greek letters
- vectors
- dot products
- matrices
- aligned derivations
- cases
- multiple integrals
- limits
- \(K(k)\) and \(E(k)\)
- equation numbers
- Thai prose adjacent to equations

## Deliverables

- reliable dynamic MathJax rendering
- equation card component
- visible raw LaTeX source
- render test page or automated tests

## Required tests

- source LaTeX equals copied LaTeX
- re-opening a tab does not duplicate rendered output
- a failed formula leaves its source accessible
- long aligned formulas remain usable on mobile

## Exit criteria

- representative Chapter 3 formulas render correctly
- copy source is independent of MathJax output
- no repeated full-page typesetting occurs unnecessarily

---

# 9. Phase 5 — Copy, export, and Word transfer workflow

## Objective

Allow the owner to transfer report text and equations into Word safely and predictably.

## Tasks

1. Implement equation-level copy.
2. Implement equation source reveal.
3. Implement prose-only copy.
4. Implement prose-with-LaTeX copy.
5. Implement section-level copy.
6. Implement chapter-level copy.
7. Implement UTF-8 `.txt` export.
8. Implement LaTeX-oriented source export.
9. Implement clipboard fallback.
10. Add visible success and failure feedback.
11. Add Word transfer guidance.
12. Ensure copied text excludes interface controls and hidden accessibility text.
13. Preserve theorem names, equation numbers, and source order.

## Deliverables

- working copy controls
- export service
- Word help panel
- fallback source selection panel

## Required tests

- Thai content copied correctly
- backslashes preserved
- line breaks preserved
- equation numbering preserved
- no MathJax DOM artifacts included
- fallback works when Clipboard API is denied

## Exit criteria

- the owner can copy a real theorem and its proof into plain text with intact LaTeX
- every important equation has a dependable copy route
- copy failures never cause source loss

---

# 10. Phase 6 — Prototype content and review checkpoint

## Objective

Produce a real prototype for review before importing the entire report.

## Scope

The prototype must include:

- complete application shell
- all main tabs
- Home content
- structured placeholders for sections whose reviewed content is unavailable
- a substantial real sample from Chapter 3
- at least 3–5 complete Chapter 3 sections
- theorem, proof, equation, warning, and numerical-check cards
- local table of contents
- copy controls
- working MathJax
- responsive layout
- simple Simulation placeholder or preview

## Important restriction

The prototype may use only reviewed content that is available.

Do not create fake Chapter 1, 2, 4, or 5 prose merely to make the interface look complete.

## Suggested Chapter 3 prototype sections

- methodology overview
- assumptions and notation
- equation of the oblique cylinder
- cross-section construction
- volume integral or main volume theorem

## Deliverables

- reviewable prototype build
- screenshots or documented views
- prototype content map
- list of placeholders
- review checklist

## Review gate

Stop and evaluate:

1. Is the text comfortable to read?
2. Are equations correct and sharp?
3. Is raw LaTeX easy to copy?
4. Is the local table of contents useful?
5. Are theorem and proof blocks appropriate?
6. Does mobile layout work?
7. Does the owner prefer proof blocks expanded or collapsible by default?
8. Is the simulation area placed appropriately?
9. Does the design look academic rather than promotional?
10. Can the architecture hold the full Chapter 3 without redesign?

## Exit criteria

Proceed only after the prototype structure is accepted or after documented adjustments are applied.

---

# 11. Phase 7 — Complete Chapter 3 import

## Objective

Import the complete reviewed Chapter 3 without substantive shortening.

## Source

Use `03_Steinmetz_Chapter3_Full_Proof.md` when it is available in the repository.

## Tasks

1. Build a source heading map.
2. Convert every source section into structured content.
3. Preserve the original section order.
4. Preserve all definitions, assumptions, lemmas, theorems, proofs, notes, and numerical-method sections.
5. Preserve intermediate derivations.
6. Assign stable IDs.
7. Assign or preserve equation numbers.
8. Link theorem statements to proofs.
9. Link equations to later references.
10. Add source metadata.
11. Flag any suspected inconsistency.
12. Do not correct mathematics silently.
13. Create a source-to-web completeness checklist.
14. Compare source word/section counts against imported content.
15. Add relevant links to Simulation presets.

## Mathematical topics expected in Chapter 3

- coordinate system
- axis vector
- distance to axis
- oblique-cylinder equation
- boundedness of the intersection
- cross-section strips
- parallelogram area
- volume integral
- substitution and normalization
- elliptic integral identities
- closed-form volume
- surface parametrization
- smaller-cylinder surface contribution
- larger-cylinder surface contribution
- total boundary area
- classical cases
- scaling
- limiting behavior
- numerical verification method
- software convention warnings

## Deliverables

- complete Chapter 3 content module
- source completeness report
- cross-reference map
- Chapter 3 copy/export
- Chapter 3 print output

## Required tests

- all source headings represented
- no duplicate equation numbers
- no missing proof endings
- no broken internal links
- all LaTeX renders
- whole-chapter copy preserves order
- expected classical formulas appear exactly

## Exit criteria

- a human reviewer can compare source and website section by section
- no meaningful mathematical content has been omitted
- every important equation is copyable
- Chapter 3 is usable as the main source for preparing the Word version

---

# 12. Phase 8 — Two-dimensional cross-section simulation

## Objective

Build the mathematically transparent 2D simulation before the more complex 3D view.

## Tasks

1. Create parameter state for \(r_1\), \(r_2\), \(\beta\), and \(x\).
2. Validate ranges.
3. Normalize radii when required by formulas.
4. Draw the two strip constraints.
5. Draw the parallelogram intersection.
6. Show axis labels and scales.
7. Show the current area:
   \[
   A(x)=
   \frac{4\sqrt{r_1^2-x^2}\sqrt{r_2^2-x^2}}
   {\sin\beta}.
   \]
8. Show the valid interval for \(x\).
9. Add presets.
10. Add reset.
11. Add explanatory annotations.
12. Add a text alternative describing the current geometric state.
13. Add a direct link to the corresponding proof section.

## Deliverables

- interactive 2D view
- formula panel
- preset system
- accessible text summary

## Required tests

- equal-radius case
- unequal-radius case
- \(x=0\)
- \(x=\pm r_1\)
- invalid \(x\)
- small positive angle
- responsive resizing

## Exit criteria

- the parallelogram matches the analytical formula
- the display remains stable at valid endpoints
- the view is useful without the 3D renderer

---

# 13. Phase 9 — Three-dimensional simulation

## Objective

Add a visual model of both cylinders and their approximate intersection.

## Tasks

1. Lazy-load Three.js only on the Simulation tab.
2. Create two cylinder meshes with correct axis orientation.
3. Draw both central axes.
4. Draw the cross-section plane.
5. Create an approximate intersection representation.
6. Add camera orbit controls.
7. Add reset view.
8. Add visibility toggles.
9. Add legend.
10. Add geometry-resolution control.
11. Add performance safeguards.
12. Add WebGL failure fallback.
13. Add explicit “visual approximation” notice.
14. Synchronize with the 2D cross-section state.

## Implementation caution

The visual mesh must not be presented as exact mathematical evidence.

Avoid an unnecessarily expensive boolean geometry implementation if a stable sampled implicit representation communicates the geometry better.

## Deliverables

- synchronized 3D view
- controls and presets
- fallback view
- performance notes

## Required tests

- cylinder axes form the displayed angle
- radii scale correctly
- cross-section plane matches \(x\)
- camera reset works
- view does not initialize outside Simulation
- low-power fallback remains usable

## Exit criteria

- the 3D view helps explain the model
- it does not block or destabilize the report
- approximation status is visible

---

# 14. Phase 10 — Analytical formulas and numerical verification

## Objective

Connect the simulation to verified formulas and independent numerical checks.

## Tasks

1. Create a pure formula module.
2. Implement input normalization.
3. Implement elliptic integral evaluation using the library’s documented convention.
4. Implement direct volume quadrature.
5. Implement surface-area comparison integrals when available.
6. Implement optional Monte Carlo volume approximation.
7. Report method, settings, and precision.
8. Display absolute and relative error.
9. Handle endpoint and near-endpoint cases.
10. Add dimension/scaling checks.
11. Add deterministic tests.
12. Separate computation precision from display formatting.

## Required formula tests

### Classical case

For \(r_1=r_2=r\) and \(\beta=\pi/2\):

\[
V=\frac{16r^3}{3},
\qquad
S=16r^2.
\]

### Equal radii, general angle

\[
V=\frac{16r^3}{3\sin\beta},
\qquad
S=\frac{16r^2}{\sin\beta}.
\]

### Scaling

\[
V(\lambda r_1,\lambda r_2,\beta)
=
\lambda^3 V(r_1,r_2,\beta),
\]

\[
S(\lambda r_1,\lambda r_2,\beta)
=
\lambda^2 S(r_1,r_2,\beta).
\]

### Library convention

If the library takes parameter \(m\), verify explicitly that:

\[
m=k^2.
\]

## Deliverables

- tested formula module
- numerical comparison panel
- method explanations
- error display
- test dataset

## Exit criteria

- direct quadrature and closed form agree within documented tolerance
- classical cases pass
- endpoint behavior is stable
- numerical methods are clearly labeled as checks

---

# 15. Phase 11 — Search, cross-references, bibliography, print, and accessibility

## Objective

Complete the report-reading infrastructure before importing all remaining chapter content.

## Tasks

### Search

- index titles, headings, prose, theorem names, equation descriptions, tags, and bibliography metadata
- link results to exact blocks
- highlight or focus the destination
- exclude raw rendered MathJax markup

### Cross-references

- theorem to proof
- text to equation
- text to figure/table
- citation to reference
- report section to simulation preset
- report section to appendix

### Bibliography

- create structured reference data
- distinguish verified and unverified entries
- support copy of individual and full references
- support chapter citation map
- validate missing references

### Print

- current section
- current chapter
- full report
- bibliography
- appendices
- expand proofs for print
- hide controls

### Accessibility

- complete keyboard navigation
- route-change focus management
- accessible tab semantics
- figure alt text
- simulation text alternative
- contrast review
- reduced motion
- 200% zoom review

## Deliverables

- global search
- cross-reference validation
- bibliography renderer
- print modes
- accessibility audit report

## Exit criteria

- no known broken references
- print output is readable
- core navigation is keyboard accessible
- unverified references cannot appear as final without a warning

---

# 16. Phase 12 — Full report content expansion

## Objective

Expand the website into the complete report while preserving academic depth.

This phase must be executed in subphases. Do not generate all remaining chapters in a single compressed pass.

---

## Phase 12A — Chapter 1

### Required content areas

- background and significance
- mathematical problem
- research/project questions
- objectives
- assumptions and scope
- terminology
- expected benefits

### Rules

- align scope with results that have actually been proved
- avoid unsupported novelty language
- distinguish ideal geometric applications from validated engineering use
- preserve enough detail for direct later use in the formal report

### Exit criteria

- objectives correspond to Chapter 4 results
- no objective promises an unachieved result
- all factual claims needing sources are marked or cited

---

## Phase 12B — Chapter 2

### Required content areas

- classical Steinmetz solid
- three-dimensional analytic geometry
- rotation and oblique cylinder equations
- Fubini/cross-section volume method
- change of variables and Jacobians
- complete elliptic integrals
- surface parametrization and surface integrals
- numerical quadrature
- Monte Carlo method
- related literature synthesis

### Rules

- include only theory used by later chapters, plus necessary context
- distinguish cited prior results from project-developed results
- do not fabricate literature
- use structured reference IDs
- include a related-work comparison table when verified sources are available

### Exit criteria

- every borrowed theorem or definition has a source
- every bibliography citation resolves
- no project result is misrepresented as prior literature

---

## Phase 12C — Chapter 4

### Required content areas

- model result
- cross-section result
- main volume theorem
- surface-area results
- special cases
- scaling and limiting behavior
- numerical tables
- error analysis
- graphs
- 3D model results

### Rules

- use only verified computation output
- record scripts, settings, tolerances, and sample counts
- separate analytical results from numerical checks
- do not create fictional datasets to fill tables

### Exit criteria

- tables can be reproduced
- graph data sources are documented
- objectives from Chapter 1 are answered by actual results

---

## Phase 12D — Chapter 5

### Required content areas

- concise method summary
- results by objective
- discussion
- relationship to prior work
- strengths
- limitations
- recommendations
- possible applications

### Rules

- introduce no new result
- do not overstate application readiness
- state incomplete aspects honestly
- distinguish future work from completed work

### Exit criteria

- every conclusion traces to Chapter 4
- limitations are explicit
- recommendations follow from real limitations

---

## Phase 12E — Abstract and English Abstract

### Timing

Write only after Chapters 1–5 are stable.

### Required content

- problem
- parameters and scope
- analytical method
- principal verified results
- numerical verification
- limitations
- keywords

### Rules

- do not claim discovery or novelty beyond reviewed evidence
- use the final exact formulas only when verified
- ensure Thai and English versions are equivalent in meaning

### Exit criteria

- abstract matches the final report
- no result appears only in the abstract

---

## Phase 12F — Bibliography

### Tasks

- verify every source
- remove unused entries
- resolve every in-text citation
- apply the final style consistently
- verify DOI and official links when included
- mark access dates only when required

### Exit criteria

- every citation resolves
- no fabricated entry
- no bibliography-only unused item unless the required style permits it for a documented reason

---

## Phase 12G — Appendices

### Candidate appendices

- subsidiary proofs
- full numerical tables
- code
- quadrature details
- Monte Carlo details
- simulation guide
- GeoGebra or 3D model notes
- symbol list
- source-to-web content map

### Exit criteria

- appendix references resolve from the main report
- long supporting material is preserved rather than deleted

---

# 17. Phase 13 — Full consistency and mathematical-content audit

## Objective

Audit the entire digital report before release.

## Audit areas

### Structure

- tab order
- chapter numbering
- section numbering
- equation numbering
- theorem numbering
- table and figure numbering
- appendix numbering

### Mathematics

- symbol consistency
- parameter domains
- elliptic-integral convention
- endpoint handling
- units and dimensions
- theorem assumptions
- proof endings
- numerical/formula distinction

### Content

- full-source completeness
- no accidental shortening
- no duplicate paragraphs
- no orphan sections
- no placeholder in final mode unless intentionally retained
- no unsupported claim

### References

- every citation resolves
- every final bibliography entry is verified
- every external figure has a source
- no AI-fabricated reference

### Application

- route refresh
- search
- copy
- export
- print
- responsive layout
- keyboard access
- simulation fallback
- production build

## Deliverables

- final audit report
- unresolved issue list
- source completeness report
- production build
- release notes

## Exit criteria

- all critical and high-severity issues resolved
- remaining limitations are documented
- the owner can use the website as the primary reading and Word-transfer source

---

# 18. Phase 14 — Release and maintenance documentation

## Objective

Make the project maintainable by the owner or another AI agent.

## Tasks

1. Complete README.
2. Document local development.
3. Document production build.
4. Document deployment.
5. Document content module format.
6. Document how to add a section.
7. Document how to add an equation.
8. Document how to add a theorem and proof.
9. Document how to add a reference.
10. Document how to add a simulation preset.
11. Document how to run tests.
12. Document the Word transfer workflow.
13. Document known mathematical and technical limitations.
14. Document dependency update procedure.

## Deliverables

- maintainable README
- content authoring guide
- deployment guide
- test guide
- release build

## Exit criteria

- a new maintainer can add content without editing core rendering logic
- deployment does not require undocumented steps
- mathematical source conventions are clearly stated

---

# 19. Minimum prototype definition

The first reviewable version is not the full report. It is complete enough when it contains:

- one `index.html`
- all main tabs
- responsive academic layout
- stable hash navigation
- structured content renderer
- reliable MathJax
- raw LaTeX reveal and copy
- section/chapter copy
- real Chapter 3 sample
- content status badges
- local table of contents
- Simulation preview
- basic print style
- no invented report content

The prototype must demonstrate that the architecture can support the complete report.

---

# 20. Full release definition

The project reaches full release only after:

- all reviewed report content is imported
- Chapter 3 is complete
- Chapters 1, 2, 4, and 5 are complete and consistent
- Abstract is final
- Bibliography is verified
- Appendices are included
- simulation is functional
- numerical checks are reproducible
- copy/export works
- print works
- tests pass
- accessibility review is complete
- no critical placeholders remain
- final source completeness audit is complete

---

# 21. Required implementation status format

Maintain `IMPLEMENTATION_STATUS.md` using a structure like:

```md
# Implementation Status

## Current phase
Phase 6 — Prototype content and review checkpoint

## Completed
- [x] Single-page shell
- [x] Hash navigation
- [x] Structured theorem renderer
- [x] MathJax source copy

## In progress
- [ ] Chapter 3 sample import

## Blocked
- [ ] Chapter 2 bibliography requires verified sources

## Known issues
1. Long aligned equation overflows at 320 px.
2. Print page break before proof ending needs adjustment.

## Files changed
- src/renderers/mathRenderer.js
- src/content/chapter3.js
- src/styles/math.css

## Validation performed
- npm test
- npm run build
- manual mobile review at 320 px and 768 px

## Next actions
1. Fix aligned equation overflow.
2. Finish sections 3.3–3.7.
3. Run source completeness check.
```

Do not mark a phase complete without listing its validation.

---

# 22. Agent behavior requirements

The implementation agent must:

- work directly in the repository
- make reasonable decisions without repeatedly asking for confirmation
- preserve existing useful code
- implement the current phase fully
- report real limitations
- avoid claiming tests passed unless they were run
- avoid claiming mathematical correctness merely because code runs
- stop fabricating when source content is missing
- use placeholders with clear status
- keep the implementation extensible for the complete report
- never solve context-length pressure by deleting or summarizing supplied report content

When a phase is too large for one execution, split it into smaller internal tasks while preserving the phase deliverables and update `IMPLEMENTATION_STATUS.md`.

---

# 23. First execution priority

For the first implementation pass, prioritize:

1. Phase 0 — Audit
2. Phase 1 — Single-page shell
3. Phase 2 — Academic design system
4. Phase 3 — Structured content model
5. Phase 4 — MathJax pipeline
6. Phase 5 — Copy and Word transfer
7. Phase 6 — Reviewable prototype

Do not attempt to fabricate the complete Chapters 1–5 in the first pass.

After the prototype is stable, proceed to complete Chapter 3 and then expand the remaining report chapter by chapter.

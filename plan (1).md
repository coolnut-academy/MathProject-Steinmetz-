# PLAN — Steinmetz Solid Mathematical Report Web Application

## 1. Document status

- Document type: Product and content architecture plan
- Project type: Static single-page mathematical report website
- Main public entry point: `index.html`
- Primary language: Thai, with English title and abstract where required
- Mathematical typesetting: LaTeX rendered by MathJax
- Core purpose: reading, verifying, understanding, and transferring report content into Microsoft Word
- Report scope: Abstract, Chapters 1–5, Bibliography, Appendices, and Interactive Simulation
- Development principle: preserve complete academic content; never shorten a section merely to make implementation easier

This file defines **what the finished project must be**, why it is structured this way, and the quality standards that every implementation phase must satisfy. Detailed implementation order is defined in `implement_plan.md`.

---

# 2. Project vision

Create a professional mathematical report website for the study of the volume and boundary surface area of Steinmetz solids formed by two unequal circular cylinders whose axes intersect at an arbitrary acute angle.

The website is not intended to replace the formal Microsoft Word report. It is intended to become the most reliable working environment for the owner of the project to:

1. Read the complete report in a clear chapter-based structure.
2. Inspect mathematical definitions, assumptions, lemmas, theorems, proofs, equations, tables, figures, and numerical checks.
3. View equations without formatting corruption.
4. Copy the original LaTeX source of each equation.
5. Copy prose and equation source into Word and recreate the equations there manually.
6. Navigate directly to a chapter, section, theorem, proof, equation, table, figure, reference, or appendix item.
7. Explore how the geometric parameters affect the cross-section, volume, and boundary surface area.
8. Compare exact formulas, numerical quadrature, and approximate simulation results.
9. Keep verified mathematical results separate from drafts, conjectures, placeholders, and numerical evidence.
10. Continue expanding the website until it contains the complete report without forcing the content to be shortened.

The finished website should feel like a **digital mathematical monograph and verification workspace**, not a marketing landing page.

---

# 3. Non-negotiable requirements

## 3.1 Content completeness

- Do not summarize, compress, paraphrase away, or omit substantial portions of supplied report content.
- Preserve the logical order of every proof.
- Preserve assumptions and domains of validity.
- Preserve all relevant intermediate equations.
- Preserve the distinction between analytical proof and numerical verification.
- Long content must be handled through good navigation, progressive disclosure, section anchors, and readable layout—not by deleting content.
- Any section whose source material has not yet been supplied must be marked clearly as a structured placeholder.
- Never invent research results, citations, numerical values, theorem claims, novelty claims, or engineering applications.

## 3.2 Mathematical correctness

- Every equation shown on screen must originate from a stored LaTeX source string.
- The rendered MathJax output must never become the source used for copying.
- Every theorem must state its assumptions.
- Every proof must identify what is being proved and where it ends.
- Every use of a special function must define the convention used.
- Distinguish modulus \(k\) from parameter \(m=k^2\) in software APIs.
- Numerical agreement is supporting evidence, not a proof.
- Formula validity at endpoints such as \(k=1\) must be handled through a limit or an explicitly valid endpoint form.
- All equations, tables, figures, and results must be traceable to their source or derivation.

## 3.3 One public HTML page

The initial and preferred architecture uses only:

- `index.html`

Do not create separate public pages such as:

- `chapter1.html`
- `chapter2.html`
- `chapter3.html`
- `simulation.html`
- `appendix.html`
- `print.html`

Navigation must use a single-page pattern with stable hash routes such as:

- `#home`
- `#abstract`
- `#chapter-1`
- `#chapter-2`
- `#chapter-3`
- `#chapter-4`
- `#chapter-5`
- `#bibliography`
- `#appendix`
- `#simulation`

A page refresh must restore the active main tab and, when possible, the active section anchor.

## 3.4 Separation of source files

Although the public entry point is a single HTML file, the source code must not be placed entirely inside `index.html`.

Separate:

- styles
- application shell
- navigation
- report content data
- mathematical rendering
- copy/export services
- search
- simulation
- numerical routines
- tests

This separation is required so the project can expand to a complete five-chapter report without becoming unmaintainable.

---

# 4. Intended users and primary workflows

## 4.1 Primary user

The primary user is the owner and author of the mathematical project.

Primary workflow:

1. Open the website.
2. Select a chapter or simulation tab.
3. Read a section.
4. inspect equations and proof steps.
5. reveal or copy original LaTeX.
6. copy prose separately.
7. paste prose into Word.
8. open a Word equation field with `Alt` + `=`.
9. paste or retype the LaTeX equation.
10. compare the Word version against the website.

## 4.2 Secondary users

- Student co-authors
- Project adviser
- Mathematics teachers
- Judges or reviewers
- Future editors of the report
- AI coding agents maintaining the website

Secondary users need:

- reliable navigation
- readable theorem/proof formatting
- visible source status
- accessible simulation controls
- print-friendly pages
- citation traceability

---

# 5. Information architecture

## 5.1 Main tabs

The main navigation must contain the following tabs in this order:

1. Home
2. Abstract
3. Chapter 1 — Introduction
4. Chapter 2 — Theory and Related Literature
5. Chapter 3 — Methodology and Mathematical Proofs
6. Chapter 4 — Results
7. Chapter 5 — Summary, Discussion, and Recommendations
8. Bibliography
9. Appendices
10. Simulation

Thai labels should be the primary visible labels. English labels may appear as subtitles or accessibility labels.

## 5.2 Home tab

The Home tab should contain:

- Thai project title
- English project title
- concise problem overview
- current report status
- verified result summary
- prominent “Start reading” action
- quick links to the main volume theorem
- quick links to the boundary surface theorem
- quick links to numerical verification
- quick link to Simulation
- a visible statement that numerical checks do not replace proof
- a legend for content status badges

The Home tab must not overstate novelty or completion.

## 5.3 Chapter tabs

Each chapter must contain:

- chapter title
- chapter introduction
- local table of contents
- sections and subsections
- stable anchors
- chapter-level copy and export controls
- progress or source-status information
- previous/next chapter navigation
- links to relevant simulation views where appropriate

## 5.4 Bibliography tab

The Bibliography tab must:

- support APA 7 or the final required style
- group or filter references by type if useful
- show which chapters cite each source
- provide stable reference IDs
- avoid displaying unverified placeholder references as if they were final
- permit copying an individual reference
- permit copying the complete bibliography
- optionally display DOI or official source links when verified

## 5.5 Appendices tab

The Appendices tab should support:

- detailed subsidiary proofs
- full numerical tables
- source code excerpts
- numerical method descriptions
- simulation instructions
- 3D model notes
- glossary or symbol tables
- supplementary figures
- downloadable source data where available

## 5.6 Simulation tab

The Simulation tab must be part of the same `index.html` application and must not be a separate HTML page.

It should contain:

- parameter controls
- two-dimensional cross-section view
- three-dimensional cylinder view
- formula panel
- numerical comparison panel
- explanatory notes
- reset and preset controls
- links back to the relevant proof sections

---

# 6. Report content model

## 6.1 Content must be data-driven

Do not hard-code the complete report as one giant HTML string.

Represent the report through structured content modules. Each block should have a type and metadata.

Required block types include:

- `heading`
- `paragraph`
- `definition`
- `assumption`
- `notation`
- `lemma`
- `proposition`
- `theorem`
- `corollary`
- `proof`
- `equation`
- `equation-group`
- `derivation`
- `example`
- `numerical-check`
- `warning`
- `note`
- `figure`
- `table`
- `citation`
- `code-block`
- `placeholder`

## 6.2 Recommended block metadata

Every block should support relevant fields such as:

```js
{
  id: "thm-volume-general",
  type: "theorem",
  chapter: 3,
  section: "3.8",
  number: "3.3",
  title: "สูตรทั่วไปของปริมาตร",
  status: "verified-proof",
  source: "03_Steinmetz_Chapter3_Full_Proof.md",
  tags: ["volume", "elliptic-integral"],
  content: [...],
  relatedIds: ["eq-volume-integral", "eq-volume-closed-form"]
}
```

Not every block needs every field, but every important item must have a stable ID.

## 6.3 Content status system

Use visible and machine-readable status values:

- `verified-proof` — analytically proved and reviewed
- `verified-source` — supported by a checked reference
- `numerically-verified` — checked numerically but not independently proved by that check
- `draft` — prose or structure still under revision
- `needs-citation` — factual or historical claim requiring a source
- `needs-review` — supplied content not yet checked
- `conjecture` — explicitly unproved mathematical claim
- `placeholder` — section reserved for future content
- `deprecated` — retained only for traceability and not shown by default

The interface must never make `draft`, `conjecture`, or `placeholder` content visually indistinguishable from verified results.

## 6.4 Source of truth

The application must preserve a clear source hierarchy:

1. Human-reviewed mathematical source documents
2. Verified data files
3. Structured content modules derived from those documents
4. Rendered website output

The rendered website is not the canonical mathematical source. Source LaTeX and source prose must remain available in editable files.

---

# 7. Mathematical notation and equation policy

## 7.1 Core conventions

The report should use consistent notation, including:

\[
0<r_1\le r_2,\qquad
0<\beta\le\frac{\pi}{2},\qquad
k=\frac{r_1}{r_2}.
\]

When a symmetric form is preferable, the report may define:

\[
a=\min\{r_1,r_2\},\qquad
b=\max\{r_1,r_2\},\qquad
k=\frac{a}{b}.
\]

The selected convention must remain consistent within a theorem and its proof.

## 7.2 Elliptic integral convention

The website must explicitly define:

\[
K(k)=\int_0^{\pi/2}
\frac{d\theta}{\sqrt{1-k^2\sin^2\theta}},
\]

\[
E(k)=\int_0^{\pi/2}
\sqrt{1-k^2\sin^2\theta}\,d\theta.
\]

Software notes must state that some libraries use the parameter:

\[
m=k^2.
\]

## 7.3 Equation numbering

Use chapter-based numbering:

- (1.1), (1.2), …
- (2.1), (2.2), …
- (3.1), (3.2), …
- (4.1), …
- (A.1), (A.2), … for appendices

Numbers should be stored in content data rather than relying entirely on MathJax automatic numbering.

Every equation referenced later must have:

- stable ID
- displayed number
- anchor link
- copy button
- source LaTeX

## 7.4 Long and aligned equations

Support:

- `aligned`
- `gathered`
- `cases`
- matrices
- multi-line derivations
- integrals with limits
- limits
- vectors
- piecewise expressions
- equation labels

Long equations must scroll horizontally within their own container on small screens. They must not force the entire page to overflow.

## 7.5 Proof presentation

Proof blocks must:

- show the theorem or statement they prove
- preserve all essential intermediate steps
- support nested equations
- include an explicit end-of-proof marker
- provide a copy control for prose with source LaTeX
- allow collapse/expand without deleting content from the DOM source model
- remain expanded in print mode unless the user selects otherwise

---

# 8. MathJax rendering requirements

## 8.1 Rendering approach

Use MathJax with TeX input and an output mode that renders cleanly on modern browsers.

Requirements:

- support inline and display mathematics
- load required AMS functionality
- process content loaded dynamically
- typeset only the newly activated or inserted report container
- clear old MathJax state before re-typesetting replaced content
- display a graceful loading state
- show a clear error card when a formula fails to render

## 8.2 Preventing corrupted formulas

- Store LaTeX independently of rendered HTML.
- Prefer `String.raw` in JavaScript modules containing backslashes.
- Avoid multiple levels of JSON escaping where possible.
- Do not run mathematical source through an untested Markdown pipeline.
- Add validation for unbalanced delimiters and common escape errors.
- Test fractions, roots, powers, subscripts, Greek letters, vectors, matrices, aligned derivations, cases, integrals, and limits.
- Never reconstruct LaTeX by reading MathJax-generated DOM.

## 8.3 Rendering failure behavior

When an equation cannot be rendered:

1. show its equation number and title
2. show a warning
3. allow the source LaTeX to be opened
4. allow the source LaTeX to be copied
5. log a meaningful development error
6. do not hide or silently remove the equation

---

# 9. Copying and transfer to Microsoft Word

## 9.1 Equation-level controls

Every equation card should provide:

- Copy LaTeX
- Show/Hide LaTeX
- Copy explanation with LaTeX
- Copy equation number and title
- Link to equation

## 9.2 Section-level controls

Every major section should provide:

- Copy this section
- Copy prose only
- Copy prose with raw LaTeX
- Download section as UTF-8 text
- Copy section link

## 9.3 Chapter-level controls

Every chapter should provide:

- Copy entire chapter
- Download chapter as `.txt`
- Download chapter source as `.tex` or LaTeX-oriented plain text
- Print current chapter
- Show all collapsed proofs before printing

## 9.4 Copy format

The copy service must build text from the structured source model.

Example:

```text
ทฤษฎีบทที่ 3.3 สูตรทั่วไปของปริมาตร

ภายใต้เงื่อนไข ...

[สมการ (3.24)]
V = \frac{8r_2^3}{3\sin\beta}
\left[(1+k^2)E(k)-(1-k^2)K(k)\right]

โดยที่ ...
```

Do not copy hidden interface labels, button text, or MathJax accessibility scaffolding.

## 9.5 Clipboard fallback

Because direct clipboard access may be restricted outside a secure context:

- try the modern Clipboard API
- provide a fallback copy mechanism
- show visible success or failure feedback
- provide a selectable source panel as a final fallback
- ensure local development remains usable

## 9.6 Word guidance

Provide a short help panel:

1. Copy prose from the website.
2. Paste prose into Word.
3. Place the cursor where the equation belongs.
4. Press `Alt` + `=`.
5. Paste or type the copied LaTeX.
6. Review symbols, line breaks, and equation numbering manually.

Do not promise perfect direct conversion of complex MathJax output into native Word equations.

---

# 10. Visual design

## 10.1 Design character

The design should be:

- academic
- modern
- calm
- readable
- content-first
- suitable for long-form mathematical study
- clearly different from a promotional website

## 10.2 Desktop layout

Recommended layout:

- sticky top header
- horizontal main-tab navigation
- collapsible left chapter outline
- central reading column
- optional right utility rail
- reading width approximately 850–1000 pixels
- generous line height and vertical rhythm

## 10.3 Mobile layout

- main tabs become horizontally scrollable or a chapter selector
- local table of contents becomes a drawer
- equations scroll within equation cards
- tables use responsive wrappers
- simulation panels stack vertically
- copy controls remain touch-friendly
- no essential information depends on hover

## 10.4 Academic component styles

Provide distinct but restrained styles for:

- Definition
- Assumption
- Notation
- Lemma
- Proposition
- Theorem
- Corollary
- Proof
- Numerical Check
- Warning
- Note
- Placeholder

Color must not be the only way to distinguish block type or status.

## 10.5 Reading controls

Useful optional controls:

- font size
- line spacing
- content width
- light/dark/system appearance
- show/hide proof details
- show/hide status badges
- focus mode

Reading preferences should be stored locally, without requiring an account.

---

# 11. Navigation, search, and linking

## 11.1 Hash routing

Main tab state must be represented by URL hash.

Support deep links such as:

- `#chapter-3/section-3-8`
- `#chapter-3/thm-volume-general`
- `#chapter-3/eq-volume-closed-form`
- `#simulation/cross-section`

A simpler encoded format is acceptable if it is stable and documented.

## 11.2 Local table of contents

The active chapter must show:

- sections
- subsections
- theorem entries
- major equations
- major tables and figures

The active item should update while scrolling.

## 11.3 Search

Search should index:

- Thai and English titles
- headings
- prose
- theorem names
- equation descriptions
- symbols and tags
- bibliography entries

Search results must:

- identify chapter and section
- show a short excerpt
- link directly to the item
- not attempt to search the visual MathJax SVG/HTML output

## 11.4 Cross-references

Support links among:

- theorem and proof
- equation and derivation
- chapter text and simulation preset
- chapter text and appendix
- citation and bibliography entry
- figure/table callout and item

Broken internal references must be detectable by tests.

---

# 12. Simulation design

## 12.1 Purpose

The simulation is an explanatory and verification tool. It is not the source of the proof.

The interface must display a notice such as:

> ภาพจำลองและผลเชิงตัวเลขใช้เพื่อช่วยทำความเข้าใจและตรวจสอบตัวอย่าง ไม่ใช้แทนบทพิสูจน์ทางคณิตศาสตร์

## 12.2 User-controlled parameters

Required controls:

- \(r_1>0\)
- \(r_2>0\)
- \(\beta\), with \(0<\beta\le 90^\circ\)
- cross-section position \(x\)
- numerical resolution
- optional Monte Carlo sample count

The interface may internally normalize the radii so that \(r_1\le r_2\), but it must explain the transformation and display the user’s original values.

## 12.3 Presets

Include presets such as:

- equal radii, perpendicular axes
- unequal radii, perpendicular axes
- \(r_1=1,r_2=2,\beta=60^\circ\)
- \(r_1=1,r_2=3,\beta=45^\circ\)
- nearly equal radii
- small radius ratio
- small positive angle

## 12.4 Two-dimensional cross-section

The 2D view should show:

- fixed \(x\)-plane
- two strip inequalities in transformed coordinates
- parallelogram cross-section
- important lengths
- current \(A(x)\)
- valid range \(|x|\le r_1\)
- a warning or empty state outside the valid range

Core formula:

\[
A(x)=
\frac{4\sqrt{r_1^2-x^2}\sqrt{r_2^2-x^2}}
{\sin\beta}.
\]

## 12.5 Three-dimensional view

The 3D view should show:

- both cylinders
- both axes
- intersection region approximation
- cross-section plane
- camera controls
- reset view
- visibility toggles
- labels or legend

A mesh generated through sampling or an implicit-surface method must be labeled as an approximation.

The 3D view must not block reading when WebGL is unavailable. Provide a static or 2D fallback.

## 12.6 Formula panel

Display:

- \(k=r_1/r_2\)
- cross-section area
- exact/general volume formula
- surface area from the smaller cylinder
- surface area from the larger cylinder
- total boundary surface area
- dimensional checks
- current unit convention

Verified formulas currently planned for the mathematical model include:

\[
V=
\frac{8r_2^3}{3\sin\beta}
\left[
(1+k^2)E(k)
-(1-k^2)K(k)
\right],
\]

\[
S_{\mathrm{small}}
=
\frac{8r_1r_2}{\sin\beta}E(k),
\]

\[
S_{\mathrm{large}}
=
\frac{8r_2^2}{\sin\beta}
\left[
E(k)-(1-k^2)K(k)
\right],
\]

\[
S=
\frac{8r_2^2}{\sin\beta}
\left[
(1+k)E(k)-(1-k^2)K(k)
\right].
\]

These formulas must be imported from a reviewed mathematical source and must not be silently edited in application code.

## 12.7 Numerical comparison

Provide at least:

- direct one-dimensional quadrature for volume
- closed-form elliptic integral result
- optional Monte Carlo approximation
- absolute error
- relative error
- computation settings

For surface area, provide comparison with the appropriate integral representation when available.

## 12.8 Endpoint handling

Handle:

- \(k\to 0\)
- \(k\to 1\)
- \(\beta\to 0^+\)
- \(\beta=\pi/2\)
- equal radii
- invalid or zero radii

Do not evaluate a formally singular component naively when the combined limiting expression is finite.

---

# 13. Numerical computation policy

## 13.1 Independent implementations

Where practical, compare at least two independent methods:

- direct quadrature of the original integral
- closed-form elliptic integral evaluation
- optional Monte Carlo estimate

## 13.2 Error reporting

Report:

\[
\text{Absolute Error}=|Q_{\text{method}}-Q_{\text{reference}}|,
\]

\[
\text{Relative Error}
=
\frac{|Q_{\text{method}}-Q_{\text{reference}}|}
{|Q_{\text{reference}}|}.
\]

When the reference value is near zero, use an appropriate guarded definition and explain it.

## 13.3 Precision

- Display precision and computation precision may differ.
- Do not show excessive meaningless digits.
- Preserve enough internal precision for stable comparison.
- State when a value is approximate.
- State Monte Carlo uncertainty separately.

## 13.4 Software convention tests

Add tests proving that the elliptic integral library is called with the correct convention.

For an API using \(m\), pass:

\[
m=k^2.
\]

Do not pass \(k\) directly unless the API explicitly uses the modulus.

---

# 14. Tables, figures, citations, and bibliography

## 14.1 Figures

Every figure must have:

- stable ID
- number
- title
- caption
- alt text
- source or creation note
- chapter association
- optional downloadable image

## 14.2 Tables

Every table must have:

- stable ID
- number
- title
- accessible headers
- unit labels
- source or computation note
- responsive wrapper
- copy or export option where useful

## 14.3 Citations

Citations must be represented through IDs, not manually duplicated strings.

Example:

```js
{
  id: "ref-dlmf-elliptic-integrals",
  type: "reference",
  status: "verified-source",
  ...
}
```

Chapter text should reference the ID.

## 14.4 Unverified sources

- Mark unverified entries visibly.
- Exclude them from “final bibliography” export by default.
- Never fabricate missing author names, years, DOI values, or titles.
- Do not use AI-generated references without verification.

---

# 15. Print and export

## 15.1 Print modes

Support:

- current section
- current chapter
- complete report
- bibliography only
- appendix only

## 15.2 Print CSS

Print output should:

- hide navigation and controls
- expand proofs
- show equation numbers
- preserve theorem borders in a printer-friendly way
- avoid breaking a short equation card across pages when possible
- repeat table headers when supported
- display URLs or source notes only when useful
- use readable margins

## 15.3 Export limits

The project may export text and source LaTeX. It is not required to generate a perfect `.docx` file.

The owner will perform final Word formatting and native equation entry manually.

---

# 16. Accessibility and responsive behavior

Minimum accessibility requirements:

- semantic landmarks
- keyboard-operable tabs
- visible focus states
- appropriate heading hierarchy
- buttons with accessible names
- sufficient contrast
- no information conveyed only by color
- alt text for figures
- text alternatives for visual simulation results
- reduced-motion support
- responsive equation and table containers
- screen-reader-friendly source descriptions where practical

The application should remain usable at 200% browser zoom.

---

# 17. Performance, offline use, and deployment

## 17.1 Performance

- Lazy-load the 3D simulation.
- Do not initialize WebGL until the Simulation tab is opened.
- Avoid typesetting the entire report after every interaction.
- Cache structured content in memory.
- Split large modules where useful.
- Keep navigation responsive with the complete report loaded.

## 17.2 Offline resilience

Preferred final behavior:

- core report content works after a normal static deployment
- critical dependencies are bundled or self-hosted
- a service worker may be added only after the base application is stable
- simulation fallback remains available if external resources fail

## 17.3 Deployment

The project should build to a static output suitable for:

- Vercel
- GitHub Pages
- Netlify
- local static server
- school web hosting capable of serving static files

Directly opening `index.html` through `file://` is not a required primary deployment mode because ES modules, clipboard behavior, and assets may be restricted. Provide a documented local server command.

---

# 18. Security and privacy

- No account system is required.
- No personal data collection is required.
- No analytics should be added without explicit approval.
- Do not send report content to third-party APIs.
- Avoid runtime evaluation of arbitrary code.
- Sanitize any content that can be externally supplied.
- Treat mathematical content as trusted only when it comes from reviewed local source files.

---

# 19. Recommended project structure

```text
steinmetz-report/
├─ index.html
├─ package.json
├─ vite.config.js
├─ README.md
├─ plan.md
├─ implement_plan.md
├─ public/
│  ├─ images/
│  ├─ models/
│  ├─ data/
│  └─ fonts/                 # only licensed project assets
├─ src/
│  ├─ main.js
│  ├─ app/
│  │  ├─ router.js
│  │  ├─ state.js
│  │  ├─ navigation.js
│  │  └─ preferences.js
│  ├─ content/
│  │  ├─ index.js
│  │  ├─ home.js
│  │  ├─ abstract.js
│  │  ├─ chapter1.js
│  │  ├─ chapter2.js
│  │  ├─ chapter3.js
│  │  ├─ chapter4.js
│  │  ├─ chapter5.js
│  │  ├─ bibliography.js
│  │  ├─ appendices.js
│  │  ├─ symbols.js
│  │  └─ references.js
│  ├─ renderers/
│  │  ├─ reportRenderer.js
│  │  ├─ blockRenderers.js
│  │  ├─ mathRenderer.js
│  │  ├─ tableRenderer.js
│  │  └─ figureRenderer.js
│  ├─ services/
│  │  ├─ clipboard.js
│  │  ├─ export.js
│  │  ├─ search.js
│  │  ├─ crossReferences.js
│  │  └─ validation.js
│  ├─ simulation/
│  │  ├─ simulationController.js
│  │  ├─ geometry3d.js
│  │  ├─ crossSection2d.js
│  │  ├─ formulas.js
│  │  ├─ numerical.js
│  │  └─ presets.js
│  ├─ styles/
│  │  ├─ tokens.css
│  │  ├─ base.css
│  │  ├─ layout.css
│  │  ├─ components.css
│  │  ├─ report.css
│  │  ├─ math.css
│  │  ├─ simulation.css
│  │  ├─ responsive.css
│  │  └─ print.css
│  └─ utils/
│     ├─ dom.js
│     ├─ ids.js
│     ├─ numbers.js
│     └─ errors.js
├─ tests/
│  ├─ content-validation.test.js
│  ├─ math-source.test.js
│  ├─ cross-reference.test.js
│  ├─ copy-export.test.js
│  ├─ formulas.test.js
│  ├─ navigation.test.js
│  └─ accessibility.test.js
└─ source_docs/
   ├─ 03_Steinmetz_Chapter3_Full_Proof.md
   └─ future-reviewed-sources/
```

Exact filenames may change, but the separation of concerns must remain.

---

# 20. Testing strategy

## 20.1 Content validation

Test that:

- every block has a unique ID
- every referenced ID exists
- every numbered equation has a stable ID
- every theorem with a proof links correctly
- every citation points to a bibliography entry
- no final export includes placeholder references
- no duplicate equation numbers exist within a chapter

## 20.2 Math source validation

Test representative formulas for:

- escaping
- balanced delimiters
- MathJax render completion
- source-copy fidelity
- line wrapping behavior

## 20.3 Formula tests

Test:

- classical equal-radius perpendicular case
- unequal radii
- general angle
- scaling law
- symmetry under radius-name normalization
- limiting behavior
- agreement between direct quadrature and closed form

## 20.4 Navigation tests

Test:

- main tabs
- browser back/forward
- page refresh
- deep links
- active section
- previous/next chapter
- mobile menu

## 20.5 Copy/export tests

Test:

- equation-only copy
- prose-only copy
- prose with LaTeX
- whole-section copy
- whole-chapter export
- fallback behavior
- Thai UTF-8 text

## 20.6 Accessibility tests

Test:

- keyboard tab navigation
- focus management after route change
- accessible button names
- heading hierarchy
- contrast
- reduced motion
- 200% zoom
- simulation text alternative

---

# 21. Acceptance criteria

The project is ready for a content-complete release when all of the following are true:

1. `index.html` is the only public HTML page.
2. All main tabs exist and deep linking works.
3. Refreshing preserves the active tab.
4. Chapter 3 is imported in full from the reviewed source without substantive shortening.
5. All supplied chapters are imported in full once their reviewed source is available.
6. MathJax renders all test formulas correctly.
7. Every important equation exposes its original LaTeX.
8. Copy controls use source data, not rendered MathJax output.
9. The report is usable on desktop, tablet, and mobile.
10. The simulation supports \(r_1\), \(r_2\), \(\beta\), and \(x\).
11. Numerical and analytical values are clearly distinguished.
12. The classical case returns the expected values.
13. Draft and placeholder content is visibly marked.
14. No fabricated bibliography entries or results appear.
15. Print mode produces a readable chapter or complete report.
16. Search and internal links work across all imported content.
17. Automated content, formula, and reference tests pass.
18. The README explains local development, build, deployment, content editing, and Word transfer workflow.

---

# 22. Out of scope for the first complete implementation

Unless separately requested, the following are not required:

- user accounts
- cloud database
- real-time collaboration
- automatic perfect `.docx` generation
- direct editing of content inside the website
- server-side rendering
- separate HTML pages per chapter
- publication-management backend
- industrial engineering validation
- claims of global research novelty
- automatic generation of missing academic references

---

# 23. Content expansion policy

The website must be designed from the beginning to hold a long complete report.

Content should be expanded in controlled stages:

1. Application shell and prototype
2. Complete Chapter 3 import
3. Reviewed Chapter 1
4. Reviewed Chapter 2
5. Verified Chapter 4 data and results
6. Chapter 5 after Chapter 4 is stable
7. Abstract after Chapters 1–5 are stable
8. Verified bibliography
9. Appendices and source code
10. Final consistency audit

At every stage:

- preserve full supplied content
- do not replace detailed proof with a summary
- do not write final conclusions before results are verified
- keep incomplete sections explicitly marked
- maintain stable IDs so later expansion does not break links

---

# 24. Final product definition

The final product is a static, maintainable, academically responsible, single-page web application that presents the complete mathematical report with reliable LaTeX rendering, source-aware copying, traceable proofs, interactive geometric explanation, numerical checks, and print-friendly output.

Its success is measured by whether the project owner can use it as the definitive reading and transfer workspace while preparing the formal Word report—without corrupted equations, missing proof steps, hidden assumptions, invented citations, or shortened academic content.

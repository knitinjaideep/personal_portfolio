# Nitin Kotcherlakota Portfolio

A personal portfolio and product studio website for Nitin Kotcherlakota, focused on thoughtful human-centered AI products.

## Purpose

This repository establishes the portfolio foundation and design system:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Theme-aware light/dark mode
- Semantic route shells for portfolio sections
- Responsive layout and accessible navigation
- Design tokens and reusable UI components

## Installation

```bash
npm install
```

## Local development

```bash
npm run dev
```

Open: `http://localhost:3001`

## Scripts

- `npm run dev` — start development server on port `3001`
- `npm run build` — production build
- `npm run lint` — run ESLint
- `npm run type-check` — run TypeScript type checking
- `npm run format` — format code with Prettier
- `npm run resume:markdown` — regenerate `resume/nitin-kotcherlakota-resume.md`
- `npm run resume:text` — regenerate `resume/nitin-kotcherlakota-resume.txt`
- `npm run resume:docs` — run both of the above
- `npm run resume:pdf` — regenerate `public/resume/nitin-kotcherlakota-resume.pdf` (requires the dev server running on port `3001`, see [Résumé](#résumé))

## Package manager

- npm

## Routes

- `/`
- `/work`
- `/personal`
- `/contact`
- `/work/home-journey`
- `/work/coral`
- `/resume`
- `/resume/print` — print-only, ATS-safe résumé layout (no header/footer/nav)

## Theme architecture

- System theme by default
- Manual light/dark toggle
- Persisted preference using `next-themes`
- No flash of incorrect theme on hydrate
- Accessible toggle labeling and reduced-motion support

## Folder structure

- `src/app/(site)/` — route pages that use the shared header/footer/nav
- `src/app/resume/print/` — the standalone, chrome-free print résumé route
- `src/app/layout.tsx` — root layout (fonts, theme provider) shared by every route, including `/resume/print`
- `src/components/` — shared reusable components
- `src/content/` — typed content: `profile.ts` (site-wide profile) and `resume.ts` (single source of truth for all résumé output formats)
- `src/lib/` — shared helpers
- `src/styles/` — global styles and design tokens
- `scripts/` — résumé generation scripts (Markdown, plain text, PDF)
- `resume/` — generated Markdown/plain-text résumé output, plus the internal (unlinked) content audit
- `resume-source/` — private, gitignored source documents used to verify résumé content (see [Résumé](#résumé))
- `design/mockups/` — visual references only

## Mockup location

Design references live in `design/mockups/` and are not imported into production pages.

## Site structure rules

- Primary navigation is limited to `Work`, `Personal`, and `Contact`.
- `/work` is for professional career history and résumé actions.
- `/personal` is for personal projects, photography, travel, and interests outside work.
- `/contact` is the only page with the full contact form.
- `/about`, `/lab`, and `/notes` redirect to the simplified public structure.
- `Home Journey` and `Coral` remain available at their existing case-study URLs under `/work`.

## Résumé

The résumé is generated from one typed source of truth, `src/content/resume.ts`,
so the web page, print page, PDF, Markdown, and plain-text outputs cannot drift
apart. Shared profile/contact details (name, LinkedIn, GitHub, email, portrait,
résumé PDF path) live in `src/content/profile.ts` and are reused by the site
and résumé content.

### Editing résumé content

Edit `src/content/resume.ts` directly — do not hand-edit the generated
Markdown, plain-text, or PDF files. Every fact in that file, and the reasoning
behind what was included, omitted, or left as an open question, is documented
in `resume/resume-content-audit.md` (internal only — not linked from any
public page). Do not add unverified employers, dates, titles, metrics, or
technologies; when a source conflicts or a detail can't be verified, record it
in the audit file rather than guessing.

### Verified sources

- The authoritative public LinkedIn profile is
  `https://www.linkedin.com/in/nitin-kotcherlakota/` — used verbatim
  everywhere a LinkedIn link appears.
- `resume-source/` is the convention for the private LinkedIn PDF export used
  to verify employment history, education, and skills. It is gitignored
  (`resume-source/*.pdf`) and lives outside `public/`, so it is never
  committed and never served by a route. See `resume-source/README.md` for
  how to add or refresh it.
- Technical claims about **Home Journey** and **Coral** are verified against
  this repository's actual implementation, not just case-study copy — see
  `resume/resume-content-audit.md` for what was included vs. intentionally
  left out.

### Regenerating outputs

```bash
# Markdown + plain text (no server required)
npm run resume:docs

# PDF (requires the dev server running on port 3001)
npm run dev
npm run resume:pdf
```

- `npm run resume:pdf` uses [Playwright](https://playwright.dev) to open
  `http://localhost:3001/resume/print` in headless Chromium and print it to a
  real, US Letter, selectable-text PDF (no screenshots). It fails with a clear
  error if the dev server isn't reachable on port 3001. One-time setup:
  ```bash
  npx playwright install chromium
  ```
- Inspect the print layout directly at `/resume/print` — it is the exact page
  the PDF is generated from, deliberately outside the site's normal layout
  (no header, footer, nav, theme toggle, or animation), so it renders
  identically to what gets printed.
- Generated output locations:
  - `public/resume/nitin-kotcherlakota-resume.pdf` (downloadable PDF, committed to the repo)
  - `resume/nitin-kotcherlakota-resume.md`
  - `resume/nitin-kotcherlakota-resume.txt`

### ATS design decisions

- Single-column reading order, standard section headings, and no
  multi-column layout for essential content.
- No portrait, charts, skill bars, icons-as-information, or tables for
  primary content — the PDF is plain HTML/CSS text, not a screenshot, so
  it stays selectable and parseable.
- US Letter page size with consistent margins, set both via the PDF
  generation script and `@page` print CSS (`src/styles/globals.css`) as a
  fallback for a plain browser print (Cmd/Ctrl+P).

### Portrait

The approved real portrait lives at `src/assets/images/nitin-portrait.jpg`
and is loaded through a Next.js static image import (`src/components/about/portrait.tsx`),
not a `public/`-relative string path, since the file intentionally stays
under `src/assets/`. It appears on Home and the `/resume` web introduction
only — it is excluded from `/resume/print`, the PDF, the Markdown output, and
the plain-text output.

### Missing profile fields

`src/content/profile.ts` and `src/content/resume.ts` use `null` for any
field that isn't verified yet (e.g. a phone number). Components read these
defensively and omit the field entirely rather than rendering a placeholder
or a broken `href="#"` link.

### Future job-tailored versions

`src/content/resume.ts` is the master/general résumé. For a role-specific
version, prefer duplicating the file (e.g. `resume-frontend.ts`) and pointing
a separate `/resume/print` variant at it, rather than overwriting the master
content — keep the general version as the default `/resume` and `/resume/print`
experience.

### Port 3001

Local development always runs on port `3001`
(`http://localhost:3001`), including for résumé PDF generation. Do not
change this back to port `3000`.

# Site Inventory

This document summarizes the current public website structure, what each page contains, and the main source files behind it.

## Global Layout

- Framework: Next.js App Router with TypeScript and Tailwind CSS.
- Shared site chrome: header, desktop/mobile navigation, theme toggle, skip link, footer, and contact links.
- Main navigation: Home, Work, Lab, Notes, About, Resume.
- Theme support: light/dark mode through `next-themes`.
- Shared profile data lives in `src/content/profile.ts`.
- Shared resume data lives in `src/content/resume.ts`.

Key files:

- `src/app/layout.tsx`
- `src/app/(site)/layout.tsx`
- `src/components/layout/site-header.tsx`
- `src/components/layout/site-footer.tsx`
- `src/components/layout/desktop-navigation.tsx`
- `src/components/layout/mobile-navigation.tsx`
- `src/components/layout/theme-provider.tsx`

## Home

Route: `/`

Purpose: Main front door for the portfolio. It introduces Nitin, shows the profile photo, routes visitors to the major sections, and highlights featured work.

Current sections:

- Hero section with name, positioning, short bio, interests, contact icons, and profile photo.
- “Start Here” routing section with cards for Work, About, Resume, and Lab.
- Featured Work section with cards for Home Journey and Coral.
- “Ask About My Work” coming-soon chat-style section.
- Closing section linking back to About.

Key files:

- `src/app/(site)/page.tsx`
- `src/components/home/hero-section.tsx`
- `src/components/home/profile-overview-section.tsx`
- `src/components/home/featured-work-section.tsx`
- `src/components/home/home-journey-card.tsx`
- `src/components/home/coral-card.tsx`
- `src/components/home/ask-about-work-section.tsx`
- `src/components/home/closing-section.tsx`

Notes:

- The profile photo is currently on Home, not About.
- The Home page intentionally gives a high-level overview and points users deeper instead of duplicating the full About page.

## About

Route: `/about`

Purpose: Personal background and deeper context: who Nitin is, what he cares about, how he thinks about engineering, and what he is focused on now.

Current sections:

- Intro with heading, short bio, positioning, and interests.
- Engineering philosophy.
- Current focus.
- Broad journey/timeline.
- Contact call-to-action.

Key files:

- `src/app/(site)/about/page.tsx`
- `src/components/about/introduction-section.tsx`
- `src/components/about/philosophy-section.tsx`
- `src/components/about/current-focus-section.tsx`
- `src/components/about/timeline-section.tsx`
- `src/components/contact/contact-cta.tsx`
- `src/content/profile.ts`

Notes:

- The portrait component still exists as a reusable component, but About no longer renders it.
- About is the deeper personal page; Home should only preview and route.

## Work

Route: `/work`

Purpose: Index of product work and experiments.

Current sections:

- Page header: “Products and experiments.”
- Featured product card for Home Journey.
- Featured product card for Coral.
- Future experiments card.

Key files:

- `src/app/(site)/work/page.tsx`
- `src/components/work/home-journey-feature.tsx`
- `src/components/work/coral-feature.tsx`
- `src/components/work/future-experiments-feature.tsx`
- `src/components/work/product-card.tsx`

## Home Journey Case Study

Route: `/work/home-journey`

Purpose: Active product case study for a notes-first homeownership platform.

Current sections:

- Hero with breadcrumb, active-development badge, product description, and product preview.
- Sticky case-study section navigation.
- Problem: most home-buying tools disappear after closing.
- Product philosophy: notes first, user language, stage-aware organization, calm design, and post-closing continuity.
- Journeys: “I’m buying a home” and “I own a home.”
- Key capabilities: stage-aware organization, notes, documents, tasks, household collaboration, searchable history, and continuity.
- Design principles: calm over clutter, notes before forms, guidance without pressure, private by default, mobile-friendly, and real-household support.
- Product structure diagram: user chooses journey, adds notes/tasks/documents/contacts, builds an organized home record.
- Status: active, early-direction, and exploring areas.
- Planned directions: collaboration, maintenance planning, search, contextual guidance, long-term property history.
- Back-to-work section.

Key files:

- `src/app/(site)/work/home-journey/page.tsx`
- `src/components/home-journey/hero.tsx`
- `src/components/home-journey/section-nav.tsx`
- `src/components/home-journey/problem-section.tsx`
- `src/components/home-journey/philosophy-section.tsx`
- `src/components/home-journey/journeys-section.tsx`
- `src/components/home-journey/capabilities-section.tsx`
- `src/components/home-journey/design-principles-section.tsx`
- `src/components/home-journey/structure-diagram-section.tsx`
- `src/components/home-journey/status-section.tsx`
- `src/components/home-journey/planned-directions-section.tsx`
- `src/components/home-journey/back-to-work-section.tsx`

## Coral Case Study

Route: `/work/coral`

Purpose: Active finance case study for a local-first financial statement analyzer.

Current sections:

- Hero with breadcrumb, active-development badge, role/stack/focus summary, and Coral concept visual.
- Sticky case-study section navigation.
- Problem: personal finance data is trapped in statements.
- Product system: statement ingestion, institution parsers, dashboards, conversational analysis, plan-vs-actual modeling, and local data storage.
- Architecture: local files, FastAPI backend, SQLite source of truth, local AI layer.
- Answer strategy: deterministic routing and computed fact bundles before local-model narration.
- Privacy model: no cloud APIs for financial data, SQLite local record, local Ollama models.
- Verification: backend/frontend tests and guardrails for financial math.
- Closing CTA linking back to Work and across to Home Journey.

Key files:

- `src/app/(site)/work/coral/page.tsx`
- `src/components/coral/coral-concept-visual.tsx`

## Resume

Route: `/resume`

Purpose: Web-rendered professional resume.

Current sections:

- Resume intro with links/actions.
- Resume document rendered on-page.
- Resume content includes professional summary, technical skills, professional experience, selected projects, education, and certifications if present.

Key files:

- `src/app/(site)/resume/page.tsx`
- `src/components/resume/resume-web-introduction.tsx`
- `src/components/resume/resume-document.tsx`
- `src/components/resume/resume-header.tsx`
- `src/components/resume/resume-section.tsx`
- `src/components/resume/experience-entry.tsx`
- `src/components/resume/project-entry.tsx`
- `src/components/resume/education-entry.tsx`
- `src/components/resume/skill-groups.tsx`
- `src/content/resume.ts`

Generated/resume files:

- `public/resume/nitin-kotcherlakota-resume.pdf`
- `resume/nitin-kotcherlakota-resume.md`
- `resume/nitin-kotcherlakota-resume.txt`
- `resume/resume-content-audit.md`

## Resume Print

Route: `/resume/print`

Purpose: Print/PDF capture page for the resume.

Current behavior:

- No site header, footer, navigation, theme toggle, or animation.
- Uses a plain white printable layout.
- Used by `scripts/generate-resume-pdf.mjs`.
- Marked `robots: { index: false, follow: false }`.

Key files:

- `src/app/resume/print/page.tsx`
- `src/components/resume/resume-document.tsx`
- `scripts/generate-resume-pdf.mjs`

## Lab

Route: `/lab`

Purpose: Placeholder/index for smaller experiments.

Current content:

- Local model experiments.
- Agentic workflows.
- Document understanding.
- AI interface prototypes.
- Coming-soon navigation back to Work and Home Journey.

Key files:

- `src/app/(site)/lab/page.tsx`
- `src/components/lab/lab-experiment-card.tsx`
- `src/components/coming-soon/coming-soon-nav.tsx`

Status:

- Coming soon. No shipped lab experiments yet.

## Notes

Route: `/notes`

Purpose: Placeholder/index for future writing.

Planned article topics:

- Building notes-first products.
- Designing trustworthy AI interfaces.
- Local models on Apple Silicon.
- Agentic workflows without unnecessary complexity.

Key files:

- `src/app/(site)/notes/page.tsx`
- `src/components/notes/note-placeholder-row.tsx`
- `src/components/coming-soon/coming-soon-nav.tsx`

Status:

- Coming soon. No published notes yet.

## Contact Surfaces

Contact links are reused in the Home hero, About CTA, and footer.

Current verified contact data:

- Email: `nitin.kotcherlakota@gmail.com`
- GitHub: `https://github.com/knitinjaideep`
- LinkedIn: `https://www.linkedin.com/in/nitin-kotcherlakota/`

Key files:

- `src/components/contact/contact-links.tsx`
- `src/components/contact/contact-cta.tsx`
- `src/content/profile.ts`

## Current Coming-Soon Areas

- Ask About My Work chat-style feature on Home.
- Lab experiments.
- Notes/writing.
- Some Home Journey directions marked as planned or exploratory.

## Content Source Of Truth

- Profile/about/contact data: `src/content/profile.ts`
- Resume data: `src/content/resume.ts`
- Resume audit notes: `resume/resume-content-audit.md`
- Resume generators: `scripts/generate-resume-markdown.ts`, `scripts/generate-resume-text.ts`, `scripts/generate-resume-pdf.mjs`

## Route Summary

| Route | Page | Status |
| --- | --- | --- |
| `/` | Home | Live |
| `/about` | About | Live |
| `/work` | Work index | Live |
| `/work/home-journey` | Home Journey case study | Live / active development |
| `/work/coral` | Coral case study | Live / active development |
| `/resume` | Web resume | Live |
| `/resume/print` | Print resume | Utility route |
| `/lab` | Lab | Coming soon |
| `/notes` | Notes | Coming soon |

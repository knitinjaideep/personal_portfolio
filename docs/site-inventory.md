# Site Inventory

This document summarizes the final public information architecture after the portfolio content cleanup.

## Global Layout

- Framework: Next.js App Router with TypeScript and Tailwind CSS.
- Shared chrome: header, desktop/mobile navigation, theme toggle, skip link, footer, and contact links.
- Primary navigation: `NITIN`, `Work`, `Personal`, `Contact`, and the theme toggle.
- Theme support: light/dark mode through `next-themes`.
- Shared profile/contact data lives in `src/content/profile.ts`.
- Resume data lives in `src/content/resume.ts` and references shared profile contact values.

Key files:

- `src/app/layout.tsx`
- `src/app/(site)/layout.tsx`
- `src/components/layout/site-header.tsx`
- `src/components/layout/site-footer.tsx`
- `src/components/layout/desktop-navigation.tsx`
- `src/components/layout/mobile-navigation.tsx`
- `src/components/layout/theme-provider.tsx`

## Final Public Routes

| Route                | Purpose                         | Status  |
| -------------------- | ------------------------------- | ------- |
| `/`                  | Introductory Home page          | Live    |
| `/work`              | Professional career timeline    | Live    |
| `/personal`          | Personal projects and interests | Live    |
| `/contact`           | Functional contact page         | Live    |
| `/resume`            | Formal web résumé utility page  | Live    |
| `/resume/print`      | Print/PDF résumé utility route  | Noindex |
| `/work/home-journey` | Home Journey case study         | Live    |
| `/work/coral`        | Coral case study                | Live    |

Redirects:

- `/about` redirects to `/`.
- `/lab` redirects to `/personal`.
- `/notes` redirects to `/personal`.

## Home

Route: `/`

Purpose: Main introduction. It gives a concise personal/professional overview, points visitors to Work and Personal, and offers quick contact links without duplicating deeper pages.

Current sections:

- Hero with profile photo, concise bio, Work/Personal calls to action, and compact contact icons.
- “What Drives Me” routing section for software engineering, personal projects, photography, and travel/outdoors.
- Closing contact CTA.

Key files:

- `src/app/(site)/page.tsx`
- `src/components/home/hero-section.tsx`
- `src/components/home/what-drives-me-section.tsx`
- `src/components/home/closing-section.tsx`

## Work

Route: `/work`

Purpose: Professional career page.

Current sections:

- Career introduction.
- Resume download and LinkedIn actions.
- Interactive professional timeline with selected chapter details.
- Contact CTA.

Key files:

- `src/app/(site)/work/page.tsx`
- `src/components/work/career-timeline.tsx`
- `src/content/resume.ts`

## Personal

Route: `/personal`

Purpose: Personal projects and life outside professional work.

Current sections:

- Page header: “Build. Explore. Capture. Repeat.”
- Personal project previews for Home Journey, Coral, and Our Frame.
- Photography section with honest structure for future real images.
- Travel section.
- Away-from-screen interests.

Key files:

- `src/app/(site)/personal/page.tsx`

## Contact

Route: `/contact`

Purpose: Verified contact links and full contact form.

Current sections:

- Email, LinkedIn, and GitHub links from `src/content/profile.ts`.
- Contact form with server-side validation, honeypot spam protection, lightweight rate limiting, and Resend email delivery.

Key files:

- `src/app/(site)/contact/page.tsx`
- `src/app/api/contact/route.ts`
- `src/components/contact/contact-form.tsx`
- `src/components/contact/contact-links.tsx`

## Project Case Studies

### Home Journey

Route: `/work/home-journey`

Purpose: Active product case study for a notes-first homeownership platform.

Key files:

- `src/app/(site)/work/home-journey/page.tsx`
- `src/components/home-journey/*`

### Coral

Route: `/work/coral`

Purpose: Active finance case study for a local-first financial statement analyzer.

Key files:

- `src/app/(site)/work/coral/page.tsx`
- `src/components/coral/coral-concept-visual.tsx`

## Résumé

Routes:

- `/resume`
- `/resume/print`

Purpose: Formal résumé utility surfaces. `/resume/print` is noindex and used by `scripts/generate-resume-pdf.mjs`.

Generated files kept:

- `public/resume/nitin-kotcherlakota-resume.pdf`
- `resume/nitin-kotcherlakota-resume.md`
- `resume/nitin-kotcherlakota-resume.txt`

Key files:

- `src/app/(site)/resume/page.tsx`
- `src/app/resume/print/page.tsx`
- `src/components/resume/*`
- `src/content/resume.ts`
- `scripts/generate-resume-markdown.ts`
- `scripts/generate-resume-text.ts`
- `scripts/generate-resume-pdf.mjs`

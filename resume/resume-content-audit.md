# Résumé content audit (internal — not linked publicly)

This file documents where every fact in `src/content/resume.ts` came from,
what was intentionally left out, and what still needs confirmation before
this résumé is used for a real application. It is not referenced from any
public route.

## 1. Sources reviewed

- `resume-source/Profile.pdf` — **not present in this repository at
  implementation time.** See "Conflicts and gaps" below for how verified
  career data was sourced instead.
- This repository (`main` @ `3182b89`, after PR #4 "polish portfolio
  experience and accessibility"):
  - `README.md`
  - `design/mockups/README-MOCKUPS.md` and the mockup PNG captions
  - `src/content/profile.ts` (existing profile configuration)
  - `src/app/(site)/about/**`, `src/components/about/**`
  - `src/app/(site)/resume/**` (pre-PR-7 "coming soon" résumé shell)
  - `src/app/(site)/work/home-journey/**`, `src/components/home-journey/**`
  - `src/app/(site)/work/coral/**`, `src/components/coral/**`
  - `package.json` / `package-lock.json` (dependency verification)
  - `src/assets/images/nitin-portrait.jpg` (approved portrait, visual asset
    only — not used as a biographical source)

## 2. Verified information used

- Employment history, titles, date ranges, and locations for JPMorganChase,
  Intuit, IGT, Sagitec Solutions, and Pitney Bowes, exactly as supplied in
  the PR 7 task brief (which states it is sourced from the LinkedIn PDF
  export).
- Intuit achievement bullets: rewritten from the 10 supported facts listed
  in the brief (transaction onboarding, Kafka idempotency, W-9 reusable
  capability, recurring crypto purchases, CI/CD + AWS alerting), preserving
  the "reported 70%" framing rather than asserting it as independently
  verified.
- Sagitec and Pitney Bowes bullets: written only from the technologies and
  responsibilities explicitly listed in the brief; no invented metrics.
- Education: Northern Illinois University (M.S. Computer Science, 2014–2016)
  and Jawaharlal Nehru Technological University (B.E. Computer Science,
  2010–2014), exactly as supplied.
- LinkedIn URL: `https://www.linkedin.com/in/nitin-kotcherlakota/`, used
  verbatim everywhere a LinkedIn link appears (résumé header, `/resume` web
  page, `resume/*.md`, `resume/*.txt`, and now set as
  `profile.linkedinUrl`, which also makes it appear in the site's shared
  Contact Links component on `/about` and the footer).
- Email: `nitin.kotcherlakota@gmail.com` — already present in
  `src/content/profile.ts` before this PR (source precedence #1, "explicitly
  configured profile information in the repository") and consistent with
  the brief's LinkedIn-sourced email, so there is no conflict to resolve.
- "8+ years" in the professional summary is used verbatim, per the explicit
  instruction to use that figure rather than recompute one from dates.
- Home Journey status ("Active Development") and technology stack
  (Next.js, TypeScript, Tailwind CSS) — verified directly against
  `src/app/(site)/work/home-journey/**` and `src/components/home-journey/**`.
- Portrait: `src/assets/images/nitin-portrait.jpg`, used only as a visual
  asset on `/about` and the `/resume` web introduction, per instructions.

## 3. Information omitted

- **Coral is omitted from Selected Projects entirely.** The task brief
  suggested a Coral entry describing a Next.js frontend, FastAPI backend,
  SQLite, Chroma, Ollama, local LLM inference, intent classification, and
  SSE. Repository inspection (`src/app/(site)/work/coral/page.tsx`,
  `src/components/coral/coral-concept-visual.tsx`,
  `src/components/work/coral-feature.tsx`, `package.json`) found **none of
  this implemented**: Coral is a "Coming Soon" marketing page with a
  hardcoded, explicitly-labeled illustrative SVG mockup ("Concept page —
  not a live product"), and none of FastAPI/SQLite/Chroma/Ollama appear
  anywhere in `package.json` or `package-lock.json`. Per source precedence
  (repository implementation outranks the task brief's suggested content)
  and the factuality requirements, listing Coral as a "Selected Project"
  with those technologies would fabricate engineering work that does not
  exist in this repo. The brief itself permits omitting Coral if it can't
  be substantiated ("If the résumé becomes too dense, shorten Coral or omit
  it in favor of Home Journey"), so it was omitted rather than watered down
  into a misleading one-liner.
- **Home Journey bullets do not mention Supabase, Row Level Security,
  Resend, email authentication, household collaboration, GitHub Actions, or
  Vercel deployment.** The task brief listed these as "potential verified
  areas." Repository inspection found zero references to any of them —
  not in `package.json`/`package-lock.json`, not in `.github/` (which
  doesn't exist), not even as case-study narrative copy. The Home Journey
  case-study page itself labels "household collaboration" as "Exploring"
  and onboarding as "Early direction" (`status-section.tsx`), and the
  Planned Directions section explicitly states nothing there is released.
  The published Home Journey bullets are scoped to what's actually verified
  in this repo: product/information-architecture design and a Next.js /
  TypeScript / Tailwind CSS case-study build.
- **AI Systems skills category omitted from Technical Skills.** No
  Local LLMs, Ollama, retrieval, embeddings, agentic-workflow, intent-
  classification, or structured-extraction implementation exists anywhere
  in this repository (Coral, the only project that would host this work,
  has none of it built). Listing these as skills would misrepresent
  exploration/interest as demonstrated capability. The professional summary
  still names AI systems engineering, agentic workflows, and local AI as an
  active growth area — consistent with `profile.ts`'s own pre-existing
  `currentFocus` / `interests` framing — without claiming them as skills.
- **LinkedIn "Top Skills"** (exploratory data analysis, data visualization,
  statistical data analysis) omitted per instructions not to feature them
  by default; they don't match the target roles and the brief only asked to
  include them "if relevant and adequately supported," which they aren't
  here.
- **Certification omitted.** "Data science and machine learning: Making
  data-driven decisions" has no issuer available in the source data
  supplied, so it is not published. See open question #4 below.
- **Portfolio website itself omitted from Selected Projects** — the brief
  only allows including it "if space remains and it demonstrates meaningful
  engineering beyond a basic personal website," and the résumé is already a
  full two pages without it.
- No phone number (none supplied for publication) and no street address
  (never to be published), per instructions.

## 4. Conflicting information

- **`resume-source/Profile.pdf` does not exist in this repository.** The
  task brief treats it as the authoritative source and provides detailed
  "VERIFIED ..." sections that it states are drawn from that PDF, but no
  such file was present to independently read or verify against. Per
  source precedence, this repo's `resume-source/README.md` documents the
  convention for supplying a real export going forward. All employment,
  education, and skills facts in `src/content/resume.ts` come from the
  structured data the brief itself supplied, not from directly reading a
  PDF. **This should be treated as unverified against the primary document
  until a real `Profile.pdf` is reviewed against this file.**
- No other conflicts were found between the task brief, the existing
  `src/content/profile.ts`, and the repository's implementation — the
  Coral/Home Journey scope reductions above are gaps (brief claims not
  backed by repo evidence), not contradictions between two sources.

## 5. Missing current JPMorganChase responsibilities

Confirmed only: title ("Senior Software Engineer"), dates ("June 2024 –
Present"), and location ("Jersey City, New Jersey"). No responsibilities,
technologies, team structure, or scope are published — none were supplied,
and none exist elsewhere in this repository to verify. See open questions.

## 6. Missing JPMorganChase achievements

None published, for the same reason. This is the largest gap in the
résumé — over two years of current-role tenure with zero bullets. Flagging
as high priority for follow-up (see open questions).

## 7. Missing IGT responsibilities

Confirmed only: title ("Software Engineer III"), dates ("October 2021 –
January 2022"), and location ("United States"). No detailed
responsibilities were supplied for this ~3-month role.

## 8. Skills requiring confirmation

- "Node.js" is listed under Backend & Application Development as a
  reasonable inference from Next.js usage, not as an independently
  verified, separately-demonstrated skill. Worth confirming it should stay.
- No AWS Batch, PagerDuty, or Argo CD version/scope detail beyond what the
  Intuit bullets already state — fine for a résumé, but confirm none of
  this is considered sensitive before wider distribution.

## 9. Certification issuer requiring confirmation

"Data science and machine learning: Making data-driven decisions" — no
issuing organization was available in the supplied source data. Omitted
from the public résumé per instructions. Needs the real issuer name (e.g.
LinkedIn Learning, a university, a specific vendor) before it can be
published without misleading context.

## 10. Missing GitHub URL

Not missing — `profile.githubUrl` (`https://github.com/knitinjaideep`) was
already set in `src/content/profile.ts` before this PR, verified from this
repository's own git remote. It is now also surfaced in the résumé header.
Confirm this is the GitHub profile Nitin wants attached to a résumé (vs. a
separate professional-only GitHub, if one exists).

## 11. Whether the LinkedIn email should remain public

`nitin.kotcherlakota@gmail.com` is already published on `/about` (via the
Contact CTA / footer) from a prior PR, so this PR does not newly expose it —
it now additionally appears on `/resume`, in the PDF, and in the Markdown/
text outputs. Confirm this is still the preferred public contact email
before wider résumé distribution.

## 12. Bullets that could benefit from supported metrics

- The Sagitec query-performance bullet ("Analyzed query plans and data
  models... to identify and improve slow-running database queries.") has no
  quantified improvement because the source doesn't provide one. If a real
  number exists (e.g., "reduced query time by X%"), add it.
- The Home Journey bullets are intentionally metric-free (no users, no
  launch, no revenue exist to cite). If/when real product metrics exist,
  they belong here instead of being retrofitted early.

## 13. Confidentiality considerations

- No JPMorganChase internal system names, project names, or team structure
  were published — only the public role/date/location, consistent with the
  instruction not to expose internal or confidential information.
- Intuit bullets stay at the level of detail already present in the task
  brief (itself presumably already reviewed by Nitin before being pasted
  into a LinkedIn-sourced summary); nothing beyond that was added.

## 14. Questions for future résumé refinement

1. What can be publicly said about current JPMorganChase responsibilities —
   systems owned, primary backend technologies, and general scope (without
   confidential specifics)?
2. Are there any JPMorganChase achievements (even directionally described,
   e.g., "improved deployment reliability for X type of service") that are
   safe to share publicly?
3. Was there any cross-team collaboration or mentoring at JPMorganChase or
   Intuit worth adding as a bullet, if factually supportable?
4. Who issued the "Data science and machine learning: Making data-driven
   decisions" certification, and should it be published at all?
5. Is `https://github.com/knitinjaideep` the GitHub profile Nitin wants
   attached to his résumé, or does a separate professional GitHub exist?
6. Should Home Journey's résumé bullets change once real backend work
   (Supabase, auth, etc.) actually lands in the repo, or should the résumé
   continue to describe only the case-study/product-architecture work?
7. Is there a real `Profile.pdf` (or newer LinkedIn export) that should
   replace the brief-supplied data as the primary verification source, per
   `resume-source/README.md`?
8. Any IGT responsibilities worth adding for the ~3-month tenure, or should
   it stay as a concise header-only entry permanently?
9. Should the Sagitec query-performance bullet include a real number if one
   exists (e.g., a specific latency or runtime improvement)?
10. Is `nitin.kotcherlakota@gmail.com` still the preferred public contact
    email for résumé distribution, or should a different one be used?

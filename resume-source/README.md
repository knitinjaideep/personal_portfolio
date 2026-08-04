# Résumé source documents

This folder holds the private source document(s) used to verify résumé
content — currently, a LinkedIn PDF export (`Profile.pdf`).

- **Never commit the PDF itself.** `resume-source/*.pdf` is gitignored. Only
  this README is tracked.
- **Never serve it publicly.** It lives outside `public/`, so Next.js never
  exposes it through a route. Keep it that way — do not move or copy it into
  `public/`.
- It is an internal, one-time verification input, not application content.
  All published résumé content lives in the typed source of truth at
  `src/content/resume.ts` and is reviewed against this document manually;
  nothing reads this file at build or runtime.

To refresh résumé content from a newer LinkedIn export:

1. Export your LinkedIn profile as a PDF and save it here as
   `resume-source/Profile.pdf` (gitignored — it will not be committed).
2. Compare it against `src/content/resume.ts` by hand.
3. Update `src/content/resume.ts` directly. Do not invent or infer facts not
   present in the source — see `resume/resume-content-audit.md` for the
   sourcing rules this repository follows.
4. Record any new conflicts or open questions in
   `resume/resume-content-audit.md`.

At the time PR 7 was implemented, no `Profile.pdf` was present in this
repository. The verified employment, education, and skills data used to
populate `src/content/resume.ts` was supplied directly in the PR 7 task
brief (itself sourced from a LinkedIn export) rather than read from a local
file. See `resume/resume-content-audit.md` for details and open questions.

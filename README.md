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

## Package manager

- npm

## Routes

- `/`
- `/work`
- `/work/home-journey`
- `/work/coral`
- `/lab`
- `/notes`
- `/about`
- `/resume`

## Theme architecture

- System theme by default
- Manual light/dark toggle
- Persisted preference using `next-themes`
- No flash of incorrect theme on hydrate
- Accessible toggle labeling and reduced-motion support

## Folder structure

- `src/app/` — route pages and layout
- `src/components/` — shared reusable components
- `src/styles/` — global styles and design tokens
- `design/mockups/` — visual references only

## Mockup location

Design references live in `design/mockups/` and are not imported into production pages.

## Active vs Coming Soon rules

- `Home Journey` is the only active flagship product and complete public case study.
- `Coral`, `Lab`, `Notes`, `Ask About My Work`, and future projects remain clearly marked as **Coming Soon**.
- Do not imply those projects are launched or publicly available.

## Future assets

Place future résumé and portrait files in the repository and reference them through semantic static asset imports or the app assets pipeline.

# CV Project — CLAUDE.md

## Project overview

Personal website / digital CV of Žiga Žlogar. A single-page Next.js site presenting professional work in IT project management, business analysis, and digitalization.

Live target: Vercel deployment (production URL not yet set — `metadataBase` in `app/layout.tsx` still uses `https://example.com` placeholder).

## Tech stack

- **Next.js 15** (App Router)
- **React 19 + TypeScript**
- **Tailwind CSS 3**
- **Framer Motion 12** — scroll reveal animations and hero entrance animations

## Project structure

```
app/                    Next.js pages, layout, metadata, global styles
components/             UI sections (one file per section)
data/site-content.ts    Single source of truth for all site copy
public/                 Static assets (CV PDF should live here)
```

## Key conventions

- **All site copy lives in `data/site-content.ts`** — do not hardcode text in components.
- Sections are composed in `app/page.tsx` and receive typed props from `siteContent`.
- Tailwind utility classes are preferred; shared patterns are extracted as `@layer components` in `globals.css` (`.shell`, `.section`, `.panel`, `.btn-primary`, etc.).
- Animations respect `useReducedMotion` — always check this hook before adding new Framer Motion effects.
- System fonts only — no web font loading (Avenir Next, Optima, Segoe UI).

## Known issues / pending work

- `metadataBase` in `app/layout.tsx` must be updated to the real production URL before launch.
- Profile image is loaded from a LinkedIn CDN URL with an expiry timestamp — should be replaced with a locally hosted image in `/public`.
- `Download CV` button links to `/ziga-zlogar-cv.pdf` — this file needs to be added to `/public`.
- No JSON-LD structured data (Person schema) — add before launch for SEO.
- No `robots.ts` or `sitemap.ts` — add via Next.js App Router conventions.
- Navigation has no scroll spy / active section state.
- `opengraph-image.tsx` hardcodes text instead of importing from `siteContent`.

## Commands

```bash
npm run dev       # development server at localhost:3000
npm run build     # production build
npm run lint      # ESLint
```

# Ravindra Singh — Portfolio

Personal portfolio for a Senior Frontend Engineer, built with **Next.js 15 (App Router)**, **React 19** and **TypeScript**.

- Statically rendered, no client JavaScript needed for content
- CSS Modules with design tokens as CSS variables
- Fonts self-hosted via `next/font` (no layout shift)
- Accessible: semantic landmarks, skip link, visible focus, 44px+ touch targets, reduced-motion support
- All content lives in one typed file: `data/portfolio.ts`

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck
```

Requires Node.js 18.18 or newer.

## Edit content

Update `data/portfolio.ts` — profile, metrics, case studies, experience and skills. Components in `components/` render from it.

## Deploy

Import the repository on [Vercel](https://vercel.com/new) — no configuration needed.

## Structure

```
app/          layout, page, global styles
components/   one component + CSS module per section
data/         typed portfolio content
```

# sebastianmora.dev

Personal portfolio for **Sebastián Mora Carmona — Lead Generative AI Engineer.**
Built with Astro 6 + React 19 islands + Tailwind CSS 4. Deploys statically to Vercel.

## Tech stack

| | |
|---|---|
| Framework | [Astro 6](https://astro.build) (static output) |
| Islands | [React 19](https://react.dev) (only for interactive parts) |
| Styles | [Tailwind CSS 4](https://tailwindcss.com) (CSS-based `@theme`) |
| Content | Astro Content Collections (MDX) |
| Language | TypeScript (strict) |
| Runtime | Node.js 22+ |
| Hosting | [Vercel](https://vercel.com) (static) |

## Architecture

This site uses the **Astro Islands** pattern: ship plain HTML, hydrate React only where it's
needed. Static-by-default, JS-on-demand.

```
src/
├── components/
│   ├── astro/          # Server-rendered .astro components
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Experience.astro
│   │   ├── Projects.astro
│   │   ├── Speaking.astro
│   │   ├── Writing.astro
│   │   ├── Now.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   └── SectionHead.astro
│   ├── layout/         # Shared layout primitives (.astro)
│   │   ├── Aside.astro
│   │   ├── Container.astro
│   │   └── Icon.astro
│   └── react/          # Interactive islands (.tsx)
│       ├── ThemeToggle.tsx
│       ├── CursorSpotlight.tsx
│       ├── ScrollSpyNav.tsx
│       ├── AgentGraph.tsx
│       ├── ProjectCard.tsx
│       └── RevealOnScroll.tsx
├── content/
│   ├── config.ts       # Collection schemas (blog + projects)
│   ├── blog/           # Long-form posts (empty, ready for MDX)
│   └── projects/       # MDX writeups for projects
├── data/               # Typed content shipped as TS modules
│   ├── site.ts         # Name, role, social, nav, about
│   ├── experience.ts   # Job history
│   ├── projects.ts     # Featured projects
│   ├── talks.ts        # Speaking + writing
│   └── now.ts          # /now data
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── blog/
│   │   ├── index.astro
│   │   └── [...slug].astro
│   └── rss.xml.js
├── styles/
│   └── global.css      # Tailwind 4 + design tokens + portfolio styles
└── consts.ts
```

### Why some things are React and not Astro

| Component         | Why it's React |
|-------------------|----------------|
| `ThemeToggle`     | Persists choice to `localStorage`, syncs with `<html>` class |
| `CursorSpotlight` | Tracks `mousemove` and updates CSS vars per frame (rAF) |
| `ScrollSpyNav`    | Listens to scroll, highlights the active section, smooth-scrolls on click |
| `AgentGraph`      | SVG with animated edges/nodes (could be static, but kept tsx for future interactivity) |
| `ProjectCard`     | Per-card hover spotlight needs per-element pointer events |
| `RevealOnScroll`  | `IntersectionObserver`-driven reveal animation |

Everything else is static `.astro` — no JS shipped for the hero, about, timeline, projects
container, talks, writing, now, or contact sections.

## Setup

```bash
# Node.js 22+ is required (see .nvmrc / engines field)
npm install
npm run dev
```

The dev server runs on http://localhost:4321.

### Scripts

| | |
|---|---|
| `npm run dev`     | Start the Astro dev server with HMR |
| `npm run build`   | Type-check + build static site to `dist/` |
| `npm run preview` | Serve the built site locally |
| `npm run check`   | Run `astro check` (type-check `.astro` files) |

## Deploying to Vercel

This site is **fully static** — no SSR, no Vercel adapter needed. Vercel auto-detects Astro.

### Option A — Connect the GitHub repo (recommended)

1. Push to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Astro and uses these settings (already encoded in `vercel.json`):
   - Framework: **Astro**
   - Build command: `npm run build`
   - Output dir: `dist`
   - Install command: `npm install`
4. Click **Deploy.**

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel              # first time, links the project
vercel --prod       # deploy to production
```

### Custom domain

In the Vercel dashboard → **Settings → Domains**, add `sebastianmora.dev`. Update the
`SITE.url` value in `src/consts.ts` if you change domains so OG/RSS/canonical URLs resolve
correctly.

## Editing content

| To change... | Edit... |
|---|---|
| Name, role, tagline, bio | `src/data/site.ts` |
| Job history | `src/data/experience.ts` |
| Featured projects (homepage cards) | `src/data/projects.ts` |
| Talks + community | `src/data/talks.ts` |
| /now block | `src/data/now.ts` |
| Long-form posts | Add `.mdx` to `src/content/blog/` |
| Project writeups | Add `.mdx` to `src/content/projects/` |
| Site URL / SEO defaults | `src/consts.ts` |
| Design tokens (colors, fonts) | `:root` and `:root.is-light` in `src/styles/global.css` |

### Adding a blog post

```bash
cat > src/content/blog/my-first-post.mdx <<'EOF'
---
title: 'My first post'
description: 'A short description.'
pubDate: 2026-05-01
tags: ['ai', 'engineering']
---

Hello.
EOF
```

Visit `/blog/my-first-post`. The post appears on `/blog` and in the RSS feed at `/rss.xml`.

## Theming

The portfolio supports dark and light modes. Tokens live as CSS custom properties on
`:root` (dark) and `:root.is-light` (light). The `ThemeToggle` island toggles the
`is-light` class on `<html>` and persists to `localStorage`. A small inline script in
`BaseLayout.astro` applies the saved theme **before paint** to avoid a flash of the wrong
theme.

Tailwind utilities map to those vars via `@theme inline`, so `bg-bg`, `text-fg`,
`text-accent`, etc. respect the active theme.

## Accessibility & motion

- Respects `prefers-reduced-motion` (disables grain pulse, agent-graph animations, smooth scroll).
- Cursor spotlight is disabled on coarse pointers (touch devices).
- Focus styles inherit Astro/Tailwind defaults (visible focus rings preserved on buttons & links).
- `aria-current` reflects the active section in the side nav.

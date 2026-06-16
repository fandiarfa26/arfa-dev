<div align="center">
  <img src="./static/favicon.ico" alt="" height="64" />
</div>

# M. Fandi Arfabuma — Portfolio

[![SvelteKit](https://img.shields.io/badge/SvelteKit-5-ff3e00?style=flat-square&logo=svelte)](https://kit.svelte.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)

Personal portfolio of **M. Fandi Arfabuma** — a frontend engineer who enjoys bridging design and development, crafting interfaces that turn ideas into products people enjoy using.

[arfa-dev.vercel.app](https://arfa-dev.vercel.app)

---

## Overview

This is a digital home, not a gallery. The site prioritises clarity, thoughtful presentation, and authentic storytelling over flashy effects. Each project is presented as a narrative about decisions, trade-offs, and outcomes — not just a screenshot with links.

Built as a fully static site with **SvelteKit 5**, deployed on **Vercel**, and designed around the **Editorial Noir** design direction — dark, calm, editorial-tech with warmth.

### Features

- **Static-first** — prerendered by default, no server needed for content delivery
- **MDX-powered blog** — write posts as Markdown, loaded via Vite's `import.meta.glob`
- **TypeScript content layer** — projects and experiences are typed data, no CMS required
- **Editorial design system** — EB Garamond headlines, Hanken Grotesk body, tonal surface hierarchy
- **Subtle motion** — GSAP-powered entrance animations, fade reveals, and staggers that respect `prefers-reduced-motion`
- **WCAG 2.2 AA target** — semantic HTML, keyboard navigation, visible focus states, skip-to-content link

---

## Built with

| Stack | Choice |
|---|---|
| **Framework** | [SvelteKit 5](https://kit.svelte.dev) |
| **Language** | [TypeScript](https://www.typescriptlang.org) (strict) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com) + `@tailwindcss/typography` |
| **Content** | TypeScript (projects/experiences) + MDX via [mdsvex](https://mdsvex.com) (blog) |
| **Animation** | [GSAP](https://gsap.com) (minimal, purposeful) |
| **Icons** | [Lucide](https://lucide.dev) |
| **Deployment** | [Vercel](https://vercel.com) (Node.js 22, `@sveltejs/adapter-vercel`) |

---

## Getting started

```bash
pnpm install
pnpm dev        # start dev server
pnpm build      # production build
pnpm preview    # preview production build locally
pnpm check      # type-check with svelte-check
```

> **No environment variables required.** The site is fully self-contained.

---

## Project structure

```
src/
├── lib/
│   ├── animations/     # GSAP modules (hero, reveal, stagger, pulse)
│   ├── components/
│   │   ├── sections/   # Homepage sections (Hero, WhoIAm, SelectedWork, ...)
│   │   └── shared/     # Nav, Footer, Container, CursorFollower, ...
│   ├── content/        # Data layer
│   │   ├── blog/       # Blog posts as .md (frontmatter + MDX)
│   │   ├── projects.ts
│   │   └── experiences.ts
│   └── utils.ts        # cn() helper (clsx + tailwind-merge)
├── routes/
│   ├── +page.svelte    # Homepage
│   ├── blog/           # Blog list + [slug] detail
│   └── projects/       # Project showcase
├── app.html
└── app.css
```

### Content management

**Projects** — `src/lib/content/projects.ts` exports a typed array. Each entry includes situation, challenge, decision, and outcome to tell the full story.

**Experiences** — `src/lib/content/experiences.ts` contains typed entries with highlights and a personal reflection.

**Blog** — posts live in `src/lib/content/blog/` as `.md` files with frontmatter:

```yaml
---
title: Post Title
description: Short description
publishedAt: 2026-06-01
excerpt: A summary for the list view
tags: [sveltekit, architecture]
published: true
---
```

---

## Design direction

The visual language follows **Editorial Noir**: deep charcoal backgrounds (`#131313`), pure white primary text, emerald green (`#10B981`) for sparing accents, and tonal surface layers that create hierarchy without heavy shadows.

- **Headlines:** EB Garamond (serif) — editorial character, calm confidence
- **Body:** Hanken Grotesk (sans) — clarity and precision
- **Border radius:** restrained (2px default, 12px max)
- **Motion:** soft fades, 8–24px translate offsets, gentle staggers

> The full design system is documented in [`docs/DESIGN.md`](./docs/DESIGN.md).

---

## Architecture

The architecture follows a **static-first** approach. Content is the source of truth — no database, no CMS, no server-side logic. The site remains fully functional with JavaScript disabled for reading content and navigation.

- `prerender = true` is set globally
- Projects and experiences use TypeScript for type safety
- Blog uses `mdsvex` to render MDX as Svelte components
- Animation modules are kept small and isolated (one concern per file)

> See [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) for the full architecture document.

---

## Deployment

Deployed on **Vercel** via `@sveltejs/adapter-vercel` (Node.js 22 runtime). Every push to main triggers an automatic build and deploy.

---

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start Vite dev server |
| `pnpm build` | Production build |
| `pnpm preview` | Preview production build |
| `pnpm check` | `svelte-kit sync` + `svelte-check` |

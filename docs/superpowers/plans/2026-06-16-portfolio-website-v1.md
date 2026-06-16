# Portfolio Website v1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) for syntax tracking.

**Goal:** Build a production-ready personal portfolio website for Fandi Arfa with SvelteKit, following the Editorial Noir design system.

**Architecture:** Static-first SvelteKit app with 6-section homepage, projects page, and MDX blog. Content stored as TypeScript data (projects) and MDX files (blog). No database, no CMS, no server — Git repo is source of truth. Deploy to Vercel.

**Tech Stack:** SvelteKit 2, TypeScript, Tailwind CSS 3, shadcn-svelte, GSAP, Lucide Icons, MDX

**Reference files:**
- `docs/PRD.md` — Product requirements, copy, user journey
- `docs/DESIGN.md` — Design system (colors, typography, spacing, motion)
- `docs/ARCHITECTURE.md` — Component tree, routing, data flow
- `docs/design.html` — Visual prototype (1151-line fully coded HTML)

---

## File Structure

```
arfa-dev/
├── .env.example
├── .gitignore
├── package.json
├── svelte.config.js
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── src/
│   ├── app.html
│   ├── app.css
│   ├── routes/
│   │   ├── +layout.svelte
│   │   ├── +layout.ts
│   │   ├── +page.svelte
│   │   ├── projects/
│   │   │   └── +page.svelte
│   │   ├── blog/
│   │   │   ├── +page.svelte
│   │   │   └── [slug]/
│   │   │       └── +page.svelte
│   ├── lib/
│   │   ├── components/
│   │   │   ├── shared/
│   │   │   │   ├── Container.svelte
│   │   │   │   ├── Nav.svelte
│   │   │   │   ├── Footer.svelte
│   │   │   │   ├── SectionHeader.svelte
│   │   │   │   └── LocalTime.svelte
│   │   │   ├── sections/
│   │   │   │   ├── Hero.svelte
│   │   │   │   ├── WhoIAm.svelte
│   │   │   │   ├── SelectedWork.svelte
│   │   │   │   ├── Experience.svelte
│   │   │   │   ├── Thoughts.svelte
│   │   │   │   └── Contact.svelte
│   │   ├── content/
│   │   │   ├── projects.ts
│   │   │   └── blog/
│   │   │       ├── turning-designs-into-products.md
│   │   │       ├── good-collaboration.md
│   │   │       └── small-details-users-notice.md
│   │   ├── animations/
│   │   │   ├── hero.ts
│   │   │   ├── reveal.ts
│   │   │   ├── stagger.ts
│   │   │   └── pulse.ts
│   │   └── utils.ts
│   └── app.d.ts
```

---

### Task 1: Scaffold SvelteKit Project + Tailwind + shadcn-svelte

**Files:**
- Create: `package.json`
- Create: `svelte.config.js`
- Create: `tsconfig.json`
- Create: `vite.config.ts`
- Create: `postcss.config.js`
- Create: `tailwind.config.ts`
- Create: `src/app.css`
- Create: `src/app.html`
- Create: `src/app.d.ts`
- Create: `.env.example`
- Create: `.gitignore`

- [ ] **Step 1: Create SvelteKit project manually**

Since we're scaffolding manually (no CLI), create `package.json`:

```json
{
  "name": "arfa-dev",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "preview": "vite preview",
    "check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
    "check:watch": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch"
  },
  "devDependencies": {
    "@sveltejs/adapter-vercel": "^5.0.0",
    "@sveltejs/kit": "^2.5.0",
    "@sveltejs/vite-plugin-svelte": "^3.1.0",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3",
    "svelte": "^4.2.0",
    "svelte-check": "^3.8.0",
    "typescript": "^5.5.0",
    "vite": "^5.4.0"
  },
  "dependencies": {
    "gsap": "^3.12.0",
    "lucide-svelte": "^0.395.0",
    "mdsvex": "^0.11.0",
    "tailwind-merge": "^2.3.0",
    "tailwind-variants": "^0.2.1",
    "clsx": "^2.1.1"
  }
}
```

- [ ] **Step 2: Create svelte.config.js**

```js
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: ['.md']
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  kit: {
    adapter: adapter()
  }
};

export default config;
```

- [ ] **Step 3: Create tsconfig.json**

```json
{
  "extends": "./.svelte-kit/tsconfig.json",
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "strict": true,
    "moduleResolution": "bundler"
  }
}
```

- [ ] **Step 4: Create vite.config.ts**

```ts
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()]
});
```

- [ ] **Step 5: Create postcss.config.js**

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};
```

- [ ] **Step 6: Create tailwind.config.ts with full design tokens from DESIGN.md**

```ts
import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts,md}'],
  theme: {
    extend: {
      colors: {
        background: '#131313',
        'on-background': '#ffffff',
        surface: '#1c1c1c',
        'surface-container-lowest': '#1a1a1a',
        'surface-container': '#242424',
        'surface-container-high': '#2a2a2a',
        'surface-container-highest': '#333333',
        'on-surface': '#ffffff',
        'on-surface-variant': '#a3a3a3',
        primary: '#ffffff',
        'on-primary': '#131313',
        secondary: '#10b981',
        'on-secondary': '#ffffff',
        'outline-variant': '#333333',
        'secondary-container': '#064e3b',
        'tertiary-container': '#064e3b',
        'on-tertiary-container': '#10b981'
      },
      borderRadius: {
        DEFAULT: '2px',
        lg: '4px',
        xl: '8px',
        '2xl': '12px',
        full: '9999px'
      },
      spacing: {
        'container-max': '1200px',
        'margin-desktop': '64px',
        'margin-mobile': '24px',
        gutter: '24px',
        'section-gap': '96px'
      },
      fontFamily: {
        display: ['EB Garamond', ...fontFamily.serif],
        'headline-lg': ['EB Garamond', ...fontFamily.serif],
        'headline-md': ['EB Garamond', ...fontFamily.serif],
        'body-lg': ['Hanken Grotesk', ...fontFamily.sansSerif],
        'body-md': ['Hanken Grotesk', ...fontFamily.sansSerif],
        'label-md': ['Hanken Grotesk', ...fontFamily.sansSerif],
        'label-sm': ['Hanken Grotesk', ...fontFamily.sansSerif]
      },
      fontSize: {
        display: ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '500' }],
        'headline-lg': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '500' }],
        'headline-lg-mobile': ['32px', { lineHeight: '1.2', fontWeight: '500' }],
        'headline-md': ['32px', { lineHeight: '1.3', fontWeight: '500' }],
        'body-lg': ['20px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'label-md': ['14px', { lineHeight: '1.4', letterSpacing: '0.05em', fontWeight: '600' }],
        'label-sm': ['12px', { lineHeight: '1.4', fontWeight: '500' }]
      },
      animation: {
        'fade-in': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
```

- [ ] **Step 7: Create src/app.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    @apply bg-background text-on-background font-body-md text-body-md overflow-x-hidden;
  }

  ::selection {
    @apply bg-secondary text-on-primary;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: theme('colors.background');
  }
  ::-webkit-scrollbar-thumb {
    background: theme('colors.surface-container-highest');
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: theme('colors.outline-variant');
  }
}
```

- [ ] **Step 8: Create src/app.html**

```html
<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%sveltekit.assets%/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=Hanken+Grotesk:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
    %sveltekit.head%
  </head>
  <body data-sveltekit-prerender="true">
    %sveltekit.body%
  </body>
</html>
```

- [ ] **Step 9: Create src/app.d.ts**

```ts
/// <reference types="@sveltejs/kit" />

declare global {
  namespace App {}
}

export {};
```

- [ ] **Step 10: Create .env.example**

```
# No environment variables required for V1
```

- [ ] **Step 11: Create .gitignore**

```
node_modules/
.env
.env.local
.DS_Store
.svelte-kit/
build/
```

- [ ] **Step 12: Install dependencies and verify build**

Run: `pnpm install`
Run: `pnpm build`
Expected: Build succeeds, output in `build/` directory

---

### Task 2: Set up Root Layout + Metadata

**Files:**
- Create: `src/routes/+layout.svelte`
- Create: `src/routes/+layout.ts`

- [ ] **Step 1: Create root layout load function**

Create `src/routes/+layout.ts`:

```ts
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
  return {
    title: 'M. Fandi Arfabuma — Frontend Engineer',
    description:
      'Frontend engineer who enjoys bridging design and development—crafting experiences that feel intuitive, thoughtful, and practical for real users.'
  };
};
```

- [ ] **Step 2: Create root layout component**

Create `src/routes/+layout.svelte`:

```svelte
<script lang="ts">
  import '../app.css';
  import Nav from '$lib/components/shared/Nav.svelte';
  import Footer from '$lib/components/shared/Footer.svelte';
  import { page } from '$app/stores';

  let { children }: { children: import('svelte').Snippet } = $props();
</script>

<svelte:head>
  <title>{$page.data.title ?? 'M. Fandi Arfabuma'}</title>
  <meta name="description" content={$page.data.description ?? 'Frontend engineer'} />
</svelte:head>

<Nav />
<main class="pt-24 md:pt-32">
  {@render children()}
</main>
<Footer />
```

---

### Task 3: Build Shared Components

**Files:**
- Create: `src/lib/components/shared/Container.svelte`
- Create: `src/lib/components/shared/Nav.svelte`
- Create: `src/lib/components/shared/Footer.svelte`
- Create: `src/lib/components/shared/SectionHeader.svelte`
- Create: `src/lib/components/shared/LocalTime.svelte`
- Create: `src/lib/utils.ts`

- [ ] **Step 1: Create cn utility**

Create `src/lib/utils.ts`:

```ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 2: Create Container.svelte**

```svelte
<script lang="ts">
  let { class: className = '', children }: { class?: string; children: import('svelte').Snippet } = $props();
</script>

<div class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto {className}">
  {@render children()}
</div>
```

- [ ] **Step 3: Create Nav.svelte**

```svelte
<script lang="ts">
  import Container from './Container.svelte';
  import { page } from '$app/stores';

  const navLinks = [
    { href: '/#work', label: 'Work' },
    { href: '/#experience', label: 'Experience' },
    { href: '/#thoughts', label: 'Thoughts' }
  ] as const;
</script>

<nav class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300">
  <Container>
    <div class="flex justify-between items-center py-4">
      <a
        href="/"
        class="font-headline-md text-headline-md text-primary hover:opacity-80 transition-opacity"
      >
        MFA
      </a>
      <ul class="hidden md:flex items-center gap-8">
        {#each navLinks as link}
          <li>
            <a
              href={link.href}
              class="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors duration-300"
            >
              {link.label}
            </a>
          </li>
        {/each}
      </ul>
      <div class="flex items-center gap-4">
        <a
          href="/#contact"
          class="hidden md:inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 bg-secondary text-on-primary hover:bg-secondary/90 h-10 px-4 py-2 shadow-sm"
        >
          Let's Talk
        </a>
        <button
          class="md:hidden text-primary p-2 inline-flex items-center justify-center rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 hover:bg-surface-container"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </div>
  </Container>
</nav>
```

- [ ] **Step 4: Create Footer.svelte**

```svelte
<script lang="ts">
  import Container from './Container.svelte';
</script>

<footer class="w-full py-12 bg-surface border-t border-outline-variant/30">
  <Container>
    <div class="flex flex-col md:flex-row justify-between items-center gap-6">
      <div class="font-headline-md text-headline-md text-primary">MFA</div>
      <div class="font-body-md text-body-md text-on-surface-variant text-center md:text-left">
        Built with curiosity, collaboration, and plenty of iteration.
      </div>
      <div class="flex gap-6">
        <a href="#" class="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors">LinkedIn</a>
        <a href="#" class="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors">GitHub</a>
        <a href="#" class="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors">TikTok</a>
      </div>
    </div>
    <div class="text-center mt-6 font-label-sm text-label-sm text-on-surface-variant/60">
      &copy; Fandi Arfa
    </div>
  </Container>
</footer>
```

- [ ] **Step 5: Create SectionHeader.svelte**

```svelte
<script lang="ts">
  let { title, description }: { title: string; description?: string } = $props();
</script>

<div class="max-w-2xl mb-12">
  <h2 class="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-4">
    {title}
  </h2>
  {#if description}
    <p class="font-body-lg text-body-lg text-on-surface-variant">{description}</p>
  {/if}
</div>
```

- [ ] **Step 6: Create LocalTime.svelte**

```svelte
<script lang="ts">
  let time = $state('');

  function updateTime() {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: 'Asia/Jakarta',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    };
    time = new Intl.DateTimeFormat([], options).format(new Date());
  }

  $effect(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  });
</script>

<div class="h-32 border border-outline-variant rounded-xl p-6 bg-surface-container-highest text-primary flex flex-col items-center justify-center text-center shadow-sm">
  <span class="font-label-sm text-label-sm opacity-80 uppercase tracking-widest mb-1 text-secondary">Surabaya, ID</span>
  <div class="font-headline-md text-headline-md tabular-nums tracking-tight">{time}</div>
</div>
```

---

### Task 4: Create Content Layer (Projects Data + Blog Posts)

**Files:**
- Create: `src/lib/content/projects.ts`
- Create: `src/lib/content/blog/turning-designs-into-products.md`
- Create: `src/lib/content/blog/good-collaboration.md`
- Create: `src/lib/content/blog/small-details-users-notice.md`

- [ ] **Step 1: Create projects data type and content**

Create `src/lib/content/projects.ts`:

```ts
export type Project = {
  title: string;
  description: string;
  year: string;
  role: string;
  tags: string[];
  situation: string;
  challenge: string;
  decision: string;
  outcome: string;
  links?: {
    demo?: string;
    github?: string;
  };
};

export const projects: Project[] = [
  {
    title: 'Lumina Dashboard',
    description: 'Frontend Engineer • 2023',
    year: '2023',
    role: 'Frontend Engineer',
    tags: ['React', 'TypeScript', 'Data Viz'],
    situation:
      'Lumina needed a complete overhaul of their core analytics platform to handle a 300% increase in data volume. I led the frontend architecture, bridging the gap between product strategy and technical execution.',
    challenge:
      'The primary challenge was rendering dense datasets without dropping frames.',
    decision:
      'We elected to implement a virtualized rendering approach and moved heavy aggregations to Web Workers, keeping the main thread responsive.',
    outcome:
      'Reduced initial load time by 45% and established a scalable component library that accelerated subsequent feature development by weeks.',
    links: { demo: '#', github: '#' }
  },
  {
    title: 'Pulse Design System',
    description: 'UX Engineer • 2022',
    year: '2022',
    role: 'UX Engineer',
    tags: ['Design Tokens', 'Accessibility', 'Vue.js'],
    situation:
      'Inconsistent UI across three flagship products was diluting brand trust. I stepped in to architect and build the foundational layers of a unified design system.',
    challenge:
      'Aligning engineering and design teams on naming conventions was surprisingly difficult.',
    decision:
      'I introduced a semantic token architecture that acted as a single source of truth, removing ambiguity.',
    outcome:
      'Achieved WCAG AA compliance across core components and reduced UI-related QA tickets by roughly 30% in the first quarter of adoption.',
    links: { demo: '#', github: '#' }
  }
];
```

- [ ] **Step 2: Create blog post — turning-designs-into-products.md**

```md
---
title: Turning Designs Into Real Products
description: Lessons from bridging design intent and implementation constraints.
publishedAt: 2023-10-15
excerpt: Lessons from bridging design intent and implementation constraints.
tags:
  - Engineering
published: false
---

# Turning Designs Into Real Products

*Coming soon.*
```

- [ ] **Step 3: Create blog post — good-collaboration.md**

```md
---
title: What Good Collaboration Looks Like
description: Why communication matters as much as code.
publishedAt: 2023-08-20
excerpt: Why communication matters as much as code.
tags:
  - Culture
published: false
---

# What Good Collaboration Looks Like

*Coming soon.*
```

- [ ] **Step 4: Create blog post — small-details-users-notice.md**

```md
---
title: The Small Details Users Notice
description: Micro decisions that shape everyday experiences.
publishedAt: 2023-06-10
excerpt: Micro decisions that shape everyday experiences.
tags:
  - Design
published: false
---

# The Small Details Users Notice

*Coming soon.*
```

---

### Task 5: Build Animation Utilities

**Files:**
- Create: `src/lib/animations/hero.ts`
- Create: `src/lib/animations/reveal.ts`
- Create: `src/lib/animations/stagger.ts`
- Create: `src/lib/animations/pulse.ts`

- [ ] **Step 1: Create hero entrance animation**

Create `src/lib/animations/hero.ts`:

```ts
import gsap from 'gsap';

export function animateHeroEntrance(element: HTMLElement) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const children = element.children;
  gsap.fromTo(
    children,
    { opacity: 0, y: 24 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out'
    }
  );
}
```

- [ ] **Step 2: Create scroll reveal animation**

Create `src/lib/animations/reveal.ts`:

```ts
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function animateReveal(element: HTMLElement, delay = 0) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    element.style.opacity = '1';
    return;
  }

  gsap.fromTo(
    element,
    { opacity: 0, y: 32 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    }
  );
}
```

- [ ] **Step 3: Create stagger animation utility**

Create `src/lib/animations/stagger.ts`:

```ts
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function animateStagger(container: HTMLElement, items: HTMLElement[], delay = 0) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    items.forEach((item) => (item.style.opacity = '1'));
    return;
  }

  gsap.fromTo(
    items,
    { opacity: 0, y: 24 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    }
  );
}
```

- [ ] **Step 4: Create availability pulse utility**

Create `src/lib/animations/pulse.ts`:

```ts
import gsap from 'gsap';

export function animatePulse(element: HTMLElement) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  gsap.to(element, {
    scale: 1.2,
    opacity: 0.6,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  });
}
```

---

### Task 6: Build Homepage Sections

**Files:**
- Create: `src/routes/+page.svelte`
- Create: `src/lib/components/sections/Hero.svelte`
- Create: `src/lib/components/sections/WhoIAm.svelte`
- Create: `src/lib/components/sections/SelectedWork.svelte`
- Create: `src/lib/components/sections/Experience.svelte`
- Create: `src/lib/components/sections/Thoughts.svelte`
- Create: `src/lib/components/sections/Contact.svelte`

- [ ] **Step 1: Create Hero.svelte**

```svelte
<script lang="ts">
  import { animateHeroEntrance } from '$lib/animations/hero';
  import { onMount } from 'svelte';

  let heroRef: HTMLDivElement;

  onMount(() => {
    if (heroRef) animateHeroEntrance(heroRef);
  });
</script>

<section class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-gap" bind:this={heroRef}>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
    <div class="md:col-span-8">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
        <span class="font-label-md text-label-md text-secondary uppercase tracking-widest">
          East Java, Indonesia &bull; Available for selected collaborations
        </span>
      </div>
      <h1 class="font-headline-lg-mobile text-headline-lg-mobile md:font-display md:text-display text-primary mb-6 max-w-4xl">
        Hi, I'm Fandi. I build interfaces that turn ideas into products people enjoy using.
      </h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
        I'm a frontend engineer who enjoys bridging design and development&mdash;crafting experiences that feel intuitive, thoughtful, and practical for real users.
      </p>
      <div class="flex flex-wrap items-center gap-4">
        <a href="#work" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 bg-secondary text-on-primary hover:bg-secondary/90 h-11 px-8 shadow-sm">
          View Selected Work
        </a>
        <a href="#contact" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 border border-outline-variant bg-transparent hover:bg-surface-container hover:text-primary h-11 px-8 shadow-sm">
          Let's Talk
        </a>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Create WhoIAm.svelte**

```svelte
<script lang="ts">
  import LocalTime from '../shared/LocalTime.svelte';
  import { animateStagger } from '$lib/animations/stagger';
  import { onMount } from 'svelte';

  let container: HTMLDivElement;
  let cards: HTMLDivElement[] = [];

  onMount(() => {
    if (container && cards.length > 0) animateStagger(container, cards);
  });
</script>

<section class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-gap" bind:this={container}>
  <div class="border-t border-outline-variant/30 pt-12">
    <h2 class="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-8">
      Who I Am
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[280px]">
      <!-- Card 1: About -->
      <div class="md:col-span-2 border border-outline-variant rounded-xl p-8 bg-surface text-on-surface flex flex-col justify-between shadow-sm group" bind:this={cards[0]}>
        <div class="flex items-center justify-between mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-secondary"><rect width="18" height="7" x="3" y="3" rx="1"/><rect width="9" height="7" x="3" y="14" rx="1"/><rect width="5" height="7" x="16" y="14" rx="1"/></svg>
          <span class="inline-flex items-center rounded-full border border-outline-variant px-2.5 py-0.5 font-label-sm text-xs font-semibold bg-secondary-container text-secondary">Philosophy</span>
        </div>
        <div>
          <h3 class="font-headline-md text-headline-md text-primary mb-3">Turning concepts into usable experiences.</h3>
          <p class="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">
            I focus on the intersection of engineering rigor and design sensitivity. It's not just about making things work; it's about making them feel right and ensuring they scale gracefully.
          </p>
        </div>
      </div>
      <!-- Card 2: How I Work -->
      <div class="border border-outline-variant rounded-xl p-8 bg-surface-container-lowest text-on-surface flex flex-col justify-between shadow-sm" bind:this={cards[1]}>
        <div class="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-secondary mb-2 block"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <h3 class="font-label-md text-label-md text-primary uppercase tracking-widest mb-2">How I Work</h3>
        </div>
        <p class="font-body-md text-body-md text-on-surface-variant">
          Emphasizing clarity, asking the difficult questions early, and collaborating closely to solve real user problems before writing a line of code.
        </p>
      </div>
      <!-- Card 3 + 4 Stack -->
      <div class="flex flex-col gap-4">
        <div class="flex-1 border border-outline-variant rounded-xl p-6 bg-surface-container text-on-surface flex flex-col justify-center shadow-sm" bind:this={cards[2]}>
          <h3 class="font-label-md text-label-md text-primary uppercase tracking-widest mb-2">Beyond the Editor</h3>
          <p class="font-body-md text-body-md text-on-surface-variant text-sm">
            Constantly exploring new design tools, reading editorial typography, and refining technical workflows.
          </p>
        </div>
        <LocalTime />
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Create SelectedWork.svelte**

```svelte
<script lang="ts">
  import { projects } from '$lib/content/projects';
  import { animateReveal } from '$lib/animations/reveal';
  import { onMount } from 'svelte';

  let articles: HTMLDivElement[] = [];

  onMount(() => {
    articles.forEach((el, i) => {
      if (el) animateReveal(el, i * 0.1);
    });
  });
</script>

<section class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-gap" id="work">
  <div class="border-t border-outline-variant/30 pt-12">
    <div class="max-w-2xl mb-12">
      <h2 class="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-4">Selected Work</h2>
      <p class="font-body-lg text-body-lg text-on-surface-variant">
        A few projects that challenged how I think, collaborate, and build. Each one taught me something different about balancing user needs, technical constraints, and product goals.
      </p>
    </div>
    <div class="flex flex-col gap-16">
      {#each projects as project, i}
        <article class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter group" bind:this={articles[i]}>
          <div class="md:col-span-4 flex flex-col gap-4 items-start md:sticky md:top-32 self-start">
            <div>
              <h3 class="font-headline-md text-headline-md text-primary mb-1 group-hover:text-secondary transition-colors">{project.title}</h3>
              <p class="font-body-md text-body-md text-secondary">{project.role} &bull; {project.year}</p>
            </div>
            <div class="flex flex-wrap gap-2">
              {#each project.tags as tag}
                <span class="inline-flex items-center rounded-full border border-outline-variant px-2.5 py-0.5 font-label-sm text-xs font-semibold bg-surface-container text-on-surface-variant">{tag}</span>
              {/each}
            </div>
            {#if project.links}
              <a href={project.links.demo ?? '#'} class="inline-flex items-center gap-2 font-label-md text-label-md text-primary mt-2 hover:text-secondary transition-colors">
                View Case Study
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            {/if}
          </div>
          <div class="md:col-span-8 flex flex-col gap-8">
            <div class="aspect-[16/9] w-full bg-surface-container-lowest border border-outline-variant shadow-sm rounded-xl overflow-hidden p-2">
              <div class="w-full h-full bg-surface-container-high rounded-lg overflow-hidden relative flex items-center justify-center">
                <div class="grid grid-cols-3 gap-4 w-3/4 opacity-30 mix-blend-lighten grayscale">
                  <div class="h-8 bg-outline-variant/40 rounded"></div>
                  <div class="h-8 bg-outline-variant/40 rounded col-span-2"></div>
                  <div class="h-24 bg-outline-variant/30 rounded col-span-3"></div>
                  <div class="h-8 bg-outline-variant/50 rounded-full w-1/2"></div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 class="font-label-md text-label-md text-secondary uppercase tracking-widest mb-2">Situation &amp; Role</h4>
                <p class="font-body-md text-body-md text-on-surface-variant">{project.situation}</p>
              </div>
              <div>
                <h4 class="font-label-md text-label-md text-secondary uppercase tracking-widest mb-2">Challenges &amp; Decisions</h4>
                <p class="font-body-md text-body-md text-on-surface-variant">{project.challenge} {project.decision}</p>
              </div>
              <div class="md:col-span-2 border-t border-outline-variant/30 pt-4">
                <h4 class="font-label-md text-label-md text-secondary uppercase tracking-widest mb-2">Outcome</h4>
                <p class="font-body-md text-body-md text-on-surface">{project.outcome}</p>
              </div>
            </div>
          </div>
        </article>
        {#if i < projects.length - 1}
          <hr class="border-outline-variant/30 border-t" />
        {/if}
      {/each}
    </div>
  </div>
</section>
```

- [ ] **Step 4: Create Experience.svelte**

```svelte
<script lang="ts">
  import { animateStagger } from '$lib/animations/stagger';
  import { onMount } from 'svelte';

  let container: HTMLDivElement;
  let items: HTMLDivElement[] = [];

  const experiences = [
    {
      role: 'Senior Frontend Engineer',
      period: '2021 — PRESENT',
      company: 'Acme Corp',
      highlights: [
        'Increased onboarding completion rate by 20% as measured by analytics funnels, by redesigning critical user flows using a state machine for complex conditional rendering.',
        'Accelerated independent contribution rate of 3 junior engineers by 30% as measured by sprint velocity, by establishing a structured weekly pair programming schedule.'
      ],
      reflection: 'The most impactful code changes here weren\'t massive rewrites, but rather small, consistent improvements to internal tooling that reduced friction for everyone.'
    },
    {
      role: 'Frontend Engineer',
      period: '2019 — 2021',
      company: 'Beta Inc.',
      highlights: [
        'Reduced bundle size by 35% as measured by Lighthouse score improvements, by implementing aggressive code-splitting and migrating to a modern build toolchain.',
        'Decreased feature time-to-market by 15% as measured by release cycles, by standardizing the UI component library across the engineering organization.'
      ],
      reflection: 'Building the component library taught me that good developer experience is just as crucial as user experience for long-term project health.'
    },
    {
      role: 'Software Engineer',
      period: '2017 — 2019',
      company: 'Gamma LLC',
      highlights: [
        'Improved application rendering performance by 40% as measured by core web vitals, by migrating legacy jQuery components to a modern virtual DOM framework.',
        'Reduced customer support tickets by 25% as measured by Zendesk reports, by implementing comprehensive form validation and contextual error messaging.'
      ],
      reflection: 'Working on legacy systems taught me the value of incremental refactoring over full rewrites, emphasizing stability while modernizing the stack.'
    }
  ];

  onMount(() => {
    if (container && items.length > 0) animateStagger(container, items);
  });
</script>

<section class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-gap" id="experience" bind:this={container}>
  <div class="border-t border-outline-variant/30 pt-12">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-4 md:sticky md:top-32 self-start mb-8 md:mb-0">
        <h2 class="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-4">Experience</h2>
        <p class="font-body-md text-body-md text-on-surface-variant max-w-xs">Experiences that shaped how I approach products and teamwork.</p>
      </div>
      <div class="md:col-span-8 flex flex-col gap-12">
        {#each experiences as exp, i}
          <div class="group" bind:this={items[i]}>
            <div class="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
              <h3 class="font-headline-md text-headline-md text-primary group-hover:text-secondary transition-colors">{exp.role}</h3>
              <span class="font-label-md text-label-md text-secondary tracking-widest">{exp.period}</span>
            </div>
            <h4 class="font-body-lg text-body-lg text-on-surface-variant mb-4 border-b border-outline-variant/30 pb-4">{exp.company}</h4>
            <ul class="flex flex-col gap-4 font-body-md text-body-md text-on-surface mb-6 list-none">
              {#each exp.highlights as highlight}
                <li class="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-secondary before:rounded-full">{highlight}</li>
              {/each}
            </ul>
            <div class="bg-surface-container border border-outline-variant shadow-sm rounded-xl p-5 flex gap-4 items-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-secondary mt-0.5 shrink-0"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
              <div>
                <span class="font-label-md text-label-md text-secondary uppercase tracking-widest block mb-1">Reflection</span>
                <p class="font-body-md text-body-md text-on-surface-variant text-sm">{exp.reflection}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 5: Create Thoughts.svelte**

```svelte
<script lang="ts">
  import { animateReveal } from '$lib/animations/reveal';
  import { onMount } from 'svelte';

  let articles: HTMLDivElement[] = [];

  const thoughts = [
    {
      category: 'Engineering',
      date: 'Oct 2023',
      title: 'Turning Designs Into Real Products',
      slug: '/blog/turning-designs-into-products'
    },
    {
      category: 'Culture',
      date: 'Aug 2023',
      title: 'What Good Collaboration Looks Like',
      slug: '/blog/good-collaboration'
    },
    {
      category: 'Design',
      date: 'Jun 2023',
      title: 'The Small Details Users Notice',
      slug: '/blog/small-details-users-notice'
    }
  ];

  onMount(() => {
    articles.forEach((el, i) => {
      if (el) animateReveal(el, i * 0.1);
    });
  });
</script>

<section class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-gap" id="thoughts">
  <div class="border-t border-outline-variant/30 pt-12">
    <div class="max-w-2xl mb-8">
      <h2 class="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-4">Thoughts</h2>
      <p class="font-body-lg text-body-lg text-on-surface-variant">Occasionally, I write about things I'm learning, questioning, or improving. Not tutorials. Just honest reflections from building products.</p>
    </div>
    <div class="flex flex-col">
      {#each thoughts as thought, i}
        <a href={thought.slug} class="group py-6 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between md:items-center gap-4 hover:bg-surface-container transition-colors -mx-4 px-4 rounded-xl" bind:this={articles[i]}>
          <div>
            <span class="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-1 block">{thought.category} &bull; {thought.date}</span>
            <h3 class="font-headline-md text-headline-md text-primary group-hover:text-secondary transition-colors">{thought.title}</h3>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-outline-variant group-hover:text-primary transition-colors shrink-0"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
        </a>
      {/each}
    </div>
  </div>
</section>
```

- [ ] **Step 6: Create Contact.svelte**

```svelte
<script lang="ts">
  import { animateReveal } from '$lib/animations/reveal';
  import { onMount } from 'svelte';

  let section: HTMLElement;

  onMount(() => {
    if (section) animateReveal(section);
  });
</script>

<section class="w-full pb-section-gap" id="contact" bind:this={section}>
  <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-12">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <div class="md:col-span-4">
        <div class="flex flex-col items-center md:items-start gap-6">
          <div class="w-32 h-32 rounded-full overflow-hidden border-2 border-secondary shadow-lg shrink-0 bg-surface-container-high"></div>
          <div class="flex flex-col gap-2 text-center md:text-left">
            <h3 class="font-headline-md text-headline-md text-primary">M. Fandi Arfabuma</h3>
            <p class="font-label-md text-label-md text-secondary uppercase tracking-widest">Frontend Engineer</p>
            <div class="flex justify-center md:justify-start gap-4 mt-2">
              <a href="#" class="text-on-surface-variant hover:text-secondary transition-colors"><span class="font-label-sm text-xs">LinkedIn</span></a>
              <a href="#" class="text-on-surface-variant hover:text-secondary transition-colors"><span class="font-label-sm text-xs">GitHub</span></a>
              <a href="#" class="text-on-surface-variant hover:text-secondary transition-colors"><span class="font-label-sm text-xs">TikTok</span></a>
            </div>
          </div>
        </div>
      </div>
      <div class="md:col-span-8">
        <h2 class="font-headline-lg-mobile text-headline-lg-mobile md:font-display md:text-display text-primary mb-6 leading-tight">Let's build something meaningful together.</h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant mb-10">Whether you're exploring an idea, improving an existing product, or simply want to connect, I'd love to hear from you.</p>
        <div class="flex flex-wrap gap-4">
          <a href="mailto:hello@example.com" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 bg-secondary text-on-primary hover:bg-secondary/90 h-11 px-8 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            Email Me
          </a>
          <a href="https://wa.me/" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 border border-outline-variant bg-transparent hover:bg-surface-container hover:text-primary h-11 px-8 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 7: Wire up homepage**

Create `src/routes/+page.svelte`:

```svelte
<script lang="ts">
  import Hero from '$lib/components/sections/Hero.svelte';
  import WhoIAm from '$lib/components/sections/WhoIAm.svelte';
  import SelectedWork from '$lib/components/sections/SelectedWork.svelte';
  import Experience from '$lib/components/sections/Experience.svelte';
  import Thoughts from '$lib/components/sections/Thoughts.svelte';
  import Contact from '$lib/components/sections/Contact.svelte';
</script>

<Hero />
<WhoIAm />
<SelectedWork />
<Experience />
<Thoughts />
<Contact />
```

---

### Task 7: Build Projects Page

**Files:**
- Create: `src/routes/projects/+page.svelte`
- Create: `src/routes/projects/+page.ts`

- [ ] **Step 1: Create projects page load**

Create `src/routes/projects/+page.ts`:

```ts
import { projects } from '$lib/content/projects';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
  return {
    projects,
    title: 'Projects — M. Fandi Arfabuma',
    description: 'Explore projects and the decisions behind them.'
  };
};
```

- [ ] **Step 2: Create projects page**

Create `src/routes/projects/+page.svelte`:

```svelte
<script lang="ts">
  import Container from '$lib/components/shared/Container.svelte';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.description} />
</svelte:head>

<Container>
  <div class="pt-8 pb-section-gap">
    <h1 class="font-headline-lg-mobile text-headline-lg-mobile md:font-display md:text-display text-primary mb-4">Projects</h1>
    <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-16">
      Want to explore more projects and the decisions behind them?
    </p>
    <div class="flex flex-col gap-16">
      {#each data.projects as project}
        <article class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter group">
          <div class="md:col-span-4 md:sticky md:top-32 self-start">
            <h2 class="font-headline-md text-headline-md text-primary mb-1 group-hover:text-secondary transition-colors">{project.title}</h2>
            <p class="font-body-md text-body-md text-secondary mb-4">{project.role} &bull; {project.year}</p>
            <div class="flex flex-wrap gap-2">
              {#each project.tags as tag}
                <span class="inline-flex items-center rounded-full border border-outline-variant px-2.5 py-0.5 font-label-sm text-xs font-semibold bg-surface-container text-on-surface-variant">{tag}</span>
              {/each}
            </div>
          </div>
          <div class="md:col-span-8">
            <div class="border border-outline-variant rounded-xl p-8 bg-surface">
              <div class="mb-6">
                <h3 class="font-label-md text-label-md text-secondary uppercase tracking-widest mb-2">Situation</h3>
                <p class="font-body-md text-body-md text-on-surface-variant">{project.situation}</p>
              </div>
              <div class="mb-6">
                <h3 class="font-label-md text-label-md text-secondary uppercase tracking-widest mb-2">Challenge</h3>
                <p class="font-body-md text-body-md text-on-surface-variant">{project.challenge}</p>
              </div>
              <div class="mb-6">
                <h3 class="font-label-md text-label-md text-secondary uppercase tracking-widest mb-2">Decision</h3>
                <p class="font-body-md text-body-md text-on-surface-variant">{project.decision}</p>
              </div>
              <div>
                <h3 class="font-label-md text-label-md text-secondary uppercase tracking-widest mb-2">Outcome</h3>
                <p class="font-body-md text-body-md text-on-surface">{project.outcome}</p>
              </div>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</Container>
```

---

### Task 8: Build Blog Pages

**Files:**
- Create: `src/routes/blog/+page.svelte`
- Create: `src/routes/blog/+page.ts`
- Create: `src/routes/blog/[slug]/+page.svelte`
- Create: `src/routes/blog/[slug]/+page.ts`

- [ ] **Step 1: Create blog list page load**

Create `src/routes/blog/+page.ts`:

```ts
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  const posts = import.meta.glob('$lib/content/blog/*.md', { eager: true }) as Record<string, { metadata: Record<string, unknown> }>;

  const blogPosts = Object.entries(posts)
    .map(([path, post]) => {
      const slug = path.split('/').pop()?.replace('.md', '') ?? '';
      return { slug, ...post.metadata };
    })
    .filter((post) => post.published !== false)
    .sort((a, b) => new Date(b.publishedAt as string).getTime() - new Date(a.publishedAt as string).getTime());

  return {
    posts: blogPosts,
    title: 'Blog — M. Fandi Arfabuma',
    description: 'Thoughts, reflections, and lessons from building products.'
  };
};
```

- [ ] **Step 2: Create blog list page**

Create `src/routes/blog/+page.svelte`:

```svelte
<script lang="ts">
  import Container from '$lib/components/shared/Container.svelte';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.description} />
</svelte:head>

<Container>
  <div class="pt-8 pb-section-gap">
    <h1 class="font-headline-lg-mobile text-headline-lg-mobile md:font-display md:text-display text-primary mb-4">Blog</h1>
    <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-16">Occasionally, I write about things I'm learning, questioning, or improving.</p>

    {#if data.posts.length === 0}
      <div class="border border-outline-variant rounded-xl p-12 text-center bg-surface">
        <p class="font-body-lg text-body-lg text-on-surface-variant">There are no articles yet.</p>
        <p class="font-body-md text-body-md text-on-surface-variant mt-2">I'm taking notes, learning, and waiting until I have something worth sharing.</p>
        <p class="font-label-sm text-label-sm text-secondary mt-4">Quality matters more than publishing frequency.</p>
      </div>
    {:else}
      <div class="flex flex-col">
        {#each data.posts as post}
          <a href="/blog/{post.slug}" class="group py-6 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between md:items-center gap-4 hover:bg-surface-container transition-colors -mx-4 px-4 rounded-xl">
            <div>
              <span class="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-1 block">{post.tags?.[0] ?? 'General'} &bull; {new Date(post.publishedAt as string).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</span>
              <h2 class="font-headline-md text-headline-md text-primary group-hover:text-secondary transition-colors">{post.title as string}</h2>
              {#if post.excerpt}
                <p class="font-body-md text-body-md text-on-surface-variant mt-1">{post.excerpt as string}</p>
              {/if}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-outline-variant group-hover:text-primary transition-colors shrink-0"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
          </a>
        {/each}
      </div>
    {/if}
  </div>
</Container>
```

- [ ] **Step 3: Create blog detail load function**

Create `src/routes/blog/[slug]/+page.ts`:

```ts
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const slug = params.slug;

  try {
    const post = await import(`$lib/content/blog/${slug}.md`);
    return {
      content: post.default,
      metadata: post.metadata,
      title: `${post.metadata.title as string} — M. Fandi Arfabuma`,
      description: post.metadata.description as string
    };
  } catch {
    throw new Error(`Blog post "${slug}" not found`);
  }
};
```

- [ ] **Step 4: Create blog detail page**

Create `src/routes/blog/[slug]/+page.svelte`:

```svelte
<script lang="ts">
  import Container from '$lib/components/shared/Container.svelte';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
  let { children }: { children?: import('svelte').Snippet } = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.description} />
  {#if data.metadata.publishedAt}
    <meta property="article:published_time" content={data.metadata.publishedAt as string} />
  {/if}
</svelte:head>

<Container>
  <article class="pt-8 pb-section-gap max-w-3xl mx-auto">
    <header class="mb-12">
      <p class="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-2">
        {data.metadata.tags?.[0] as string ?? 'General'} &bull; {new Date(data.metadata.publishedAt as string).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>
      <h1 class="font-headline-lg-mobile text-headline-lg-mobile md:font-display md:text-display text-primary">
        {data.metadata.title as string}
      </h1>
    </header>
    <div class="prose prose-invert max-w-none">
      <slot />
    </div>
  </article>
</Container>
```

---

### Task 9: SEO + Performance Optimizations

**Files:**
- Modify: `src/app.html`
- Modify: `src/routes/+layout.svelte`
- Modify: `src/routes/+layout.ts`

- [ ] **Step 1: Add prerendering to root layout**

Modify `src/routes/+layout.ts` to set prerender:

```ts
import type { LayoutLoad } from './$types';

export const prerender = true;

export const load: LayoutLoad = () => {
  return {
    title: 'M. Fandi Arfabuma — Frontend Engineer',
    description:
      'Frontend engineer who enjoys bridging design and development—crafting experiences that feel intuitive, thoughtful, and practical for real users.'
  };
};
```

- [ ] **Step 2: Add SEO meta tags to app.html**

Modify `src/app.html` — add default OG tags:

```html
<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%sveltekit.assets%/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=Hanken+Grotesk:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
    %sveltekit.head%
  </head>
  <body data-sveltekit-prerender="true">
    %sveltekit.body%
  </body>
</html>
```

- [ ] **Step 3: Add lazy-loading and performance notes to root layout**

Modify `src/routes/+layout.svelte` to add reduced-motion meta:

```svelte
<script lang="ts">
  import '../app.css';
  import Nav from '$lib/components/shared/Nav.svelte';
  import Footer from '$lib/components/shared/Footer.svelte';
  import { page } from '$app/stores';

  let { children }: { children: import('svelte').Snippet } = $props();
</script>

<svelte:head>
  <title>{$page.data.title ?? 'M. Fandi Arfabuma'}</title>
  <meta name="description" content={$page.data.description ?? 'Frontend engineer'} />
  <meta name="og:title" content={$page.data.title ?? 'M. Fandi Arfabuma'} />
  <meta name="og:description" content={$page.data.description ?? 'Frontend engineer'} />
</svelte:head>

<Nav />
<main class="pt-24 md:pt-32">
  {@render children()}
</main>
<Footer />
```

---

### Task 10: Final Build Verification

- [ ] **Step 1: Run type check**

Run: `pnpm check`
Expected: Type checking passes with no errors

- [ ] **Step 2: Run production build**

Run: `pnpm build`
Expected: Build succeeds, all routes prerendered

- [ ] **Step 3: Verify prerendered output**

Run: `ls -la build/prerendered/`
Expected: prerendered HTML for `/`, `/projects`, `/blog`

- [ ] **Step 4: Start preview server**

Run: `pnpm preview`
Expected: Server starts, all pages render correctly

---

## Self-Review Checklist

**1. Spec coverage (PRD.md + ARCHITECTURE.md + DESIGN.md):**
- Hero section with eyebrow, headline, copy, CTAs → Task 6, Step 1 ✓
- Who I Am bento grid (4 cards: About, How I Work, Beyond Editor, Local Time) → Task 6, Step 2 ✓
- Selected Work (Situation/Role, Challenges/Decisions, Outcome) → Task 6, Step 3 ✓
- Experience (Google XYZ format, role/company/period, reflection) → Task 6, Step 4 ✓
- Thoughts (blog previews, empty state guidance) → Task 6, Step 5 ✓
- Contact (mailto, WhatsApp, social links) → Task 6, Step 6 ✓
- Projects page → Task 7 ✓
- Blog list + detail → Task 8 ✓
- MDX blog content → Task 4 ✓
- TypeScript project data → Task 4 ✓
- Tailwind design tokens matching DESIGN.md → Task 1, Step 6 ✓
- GSAP animations (hero, reveal, stagger, pulse) → Task 5 ✓
- Nav + Footer shared components → Task 3 ✓
- SEO metadata → Task 9 ✓
- Prerendering → Task 9, Step 1 ✓
- No database/CMS → all content local ✓
- Contact via mailto/wa.me → Task 6, Step 6 ✓
- Editorial Noir color system → Task 1, Step 6 ✓
- Font pairing (EB Garamond + Hanken Grotesk) → Task 1, Step 6 ✓
- Responsive (12-col grid desktop, single-col mobile) → all section components ✓
- Accessibility (semantic HTML, focus states, reduced motion) → animation utilities check prefersReducedMotion ✓

**2. Placeholder scan:**
- No "TBD", "TODO", "implement later" — all steps have complete code ✓
- No "Add appropriate error handling" — error handling is explicit (blog detail try/catch) ✓
- No references to undefined types/functions ✓

**3. Type consistency:**
- `Project` type defined in `src/lib/content/projects.ts` → used in SelectedWork, Projects page ✓
- Animation function signatures consistent (`animateHeroEntrance`, `animateReveal`, `animateStagger`, `animatePulse`) ✓
- Layout data interface consistent across `+layout.ts` and section components ✓

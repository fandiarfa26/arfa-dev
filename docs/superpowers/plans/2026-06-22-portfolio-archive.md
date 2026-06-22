# Portfolio Archive Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create an `/archive` page that lists previous portfolio versions as external links, with a footer entry pointing to it.

**Architecture:** Static data file with typed archive entries, dedicated route with load function, inline card rendering (no separate card component — fewest files), footer addition. Follows existing patterns from projects page (load function, Container, Tag components).

**Tech Stack:** SvelteKit 5 (runes), TypeScript, Tailwind CSS, lucide-svelte

---

## File Structure

| File | Status | Responsibility |
|---|---|---|
| `src/lib/data/archive.ts` | **Create** | `ArchiveItem` type + `archives` array with version metadata |
| `src/routes/archive/+page.ts` | **Create** | Load function returning archives + SEO metadata |
| `src/routes/archive/+page.svelte` | **Create** | Archive page with header, subtitle, responsive card grid |
| `src/lib/components/shared/Footer.svelte` | **Modify** | Add "Portfolio Archive →" link |

---

### Task 1: Create archive data file

**Files:**
- Create: `src/lib/data/archive.ts`

- [ ] **Step 1: Create `src/lib/data/archive.ts`**

```typescript
export type ArchiveItem = {
  version: string;
  year: number;
  title: string;
  description: string;
  tech: string[];
  status: string;
  url: string;
};

export const archives: ArchiveItem[] = [
  {
    version: "V1",
    year: 2021,
    title: "First Portfolio",
    description:
      "Built during college while learning web development. My first attempt at creating a personal portfolio to showcase projects and experiments.",
    tech: ["HTML", "CSS", "Bootstrap"],
    status: "Student",
    url: "https://fandiarfa26.github.io/portfolio-v1",
  },
  {
    version: "V2",
    year: 2023,
    title: "Mid-Career Refresh",
    description:
      "Rebuilt from scratch with modern tooling and a cleaner, more intentional design to reflect growing frontend experience.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    status: "Early Career",
    url: "https://fandiarfa26.github.io",
  },
  {
    version: "V3",
    year: 2025,
    title: "Previous Portfolio",
    description:
      "The immediate predecessor to the current site. Refined visual language with an emphasis on typography and minimalism.",
    tech: ["SvelteKit", "TypeScript", "Tailwind CSS", "mdsvex"],
    status: "Previous Version",
    url: "https://v3.arfa.dev",
  },
];
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/data/archive.ts
git commit -m "feat: add archive data file with typed entries"
```

---

### Task 2: Create archive page load function

**Files:**
- Create: `src/routes/archive/+page.ts`

- [ ] **Step 1: Create `src/routes/archive/+page.ts`**

```typescript
import { archives } from '$lib/data/archive';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
  return {
    archives,
    title: 'Portfolio Archive — M. Fandi Arfabuma',
    description:
      'Explore previous versions of my portfolio and see how my skills evolved over the years.',
  };
};
```

- [ ] **Step 2: Commit**

```bash
git add src/routes/archive/+page.ts
git commit -m "feat: add archive route load function with SEO metadata"
```

---

### Task 3: Create archive page

**Files:**
- Create: `src/routes/archive/+page.svelte`

- [ ] **Step 1: Create `src/routes/archive/+page.svelte`**

```svelte
<script lang="ts">
  import Container from '$lib/components/shared/Container.svelte';
  import Tag from '$lib/components/shared/Tag.svelte';
  import ArrowUpRight from 'lucide-svelte/icons/arrow-up-right';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.description} />
  <meta property="og:image" content="/images/profile.webp" />
</svelte:head>

<Container>
  <div class="pt-8 pb-section-gap">
    <h1
      class="font-headline-lg-mobile text-headline-lg-mobile sm:font-headline-lg sm:text-headline-lg md:font-display md:text-display text-primary mb-4"
    >
      Portfolio Archive
    </h1>
    <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-16">
      Explore previous versions of my portfolio and see how my skills, design
      preferences, and technologies evolved over the years.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each data.archives as item}
        <article
          class="border border-outline-variant rounded-xl p-6 bg-surface flex flex-col gap-4"
        >
          <div class="flex items-start justify-between gap-3">
            <span
              class="inline-flex items-center rounded-full bg-surface-container border border-outline-variant px-3 py-0.5 font-label-sm text-xs text-on-surface-variant"
            >
              {item.year}
            </span>
            <span
              class="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider"
            >
              {item.version}
            </span>
          </div>

          <div>
            <h2 class="font-headline-sm text-headline-sm text-primary mb-2">
              {item.title}
            </h2>
            <p class="font-body-md text-body-md text-on-surface-variant">
              {item.description}
            </p>
          </div>

          <div class="flex flex-wrap gap-2">
            {#each item.tech as tech}
              <Tag>{tech}</Tag>
            {/each}
          </div>

          <p class="font-body-sm text-body-sm text-secondary mt-auto">
            Status: {item.status}
          </p>

          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="{item.title} — opens in new tab"
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 active:scale-[0.97] h-11 px-6 shadow-sm border border-outline-variant bg-transparent hover:bg-surface-container hover:text-primary w-full"
          >
            Visit Website
            <ArrowUpRight class="w-4 h-4" />
          </a>
        </article>
      {/each}
    </div>
  </div>
</Container>
```

- [ ] **Step 2: Commit**

```bash
git add src/routes/archive/+page.svelte
git commit -m "feat: add archive page with responsive card grid"
```

---

### Task 4: Add archive link to footer

**Files:**
- Modify: `src/lib/components/shared/Footer.svelte:19-21`

- [ ] **Step 1: Add archive link between the copyright line and the social links row**

Target lines 8-18 (the main row), add the archive link within the bottom copyright area. Insert a new row before the copyright line:

Edit `src/lib/components/shared/Footer.svelte`:

```diff
     <div class="text-center mt-6 font-label-sm text-label-sm text-on-surface-variant">
+      <a
+        href="/archive"
+        class="inline-block py-3 min-h-[44px] text-on-surface-variant hover:text-secondary transition-colors"
+      >
+        Portfolio Archive &rarr;
+      </a>
+    </div>
+    <div class="text-center mt-2 font-label-sm text-label-sm text-on-surface-variant">
       &copy; {year} M. Fandi Arfabuma
     </div>
```

The resulting `Footer.svelte` will be:

```svelte
<script lang="ts">
  import Container from './Container.svelte';
  const year = new Date().getFullYear();
</script>

<footer class="w-full py-12 bg-surface border-t border-outline-variant/30">
  <Container>
    <div class="flex flex-col sm:flex-row justify-between items-center gap-6">
      <div class="font-headline-md text-headline-md text-primary">MFA</div>
      <div class="font-body-md text-body-md text-on-surface-variant text-center md:text-left">
        Built with curiosity, collaboration, and plenty of iteration.
      </div>
      <div class="flex gap-6">
        <a href="https://www.linkedin.com/in/arfabuma/" target="_blank" rel="noopener noreferrer" aria-label="Fandi's LinkedIn profile" class="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors inline-block py-3 min-h-[44px]">LinkedIn</a>
        <a href="https://github.com/fandiarfa26" target="_blank" rel="noopener noreferrer" aria-label="Fandi's GitHub profile" class="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors inline-block py-3 min-h-[44px]">GitHub</a>
        <a href="https://www.tiktok.com/@arfa_dev" target="_blank" rel="noopener noreferrer" aria-label="Fandi's TikTok profile" class="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors inline-block py-3 min-h-[44px]">TikTok</a>
      </div>
    </div>
    <div class="text-center mt-6 font-label-sm text-label-sm text-on-surface-variant">
      <a
        href="/archive"
        class="inline-block py-3 min-h-[44px] text-on-surface-variant hover:text-secondary transition-colors"
      >
        Portfolio Archive &rarr;
      </a>
    </div>
    <div class="text-center mt-2 font-label-sm text-label-sm text-on-surface-variant">
      &copy; {year} M. Fandi Arfabuma
    </div>
  </Container>
</footer>
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/components/shared/Footer.svelte
git commit -m "feat: add Portfolio Archive link to footer"
```

---

### Task 5: Run type check

- [ ] **Step 1: Check types and build**

```bash
pnpm check
```

Expected: No type errors.

- [ ] **Step 2: Verify dev server renders the page**

```bash
pnpm dev
```

Open `http://localhost:5173/archive`. Expected:
- Page shows "Portfolio Archive" heading with subtitle
- Cards rendered in grid (1 col mobile, 2 col tablet, 3 col desktop)
- Each card has year badge, version label, title, description, tech tags, status, visit button
- Visit button opens URL in new tab with `rel="noopener noreferrer"`
- Footer shows "Portfolio Archive →" link
- Footer link navigates to `/archive`

- [ ] **Step 3: Commit final verification**

```bash
git add -A
git commit -m "chore: verify type check passes for archive feature"
```

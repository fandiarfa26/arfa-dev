# ATS-Friendly CV Generator Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a `/resume` route that renders portfolio data into an ATS-parsable, single-column HTML layout with `window.print()` PDF generation.

**Architecture:** Add `atsHighlights` fields to existing data types for ATS-optimized content, create a new `resume.ts` aggregator for static CV data, and build a dedicated route with a bare layout (no Nav/Footer/animations) containing strict semantic HTML and print CSS.

**Tech Stack:** SvelteKit 5 (runes), TypeScript, Tailwind CSS, `window.print()`

---

## File Structure

| File | Status | Responsibility |
|---|---|---|
| `src/lib/content/experiences.ts` | **Modify** | Tambah `atsHighlights?: string[]` ke interface + data |
| `src/lib/content/projects.ts` | **Modify** | Tambah `atsHighlights?: string[]` ke interface + data |
| `src/lib/data/resume.ts` | **Create** | Agregator: personalInfo, summary, skills, education, languages + re-export experiences & projects |
| `src/routes/resume/+layout.svelte` | **Create** | Layout bare-minimum tanpa Nav/Footer/Aurora, `@page A4`, `@media print` styles |
| `src/routes/resume/+page.svelte` | **Create** | Semantic HTML CV, `onMount` auto-print, fallback print button |
| `src/lib/components/sections/Hero.svelte` | **Modify** | Tambah tombol "Download ATS CV" |

---

### Task 1: Add `atsHighlights` to `experiences.ts`

**Files:**
- Modify: `src/lib/content/experiences.ts:1-7`

- [ ] **Step 1: Add `atsHighlights` field to `Experience` type**

```typescript
export type Experience = {
  role: string;
  period: string;
  company: string;
  highlights: string[];
  atsHighlights?: string[];
  reflection: string;
};
```

- [ ] **Step 2: Add `atsHighlights` data to each experience**

**Brighton Real Estate:**
```typescript
    atsHighlights: [
      'Migrated legacy PHP platform to Next.js, improving maintainability and scalability',
      'Built key user-facing pages (Articles, FAQ, Testimonials) with responsive design',
      'Implemented authentication features (login, registration, password reset)',
      'Developed a separate Agent Dashboard application using Next.js',
      'Improved development efficiency and code quality using AI-assisted tools (Claude Code)'
    ],
```
Letakkan setelah `highlights` array, sebelum `reflection`.

**PT. Ada Ide Langsung Jalan:**
```typescript
    atsHighlights: [
      'Built and delivered multiple web and mobile applications using React and Flutter',
      'Collaborated within a large cross-functional team (design, backend, product)',
      'Contributed to internal SOP improvements to enhance development workflow efficiency'
    ],
```

**PT. Inovasi Utama Nusantara:**
```typescript
    atsHighlights: [
      'Developed and maintained web and mobile applications across e-commerce, education, and food-ordering domains',
      'Built responsive and user-friendly interfaces using React, Vue, and Flutter',
      'Worked closely with UI/UX designers and backend engineers to deliver end-to-end features'
    ],
```

**PUIPT DLI UM:**
```typescript
    atsHighlights: [
      'Assisted in developing company profile and conference websites',
      'Provided technical support for institutional events',
      'Represented the organization at a technology exhibition in Bali'
    ],
```

**CV. Girisa Teknologi:**
```typescript
    atsHighlights: [
      'Built a hotel data management feature using Bootstrap and jQuery',
      'Implemented CRUD functionality and handled basic debugging tasks',
      'Collaborated with team members to deliver project requirements',
      'Gained hands-on experience in web development fundamentals'
    ],
```

- [ ] **Step 3: Run type check**

Run: `fish -c "nvm use latest && pnpm run check"`
Expected: No type errors

- [ ] **Step 4: Commit**

```bash
git add src/lib/content/experiences.ts
git commit -m "feat: add atsHighlights to experiences data"
```

---

### Task 2: Add `atsHighlights` to `projects.ts`

**Files:**
- Modify: `src/lib/content/projects.ts:1-16`

- [ ] **Step 1: Add `atsHighlights` field to `Project` type**

```typescript
export type Project = {
  title: string;
  description: string;
  year: string;
  role: string;
  tags: string[];
  image?: string;
  situation: string;
  challenge: string;
  decision: string;
  outcome: string;
  atsHighlights?: string[];
  links?: {
    demo?: string;
    github?: string;
  };
};
```

- [ ] **Step 2: Add `atsHighlights` data to each project**

**Brighton Website Migration:**
```typescript
    atsHighlights: [
      'Migrated legacy system to modern web architecture',
      'Built authentication system and dashboard for internal users'
    ],
```

**ArfaPOS:**
```typescript
    atsHighlights: [
      'Developed a full-stack point-of-sale application using SvelteKit and Supabase',
      'Designed and implemented POS transaction flows for real-world use'
    ],
```

**FoodieMu App:**
```typescript
    atsHighlights: [
      'Built a multi-role food delivery platform using Flutter and Firebase',
      'Supported Android and iOS delivery from a single codebase'
    ],
```

**Hi Nano:**
```typescript
    atsHighlights: [
      'Developed a learning platform with Flutter mobile app and React admin dashboard',
      'Implemented synchronized data flow between mobile app and admin dashboard'
    ],
```

- [ ] **Step 3: Run type check**

Run: `fish -c "nvm use latest && pnpm run check"`
Expected: No type errors

- [ ] **Step 4: Commit**

```bash
git add src/lib/content/projects.ts
git commit -m "feat: add atsHighlights to projects data"
```

---

### Task 3: Create `src/lib/data/resume.ts`

**Files:**
- Create: `src/lib/data/resume.ts`

- [ ] **Step 1: Create the resume aggregator file**

```typescript
import { experiences } from '$lib/content/experiences';
import { projects } from '$lib/content/projects';

export const personalInfo = {
  name: 'M. Fandi Arfabuma',
  location: 'Bangkalan, East Java, Indonesia',
  email: 'arfabuma.987@gmail.com',
  linkedin: 'https://www.linkedin.com/in/arfabuma/',
  website: 'https://www.arfabuma.web.id'
};

export const summary =
  "I'm a Frontend Software Engineer with 5+ years of experience building web and mobile applications using Next.js, React, Svelte, and Flutter. I've worked across multiple industries, delivering scalable and user-focused solutions while collaborating closely with design and backend teams. I hold a Bachelor's degree in Informatics Engineering from Universitas Negeri Malang (GPA: 3.71) and have a strong interest in continuous learning and emerging technologies.";

export const skills = [
  { category: 'Programming', items: ['JavaScript', 'TypeScript', 'Dart', 'Python'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Svelte', 'Flutter'] },
  { category: 'Styling', items: ['Tailwind CSS', 'Bootstrap'] },
  { category: 'Tools & Platforms', items: ['Git', 'Firebase', 'Vercel', 'Figma', 'Claude Code', 'ChatGPT'] }
];

export const education = [
  { degree: 'Bachelor of Engineering - Informatics Engineering', university: 'Universitas Negeri Malang', period: '2016 – 2021', gpa: '3.71' },
  { degree: 'Computer Software Engineering', university: 'SMK Negeri 5 Malang', period: '2013 – 2016' }
];

export const languages = ['Indonesian', 'English'];

export { experiences, projects };
```

- [ ] **Step 2: Run type check**

Run: `fish -c "nvm use latest && pnpm run check"`
Expected: No type errors

- [ ] **Step 3: Commit**

```bash
git add src/lib/data/resume.ts
git commit -m "feat: create resume data aggregator"
```

---

### Task 4: Create `src/routes/resume/+layout.svelte`

**Files:**
- Create: `src/routes/resume/+layout.svelte`

- [ ] **Step 1: Create bare layout with print styles**

```svelte
<script lang="ts">
  import '../../app.css';

  let { children }: { children: import('svelte').Snippet } = $props();
</script>

<svelte:head>
  <title>M. Fandi Arfabuma — Resume</title>
</svelte:head>

{@render children()}

<style>
  @page { size: A4; margin: 20mm; }

  @media print {
    body {
      background: white !important;
      color: black !important;
      font-family: 'Times New Roman', Times, serif;
      font-size: 11pt;
      line-height: 1.4;
    }

    .no-print { display: none !important; }

    .resume-item {
      break-inside: avoid;
      page-break-inside: avoid;
    }
  }
</style>
```

- [ ] **Step 2: Run type check**

Run: `fish -c "nvm use latest && pnpm run check"`
Expected: No type errors

- [ ] **Step 3: Commit**

```bash
git add src/routes/resume/+layout.svelte
git commit -m "feat: add resume route layout with print styles"
```

---

### Task 5: Create `src/routes/resume/+page.svelte`

**Files:**
- Create: `src/routes/resume/+page.svelte`

- [ ] **Step 1: Create the CV page with semantic HTML + auto-print**

```svelte
<script lang="ts">
  import { onMount } from 'svelte';
  import { personalInfo, summary, skills, education, languages, experiences, projects } from '$lib/data/resume';

  let printing = $state(false);

  function triggerPrint() {
    printing = true;
    setTimeout(() => window.print(), 300);
  }

  onMount(() => {
    triggerPrint();
  });
</script>

<div class="resume">
  <div class="no-print toolbar">
    <button onclick={triggerPrint} class="print-btn">
      Print / Save as PDF
    </button>
    <a href="/" class="back-btn">Back to Home</a>
  </div>

  <header>
    <h1>{personalInfo.name}</h1>
    <p class="contact">
      {personalInfo.location}
      <span class="sep">|</span>
      {personalInfo.email}
      <span class="sep">|</span>
      <a href={personalInfo.linkedin}>linkedin.com/in/arfabuma</a>
      <span class="sep">|</span>
      <a href={personalInfo.website}>arfabuma.web.id</a>
    </p>
  </header>

  <section>
    <h2>SUMMARY</h2>
    <p class="summary">{summary}</p>
  </section>

  <section>
    <h2>SKILLS</h2>
    {#each skills as skill}
      <p class="skill-line">
        <strong>{skill.category}:</strong> {skill.items.join(', ')}
      </p>
    {/each}
  </section>

  <section>
    <h2>EXPERIENCE</h2>
    {#each experiences as exp}
      <div class="resume-item">
        <div class="item-header">
          <h3>{exp.role}</h3>
          <p class="company">{exp.company}</p>
          <p class="period">{exp.period}</p>
        </div>
        <ul>
          {#each exp.atsHighlights ?? exp.highlights as highlight}
            <li>{highlight}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </section>

  <section>
    <h2>PROJECTS</h2>
    {#each projects as project}
      <div class="resume-item">
        <div class="item-header">
          <h3>{project.title}</h3>
          <p class="period">{project.year}</p>
        </div>
        {#if project.tags.length}
          <p class="tags"><strong>Tech:</strong> {project.tags.join(', ')}</p>
        {/if}
        {#if project.atsHighlights}
          <ul>
            {#each project.atsHighlights as highlight}
              <li>{highlight}</li>
            {/each}
          </ul>
        {/if}
      </div>
    {/each}
  </section>

  <section>
    <h2>EDUCATION</h2>
    {#each education as edu}
      <div class="resume-item">
        <h3>{edu.university}</h3>
        <p>{edu.degree} <span class="sep">|</span> {edu.period}{#if edu.gpa} <span class="sep">|</span> GPA: {edu.gpa}{/if}</p>
      </div>
    {/each}
  </section>

  <section>
    <h2>LANGUAGES</h2>
    <p>{languages.join(', ')}</p>
  </section>
</div>

<style>
  .resume {
    max-width: 190mm;
    margin: 0 auto;
    padding: 0;
  }

  .toolbar {
    margin-bottom: 20px;
    display: flex;
    gap: 12px;
  }

  .print-btn, .back-btn {
    padding: 8px 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #fff;
    cursor: pointer;
    font-size: 14px;
    text-decoration: none;
    color: #333;
  }

  .print-btn:hover, .back-btn:hover {
    background: #f0f0f0;
  }

  h1 {
    font-size: 18pt;
    margin: 0 0 4px 0;
    color: #000;
  }

  h2 {
    font-size: 12pt;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-bottom: 1px solid #000;
    padding-bottom: 2px;
    margin: 16px 0 8px 0;
    color: #000;
  }

  h3 {
    font-size: 11pt;
    margin: 0 0 2px 0;
    color: #000;
  }

  .contact {
    font-size: 10pt;
    margin: 0 0 8px 0;
    color: #333;
  }

  .sep {
    margin: 0 6px;
    color: #999;
  }

  .summary {
    font-size: 10.5pt;
    line-height: 1.45;
    margin: 0;
    text-align: justify;
  }

  .skill-line {
    font-size: 10.5pt;
    margin: 2px 0;
    line-height: 1.4;
  }

  .item-header {
    margin-bottom: 4px;
  }

  .company {
    font-size: 10.5pt;
    font-style: italic;
    margin: 0;
  }

  .period {
    font-size: 10pt;
    color: #444;
    margin: 0;
  }

  ul {
    margin: 4px 0 8px 0;
    padding-left: 18px;
  }

  li {
    font-size: 10.5pt;
    line-height: 1.4;
    margin-bottom: 2px;
  }

  .tags {
    font-size: 10pt;
    margin: 2px 0;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  section {
    margin-bottom: 4px;
  }

  @media print {
    .resume {
      max-width: none;
      padding: 0;
    }

    a {
      color: #000 !important;
      text-decoration: none !important;
    }
  }
</style>
```

- [ ] **Step 2: Run type check**

Run: `fish -c "nvm use latest && pnpm run check"`
Expected: No type errors

- [ ] **Step 3: Commit**

```bash
git add src/routes/resume/+page.svelte
git commit -m "feat: add resume page with semantic HTML and auto-print"
```

---

### Task 6: Add "Download ATS CV" button to Hero

**Files:**
- Modify: `src/lib/components/sections/Hero.svelte:28-31`

- [ ] **Step 1: Add button after "Let's Talk"**

Edit block to:
```svelte
      <div class="flex flex-wrap items-center gap-4" data-hero-item>
        <Button href="#work">View Selected Work</Button>
        <Button variant="secondary" href="#contact">Let's Talk</Button>
        <Button href="/resume">Download ATS CV</Button>
      </div>
```

- [ ] **Step 2: Run type check**

Run: `fish -c "nvm use latest && pnpm run check"`
Expected: No type errors

- [ ] **Step 3: Commit**

```bash
git add src/lib/components/sections/Hero.svelte
git commit -m "feat: add Download ATS CV button to hero"
```

---

### Task 7: Final verification

- [ ] **Step 1: Full type check**

Run: `fish -c "nvm use latest && pnpm run check"`
Expected: No type errors

- [ ] **Step 2: Build**

Run: `fish -c "nvm use latest && pnpm run build"`
Expected: Build sukses

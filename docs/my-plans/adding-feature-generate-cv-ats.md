# Context & Objective
Your task is to implement an "ATS-Friendly CV Generator" feature for my portfolio website. The website already has structured data for experiences (`experiences.ts`) and projects (`projects.ts`).

The goal is to create a specific page/route that renders this data into a strict, machine-readable, single-column HTML layout, and uses the browser's native `window.print()` functionality to generate an ATS-parsable PDF.

## 1. Data Structure Updates
- **Projects Data (`projects.ts`)**: Add a new optional field `ats_highlights?: string[]` to the project object interface. This will be used specifically for the CV to replace the narrative fields (`situation`, `challenge`, `decision`, `outcome`) with punchy, ATS-friendly bullet points.
- **Master CV Data (`src/lib/data/resume.ts` or similar)**: Create a new file that aggregates the data. 
  - Import `experiences` and `projects`.
  - Add missing static data: `personalInfo` (Name, Location, Email, LinkedIn, Website URL), `summary` (1 paragraph), `skills` (categorized array), and `education` (Degree, University, Year).

## 2. Route Creation
- Create a new SvelteKit route: `src/routes/resume/+page.svelte` (or `/cv-ats`).
- This page must NOT inherit the global layout if the global layout contains a Navbar, Footer, or complex web animations. You might need to use `src/routes/resume/+layout.svelte` to override the default layout and provide a barebones HTML structure.

## 3. Semantic HTML Structure (Strict Rules)
The HTML output on the `/resume` route must follow strict semantic rules for ATS parsers:
- **Single Column Layout**: Everything must flow top-to-bottom. Do not use CSS Grid/Flexbox to create side-by-side content (like putting dates on the far right and company names on the far left if it disrupts the DOM reading order).
- **Headings**: Use `<h1>` only for the Name. Use `<h2>` for section titles (SUMMARY, SKILLS, EXPERIENCE, PROJECTS, EDUCATION). Use `<h3>` for Job Titles / Project Names.
- **Lists**: Use standard `<ul>` and `<li>` for all experience highlights and project `ats_highlights`. Do not use custom SVG icons or emojis as bullet points.
- **Dates**: Ensure dates are rendered as simple text (e.g., "Oct 2025 - Jul 2026").
- **Skills**: Render skills as plain text separated by commas or simple bullet points. Do NOT use progress bars, pie charts, or tables.

## 4. Print Stylesheet Implementation
Implement `@media print` CSS inside the page/layout to ensure the generated PDF looks like a professional resume:
- Hide any non-CV elements (e.g., floating "Print" buttons, back to home links) using `display: none`.
- Set the page size to A4: `@page { size: A4; margin: 20mm; }`.
- Ensure colors are high contrast (black text on white background).
- Use a standard serif or sans-serif font (e.g., Arial, Helvetica, Times New Roman).
- Avoid page breaks inside experience blocks: `page-break-inside: avoid;` or `break-inside: avoid;` on the experience/project items.

## 5. Interaction
- On the main portfolio UI (e.g., in the hero section or about section), add a "Generate ATS CV" button.
- Clicking this button should navigate the user to the `/resume` route and automatically trigger `window.print()` once the component is mounted (using Svelte's `onMount`), or provide a clear "Print to PDF" button on the `/resume` page that triggers it.

## Execution
Please ask for clarification if any data from `experiences.ts` or `projects.ts` is missing, otherwise proceed step-by-step starting with the Data Structure Updates.

<script lang="ts">
  import { browser } from '$app/environment';
  import Container from '$lib/components/shared/Container.svelte';
  import Button from '$lib/components/shared/Button.svelte';
  import { personalInfo, summary, skills, education, languages, experiences, projects } from '$lib/data/resume';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

  let lang = $state<'en' | 'id'>('en');

  $effect(() => {
    if (browser) {
      const saved = localStorage.getItem('resume-lang');
      if (saved === 'id' || saved === 'en') lang = saved;
    }
  });

  $effect(() => {
    if (browser) {
      localStorage.setItem('resume-lang', lang);
    }
  });

  function triggerPrint() {
    setTimeout(() => window.print(), 300);
  }

</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.description} />
  <meta property="og:image" content="/images/profile.webp" />
</svelte:head>

<Container>
  <div class="pt-8 pb-section-gap">
    <h1 class="no-print font-headline-lg-mobile text-headline-lg-mobile sm:font-headline-lg sm:text-headline-lg md:font-display md:text-display text-primary mb-4">Resume</h1>
    <p class="no-print font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8">
      A concise overview of my experience, skills, and projects — formatted for ATS parsing.
    </p>

    <div class="no-print flex flex-wrap gap-4 mb-10">
      <Button onclick={triggerPrint}>Download CV</Button>
      <div class="lang-toggle">
        <button class="lang-btn" class:active={lang === 'en'} onclick={() => lang = 'en'}>EN</button>
        <button class="lang-btn" class:active={lang === 'id'} onclick={() => lang = 'id'}>ID</button>
      </div>
    </div>

    <div class="card">
      <div class="resume">
        <header>
          <h1 class="cv-name">{personalInfo.name}</h1>
          <p class="cv-contact">{personalInfo.location[lang]}</p>
          <p class="cv-contact">
            {personalInfo.email}
            <span class="sep">|</span>
            <a href={personalInfo.linkedin}>linkedin.com/in/arfabuma</a>
            <span class="sep">|</span>
            <a href={personalInfo.website}>arfabuma.web.id</a>
          </p>
        </header>

        <section>
          <h2>{lang === 'id' ? 'RINGKASAN' : 'SUMMARY'}</h2>
          <p class="summary">{summary[lang]}</p>
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
          <h2>{lang === 'id' ? 'PENGALAMAN' : 'EXPERIENCE'}</h2>
          {#each experiences as exp}
            <div class="resume-item">
              <div class="item-header">
                <h3>{exp.role}</h3>
                <p class="company">{exp.company}</p>
                <p class="period">{exp.period}</p>
              </div>
              <ul>
                {#each (exp.atsHighlights ?? exp.highlights)[lang] as highlight}
                  <li>{highlight}</li>
                {/each}
              </ul>
            </div>
          {/each}
        </section>

        <section>
          <h2>{lang === 'id' ? 'PROYEK' : 'PROJECTS'}</h2>
          {#each projects as project}
            <div class="resume-item">
              <div class="item-header">
                <h3>{project.title}</h3>
                <p class="period">{project.year}</p>
              </div>
              {#if project.tags.length}
                <p class="tags">{project.tags.join(', ')}</p>
              {/if}
              {#if project.atsHighlights}
                <ul>
                  {#each project.atsHighlights[lang] as highlight}
                    <li>{highlight}</li>
                  {/each}
                </ul>
              {/if}
            </div>
          {/each}
        </section>

        <section>
          <h2>{lang === 'id' ? 'PENDIDIKAN' : 'EDUCATION'}</h2>
          {#each education as edu}
            <div class="resume-item">
              <h3>{edu.university}</h3>
              <p>{edu.degree[lang]} <span class="sep">|</span> {edu.period}{#if edu.gpa} <span class="sep">|</span> GPA: {edu.gpa}{/if}</p>
            </div>
          {/each}
        </section>

        <section>
          <h2>{lang === 'id' ? 'BAHASA' : 'LANGUAGES'}</h2>
          <p>{languages[lang].join(', ')}</p>
        </section>
      </div>
    </div>
  </div>
</Container>

<style>
  .card {
    background: rgb(var(--color-background));
    border: 1px solid #10b981;
    border-radius: 12px;
    padding: 32px;
  }

  .resume {
    color: #fff;
    font-family: 'Hanken Grotesk', sans-serif;
  }

  .cv-name {
    font-size: 24pt;
    margin: 0 0 6px 0;
    font-family: 'EB Garamond', serif;
  }

  .resume h2, .resume h3 {
    font-family: 'EB Garamond', serif;
  }

  .cv-contact {
    font-size: 12pt;
    margin: 0 0 12px 0;
  }

  .sep {
    margin: 0 6px;
    opacity: 0.5;
  }

  h2 {
    font-size: 15pt;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-bottom: 1px solid #fff;
    padding-bottom: 3px;
    margin: 20px 0 10px 0;
  }

  h3 {
    font-size: 14pt;
    margin: 0 0 3px 0;
  }

  .summary {
    font-size: 13pt;
    line-height: 1.5;
    margin: 0;
    text-align: justify;
  }

  .skill-line {
    font-size: 12pt;
    margin: 3px 0;
    line-height: 1.5;
  }

  .resume-item {
    margin-bottom: 24px;
  }

  .item-header {
    margin-bottom: 6px;
  }

  .company {
    font-size: 13pt;
    font-style: italic;
    margin: 0;
  }

  .period {
    font-size: 12pt;
    opacity: 0.7;
    margin: 0;
  }

  ul {
    margin: 6px 0 12px 0;
    padding-left: 16px;
    list-style: none;
  }

  li {
    font-size: 12pt;
    line-height: 1.5;
    margin-bottom: 4px;
  }

  li::before {
    content: '-';
    margin-right: 8px;
  }

  .tags {
    font-size: 12pt;
    margin: 3px 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  section {
    margin-bottom: 4px;
  }

  .lang-toggle {
    display: flex;
    gap: 0;
    border: 1px solid #10b981;
    border-radius: 8px;
    overflow: hidden;
  }

  .lang-btn {
    padding: 8px 16px;
    background: transparent;
    color: #10b981;
    border: none;
    cursor: pointer;
    font-family: 'Hanken Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 500;
    transition: background 0.2s, color 0.2s;
  }

  .lang-btn:hover {
    background: rgba(16, 185, 129, 0.1);
  }

  .lang-btn.active {
    background: #10b981;
    color: #000;
  }

  @media print {
    .card {
      background: none;
      border: none;
      border-radius: 0;
      padding: 0;
    }

    .resume {
      color: #000;
      font-family: Arial, sans-serif;
    }

    .cv-name {
      font-family: Arial, sans-serif;
      font-size: 18pt;
      margin: 0 0 4px 0;
    }

    .cv-contact {
      font-family: Arial, sans-serif;
      font-size: 10pt;
      margin: 0 0 8px 0;
    }

    .resume h2, h2 {
      font-family: Arial, sans-serif;
      font-size: 12pt;
      border-bottom-color: #000;
      padding-bottom: 2px;
      margin: 16px 0 8px 0;
    }

    .resume h3, h3 {
      font-family: Arial, sans-serif;
      font-size: 11pt;
      margin: 0 0 2px 0;
    }

    .summary {
      font-family: Arial, sans-serif;
      font-size: 10.5pt;
      line-height: 1.45;
    }

    .skill-line {
      font-family: Arial, sans-serif;
      font-size: 10.5pt;
      margin: 2px 0;
      line-height: 1.4;
    }

    .company {
      font-family: Arial, sans-serif;
      font-size: 10.5pt;
    }

    .period {
      font-family: Arial, sans-serif;
      font-size: 10pt;
      opacity: 1;
      color: #000;
    }

    .resume-item {
      margin-bottom: 12px;
    }

    .item-header {
      margin-bottom: 4px;
    }

    ul {
      margin: 4px 0 8px 0;
      padding-left: 14px;
      list-style: none;
    }

    li {
      font-family: Arial, sans-serif;
      font-size: 10.5pt;
      line-height: 1.4;
      margin-bottom: 2px;
    }

    li::before {
      content: '-';
      margin-right: 6px;
    }

    .tags {
      font-family: Arial, sans-serif;
      font-size: 10pt;
    }

    .sep {
      font-family: Arial, sans-serif;
      opacity: 1;
      color: #000;
    }

    a {
      font-family: Arial, sans-serif;
      color: #000 !important;
      text-decoration: none !important;
    }

    .lang-toggle {
      display: none !important;
    }
  }
</style>

<script lang="ts">
  import Container from '$lib/components/shared/Container.svelte';
  import Button from '$lib/components/shared/Button.svelte';
  import { personalInfo, summary, skills, education, languages, experiences, projects } from '$lib/data/resume';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

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
    </div>

    <div class="card">
      <div class="resume">
        <header>
          <h1 class="cv-name">{personalInfo.name}</h1>
          <p class="cv-contact">{personalInfo.location}</p>
          <p class="cv-contact">
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
                <p class="tags">{project.tags.join(', ')}</p>
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
  }
</style>

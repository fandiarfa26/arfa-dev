<script lang="ts">
  import Button from '$lib/components/shared/Button.svelte';
  import { personalInfo, summary, skills, education, languages, experiences, projects } from '$lib/data/resume';

  function triggerPrint() {
    setTimeout(() => window.print(), 300);
  }
</script>

<div class="no-print toolbar">
  <Button onclick={triggerPrint}>Download CV</Button>
  <Button href="/" variant="secondary">Back to Home</Button>
</div>

<div class="card">
  <div class="resume">
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
</div>

<style>
  .toolbar {
    margin-bottom: 20px;
    display: flex;
    gap: 12px;
  }

  .card {
    background: rgb(var(--color-background));
    border: 1px solid rgb(51 51 51 / 0.3);
    border-radius: 12px;
    padding: 32px;
    max-width: 210mm;
    margin: 0 auto;
  }

  .resume {
    font-family: 'Times New Roman', Times, serif;
    color: #fff;
  }

  h1 {
    font-size: 18pt;
    margin: 0 0 4px 0;
  }

  h2 {
    font-size: 12pt;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-bottom: 1px solid #fff;
    padding-bottom: 2px;
    margin: 16px 0 8px 0;
  }

  h3 {
    font-size: 11pt;
    margin: 0 0 2px 0;
  }

  .contact {
    font-size: 10pt;
    margin: 0 0 8px 0;
  }

  .sep {
    margin: 0 6px;
    opacity: 0.5;
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
    opacity: 0.7;
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
      max-width: none;
    }

    .resume {
      color: #000;
    }

    h2 {
      border-bottom-color: #000;
    }

    .period {
      opacity: 1;
      color: #000;
    }

    .sep {
      opacity: 1;
      color: #000;
    }

    a {
      color: #000 !important;
      text-decoration: none !important;
    }
  }
</style>

<script lang="ts">
  import { personalInfo, summary, skills, education, languages, experiences, projects } from '$lib/data/resume';

  function triggerPrint() {
    setTimeout(() => window.print(), 300);
  }
</script>

<div class="resume">
  <div class="no-print toolbar">
    <button onclick={triggerPrint} class="print-btn">
      Download CV
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
    font-family: 'Times New Roman', Times, serif;
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
    color: #000;
  }

  .sep {
    margin: 0 6px;
    color: #000;
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
    color: #000;
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

    .no-print {
      display: none !important;
    }

    a {
      color: #000 !important;
      text-decoration: none !important;
    }
  }
</style>

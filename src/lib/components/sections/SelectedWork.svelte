<script lang="ts">
  import { ArrowRight } from 'lucide-svelte';
  import Tag from '$lib/components/shared/Tag.svelte';
  import { projects } from '$lib/content/projects';
  import { animateReveal } from '$lib/animations/reveal';
  import { onMount } from 'svelte';

  let articles: HTMLElement[] = [];

  $: recentProjects = projects.slice(0, 3);

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
        Projects that challenged how I think, collaborate, and build. More case studies coming as I document past work.
      </p>
    </div>
    <div class="flex flex-col gap-16">
      {#each recentProjects as project, i}
        <article class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter group" bind:this={articles[i]}>
          <div class="md:col-span-4 flex flex-col gap-4 items-start md:sticky md:top-32 self-start">
            <div>
              <h3 class="font-headline-md text-headline-md text-primary mb-1 group-hover:text-secondary transition-colors">{project.title}</h3>
              <p class="font-body-md text-body-md text-secondary">{project.role} &bull; {project.year}</p>
            </div>
            <div class="flex flex-wrap gap-2">
              {#each project.tags as tag}
                <Tag>{tag}</Tag>
              {/each}
            </div>
            {#if project.links?.demo}
              <a href={project.links.demo} class="inline-flex items-center gap-2 font-label-md text-label-md text-primary mt-2 hover:text-secondary transition-colors">
                View Live Demo
                <ArrowRight size={16} />
              </a>
            {/if}
          </div>
          <div class="md:col-span-8 flex flex-col gap-8">
            <div class="aspect-[16/9] w-full bg-surface-container-lowest border border-outline-variant shadow-sm rounded-xl overflow-hidden">
              {#if project.image}
                <img
                  src={project.image}
                  alt={project.title}
                   class="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 66vw"
                  onerror={(e) => ((e.currentTarget as HTMLImageElement).style.display = 'none')}
                />
              {:else}
                <div class="w-full h-full bg-surface-container-high rounded-lg flex items-center justify-center">
                  <div class="grid grid-cols-3 gap-4 w-3/4 opacity-30 mix-blend-lighten grayscale">
                    <div class="h-8 bg-outline-variant/40 rounded"></div>
                    <div class="h-8 bg-outline-variant/40 rounded col-span-2"></div>
                    <div class="h-24 bg-outline-variant/30 rounded col-span-3"></div>
                    <div class="h-8 bg-outline-variant/50 rounded-full w-1/2"></div>
                  </div>
                </div>
              {/if}
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
        {#if i < recentProjects.length - 1}
          <hr class="border-outline-variant/30 border-t" />
        {/if}
      {/each}
    </div>
    <div class="mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        href="/projects"
        class="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary hover:text-secondary transition-colors border border-outline-variant/50 rounded-full px-8 py-3 hover:border-secondary"
      >
        View All Projects
        <ArrowRight size={18} />
      </a>
      <a
        href="/archive"
        class="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary hover:text-secondary transition-colors border border-outline-variant/50 rounded-full px-8 py-3 hover:border-secondary"
      >
        Portfolio History
        <ArrowRight size={18} />
      </a>
    </div>
  </div>
</section>

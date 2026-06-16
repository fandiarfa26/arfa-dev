<script lang="ts">
  import Container from '$lib/components/shared/Container.svelte';
  import Tag from '$lib/components/shared/Tag.svelte';
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
    <h1 class="font-headline-lg-mobile text-headline-lg-mobile sm:font-headline-lg sm:text-headline-lg md:font-display md:text-display text-primary mb-4">Projects</h1>
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
                <Tag>{tag}</Tag>
              {/each}
            </div>
          </div>
          <div class="md:col-span-8 flex flex-col gap-6">
            {#if project.image}
              <div class="aspect-[16/9] w-full bg-surface-container-lowest border border-outline-variant shadow-sm rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                   class="w-full h-full object-cover transition-all duration-700"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 66vw"
                  onerror={(e) => ((e.currentTarget as HTMLImageElement).style.display = 'none')}
                />
              </div>
            {/if}
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

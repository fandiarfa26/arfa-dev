<script lang="ts">
  import Container from '$lib/components/shared/Container.svelte';
  import Tag from '$lib/components/shared/Tag.svelte';
  import { ArrowUpRight } from 'lucide-svelte';
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
      Portfolio History
    </h1>
    <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-4">
      Explore previous versions of my portfolio and see how my skills, design
      preferences, and technologies evolved over the years.
    </p>
    <p class="font-body-md text-body-md text-secondary mb-16">
      You're currently viewing <strong>V4</strong> — the latest iteration
      built with SvelteKit, TypeScript, and Tailwind CSS.
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

          {#if item.image}
            <div class="aspect-[16/9] w-full bg-surface-container-lowest border border-outline-variant shadow-sm rounded-xl overflow-hidden">
              <img
                src={item.image}
                alt="{item.title} screenshot"
                class="w-full h-full object-cover transition-all duration-700"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                onerror={(e) => ((e.currentTarget as HTMLImageElement).style.display = 'none')}
              />
            </div>
          {/if}

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

          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="{item.title} — opens in new tab"
            class="mt-auto inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 active:scale-[0.97] h-11 px-6 shadow-sm border border-outline-variant bg-transparent hover:bg-surface-container hover:text-primary w-full"
          >
            Visit Website
            <ArrowUpRight class="w-4 h-4" />
          </a>
        </article>
      {/each}
    </div>
  </div>
</Container>

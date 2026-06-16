<script lang="ts">
  import { ArrowLeft } from 'lucide-svelte';
  import Container from '$lib/components/shared/Container.svelte';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.description} />
  <meta property="og:image" content="/images/profile.webp" />
  {#if data.metadata.publishedAt}
    <meta property="article:published_time" content={String(data.metadata.publishedAt)} />
  {/if}
</svelte:head>

<Container>
  <div class="pt-8">
    <a href="/blog" class="inline-flex items-center gap-2 font-label-md text-label-md text-secondary hover:text-secondary/80 transition-colors mb-8">
      <ArrowLeft size={16} />
      Back to blog
    </a>
  </div>
  <article class="pb-section-gap max-w-3xl mx-auto">
    <header class="mb-12">
      <p class="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-2">
        {String(data.metadata.tags?.[0] ?? 'General')} &bull; {new Date(String(data.metadata.publishedAt)).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>
      <h1 class="font-headline-lg-mobile text-headline-lg-mobile sm:font-headline-lg sm:text-headline-lg md:font-display md:text-display text-primary">
        {String(data.metadata.title)}
      </h1>
    </header>
    <div class="prose prose-invert max-w-none">
      <data.content />
    </div>
  </article>
</Container>

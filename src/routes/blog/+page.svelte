<script lang="ts">
  import { ArrowUpRight } from 'lucide-svelte';
  import Container from '$lib/components/shared/Container.svelte';
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
    <h1 class="font-headline-lg-mobile text-headline-lg-mobile sm:font-headline-lg sm:text-headline-lg md:font-display md:text-display text-primary mb-4">Blog</h1>
    <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-16">Occasionally, I write about things I'm learning, questioning, or improving.</p>

    {#if data.posts.length === 0}
      <div class="border border-outline-variant rounded-xl p-12 text-center bg-surface">
        <p class="font-body-lg text-body-lg text-on-surface-variant">There are no articles yet.</p>
        <p class="font-body-md text-body-md text-on-surface-variant mt-2">I'm taking notes, learning, and waiting until I have something worth sharing.</p>
        <p class="font-label-sm text-label-sm text-secondary mt-4">Quality matters more than publishing frequency.</p>
      </div>
    {:else}
      <div class="flex flex-col">
        {#each data.posts as post}
          <a href="/blog/{post.slug}" class="group py-6 border-t border-outline-variant/30 flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:bg-surface-container transition-colors -mx-4 px-4 rounded-xl">
            <div>
              <span class="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-1 block">{String(post.tags?.[0] ?? 'General')} &bull; {new Date(String(post.publishedAt)).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</span>
              <h2 class="font-headline-md text-headline-md text-primary group-hover:text-secondary transition-colors">{String(post.title)}</h2>
              {#if post.excerpt}
                <p class="font-body-md text-body-md text-on-surface-variant mt-1">{String(post.excerpt)}</p>
              {/if}
            </div>
            <ArrowUpRight size={20} class="text-outline-variant group-hover:text-primary transition-colors shrink-0" />
          </a>
        {/each}
      </div>
    {/if}
  </div>
</Container>

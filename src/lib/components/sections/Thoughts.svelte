<script lang="ts">
  import { ArrowUpRight, ArrowRight } from 'lucide-svelte';
  import { animateReveal } from '$lib/animations/reveal';
  import { onMount } from 'svelte';

  let articles: HTMLAnchorElement[] = [];

  interface Thought {
    category: string;
    date: string;
    title: string;
    slug: string;
  }

  const posts = import.meta.glob('$lib/content/blog/*.md', { eager: true }) as Record<string, { metadata: Record<string, unknown> }>;

  const thoughts: Thought[] = Object.entries(posts)
    .filter(([, post]) => post.metadata?.published !== false)
    .map(([path, post]) => {
      const slug = path.split('/').pop()?.replace('.md', '') ?? '';
      const meta = post.metadata;
      return {
        category: ((meta.tags as string[])?.[0]) ?? 'General',
        date: new Date(meta.publishedAt as string).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }),
        title: meta.title as string,
        slug: `/blog/${slug}`
      } as Thought;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  onMount(() => {
    articles.forEach((el, i) => {
      if (el) animateReveal(el, i * 0.1);
    });
  });
</script>

{#if thoughts.length > 0}
<section class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-gap" id="thoughts">
  <div class="border-t border-outline-variant/30 pt-12">
    <div class="max-w-2xl mb-8">
      <h2 class="font-headline-lg-mobile text-headline-lg-mobile sm:font-headline-lg sm:text-headline-lg text-primary mb-4">Thoughts</h2>
      <p class="font-body-lg text-body-lg text-on-surface-variant">Occasionally, I write about things I'm learning, questioning, or improving. Not tutorials. Just honest reflections from building products.</p>
    </div>
    <div class="flex flex-col">
      {#each thoughts as thought, i}
        <a href={thought.slug} class="group py-6 border-t border-outline-variant/30 flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:bg-surface-container transition-colors -mx-4 px-4 rounded-xl" bind:this={articles[i]}>
          <div>
            <span class="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-1 block">{thought.category} &bull; {thought.date}</span>
            <h3 class="font-headline-md text-headline-md text-primary group-hover:text-secondary transition-colors">{thought.title}</h3>
          </div>
          <ArrowUpRight size={20} class="text-outline-variant group-hover:text-primary transition-colors shrink-0" />
        </a>
      {/each}
    </div>
    <div class="mt-8">
      <a href="/blog" class="inline-flex items-center gap-2 font-label-md text-label-md text-secondary hover:text-secondary/80 transition-colors">
        View all posts
        <ArrowRight size={16} />
      </a>
    </div>
  </div>
</section>
{/if}

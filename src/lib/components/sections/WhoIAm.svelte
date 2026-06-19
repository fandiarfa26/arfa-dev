<script lang="ts">
  import { LayoutGrid, MessageSquare } from 'lucide-svelte';
  import Tag from '$lib/components/shared/Tag.svelte';
  import LocalTime from '../shared/LocalTime.svelte';
  import { animateStagger } from '$lib/animations/stagger';
  import { onMount } from 'svelte';

  let container: HTMLElement;
  let cards: HTMLDivElement[] = [];

  onMount(() => {
    if (container && cards.length > 0) animateStagger(container, cards);
  });
</script>

<section class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-gap" bind:this={container} id="about">
  <div class="border-t border-outline-variant/30 pt-12">
    <h2 class="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-8">
      Who I Am
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[280px]">
      <!-- Card 1: About -->
      <div class="md:col-span-2 border border-outline-variant rounded-xl p-8 bg-surface text-on-surface flex flex-col justify-between shadow-sm group" bind:this={cards[0]}>
        <div class="flex items-center justify-between mb-4">
          <LayoutGrid size={24} class="text-secondary" />
          <Tag variant="accent">Philosophy</Tag>
        </div>
        <div>
          <h3 class="font-headline-md text-headline-md text-primary mb-3">Turning concepts into usable experiences.</h3>
          <p class="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">
            Six years across five product domains taught me one thing: understanding the problem deeply comes before picking the framework. Technology is the easy part.
          </p>
        </div>
      </div>
      <!-- Card 2: How I Work -->
      <div class="border border-outline-variant rounded-xl p-8 bg-surface-container-lowest text-on-surface flex flex-col justify-between shadow-sm" bind:this={cards[1]}>
        <div class="mb-4">
          <MessageSquare size={24} class="text-secondary mb-2 block" />
          <h3 class="font-label-md text-label-md text-primary uppercase tracking-widest mb-2">How I Work</h3>
        </div>
        <p class="font-body-md text-body-md text-on-surface-variant">
            I start every project by getting the problem straight. Clear requirements beat clever architecture every time.
        </p>
      </div>
      <!-- Card 3 + 4 Stack -->
      <div class="flex flex-col gap-4 h-full">
        <div class="flex-1 border border-outline-variant rounded-xl p-6 bg-surface-container text-on-surface flex flex-col justify-center shadow-sm" bind:this={cards[2]}>
          <h3 class="font-label-md text-label-md text-primary uppercase tracking-widest mb-2">Beyond the Editor</h3>
          <p class="font-body-md text-body-md text-on-surface-variant text-sm">
            SvelteKit, editorial typography, cooking, and integrating AI into a human-led design process.
          </p>
        </div>
        <LocalTime />
      </div>
    </div>
  </div>
</section>

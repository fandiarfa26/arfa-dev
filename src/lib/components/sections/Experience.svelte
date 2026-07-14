<script lang="ts">
  import { Lightbulb } from 'lucide-svelte';
  import { experiences } from '$lib/content/experiences';
  import { animateStagger } from '$lib/animations/stagger';
  import { onMount } from 'svelte';

  let container: HTMLElement;
  let items: HTMLDivElement[] = [];

  onMount(() => {
    if (container && items.length > 0) animateStagger(container, items);
  });
</script>

<section class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-gap" id="experience" bind:this={container}>
  <div class="border-t border-outline-variant/30 pt-12">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-4 md:sticky md:top-32 self-start mb-8 md:mb-0">
        <h2 class="font-headline-lg-mobile text-headline-lg-mobile sm:font-headline-lg sm:text-headline-lg text-primary mb-4">Experience</h2>
        <p class="font-body-md text-body-md text-on-surface-variant max-w-xs">Experiences that shaped how I approach products and teamwork.</p>
      </div>
      <div class="md:col-span-8 flex flex-col gap-12">
        {#each experiences as exp, i}
          <div class="group" bind:this={items[i]}>
            <div class="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
              <h3 class="font-headline-md text-headline-md text-primary group-hover:text-secondary transition-colors">{exp.role}</h3>
              <span class="font-label-md text-label-md text-secondary tracking-widest">{exp.period}</span>
            </div>
            <h4 class="font-body-lg text-body-lg text-on-surface-variant mb-4 border-b border-outline-variant/30 pb-4">{exp.company}</h4>
            <ul class="flex flex-col gap-4 font-body-md text-body-md text-on-surface mb-6 list-none">
              {#each exp.highlights.en as highlight}
                <li class="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-secondary before:rounded-full">{highlight}</li>
              {/each}
            </ul>
            <div class="bg-surface-container border border-outline-variant shadow-sm rounded-xl p-5 flex gap-4 items-start">
              <Lightbulb size={20} class="text-secondary mt-0.5 shrink-0" />
              <div>
                <span class="font-label-md text-label-md text-secondary uppercase tracking-widest block mb-1">Reflection</span>
                <p class="font-body-md text-body-md text-on-surface-variant text-sm">{exp.reflection.en}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

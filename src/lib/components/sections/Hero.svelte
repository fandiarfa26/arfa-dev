<script lang="ts">
  import { animateHeroEntrance } from '$lib/animations/hero';
  import { onMount } from 'svelte';

  let heroRef: HTMLElement;

  onMount(() => {
    if (heroRef) animateHeroEntrance(heroRef);
  });
</script>

<section class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-gap" bind:this={heroRef}>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
    <div class="md:col-span-10">
      <div class="flex items-center gap-3 mb-6" data-hero-item>
        <div class="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
        <span class="font-label-md text-label-md text-secondary uppercase tracking-widest">
          East Java, Indonesia &bull; Available for selected collaborations
        </span>
      </div>
      <h1 class="font-headline-lg-mobile text-headline-lg-mobile sm:font-headline-lg sm:text-headline-lg md:font-display md:text-display text-primary mb-6 max-w-4xl" data-hero-item>
          Hi, I'm Fandi. <br/> I build interfaces that turn ideas into products people enjoy using.
      </h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10 leading-relaxed" data-hero-item>
        I'm a frontend engineer who enjoys bridging design and development&mdash;crafting experiences that feel intuitive, thoughtful, and practical for real users.
      </p>
      <div class="flex flex-wrap items-center gap-4" data-hero-item>
        <a href="#work" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 bg-secondary text-on-primary hover:bg-secondary/90 h-11 px-8 shadow-sm">
          View Selected Work
        </a>
        <a href="#contact" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 border border-outline-variant bg-transparent hover:bg-surface-container hover:text-primary h-11 px-8 shadow-sm">
          Let's Talk
        </a>
      </div>
    </div>
  </div>
</section>

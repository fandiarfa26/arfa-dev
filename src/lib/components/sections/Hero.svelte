<script lang="ts">
  import Button from '$lib/components/shared/Button.svelte';
  import { animateHeroEntrance } from '$lib/animations/hero';
  import { onMount } from 'svelte';

  let heroRef: HTMLElement;

  onMount(() => {
    if (heroRef) animateHeroEntrance(heroRef);
  });
</script>

<section class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-gap min-h-[calc(100dvh-128px)] flex flex-col justify-center" bind:this={heroRef} id="hero">
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
        I've shipped products for real estate, food ordering, e-learning, and POS&mdash;across React, Vue, Flutter, and Svelte. I care about how interfaces feel as much as how they work.
      </p>
      <div class="flex flex-wrap items-center gap-4" data-hero-item>
        <Button href="#work">View Selected Work</Button>
        <Button variant="secondary" href="#contact">Let's Talk</Button>
      </div>
    </div>
  </div>
</section>

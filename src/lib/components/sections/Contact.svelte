<script lang="ts">
  import { Mail } from 'lucide-svelte';
  import Button from '$lib/components/shared/Button.svelte';
  import { animateReveal } from '$lib/animations/reveal';
  import { onMount } from 'svelte';

  let section: HTMLElement;

  onMount(() => {
    if (section) animateReveal(section);
  });
</script>

<section class="w-full pb-section-gap" id="contact" bind:this={section}>
  <div class="border-t border-outline-variant/30 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-12">
    <h2 class="font-headline-lg-mobile text-headline-lg-mobile sm:font-headline-lg sm:text-headline-lg md:font-display md:text-display text-primary mb-12 leading-tight max-w-2xl">Let's build something meaningful together.</h2>
    <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <div class="md:col-span-4">
        <div class="flex flex-col items-center md:items-start gap-6">
          <div class="w-48 h-48 rounded-full overflow-hidden border-2 border-secondary shadow-lg shrink-0 bg-surface-container-high">
            <img src="/images/profile.webp" alt="M. Fandi Arfabuma" class="w-full h-full object-cover" loading="lazy" decoding="async" sizes="(max-width: 768px) 96px, 192px" onerror={(e) => ((e.currentTarget as HTMLImageElement).style.display = 'none')} />
          </div>
          <div class="flex flex-col gap-2 text-center md:text-left">
            <p class="font-headline-md text-headline-md text-primary">M. Fandi Arfabuma</p>
            <p class="font-label-md text-label-md text-secondary uppercase tracking-widest">Frontend Engineer</p>
            <div class="flex justify-center md:justify-start gap-6 mt-2">
              <a href="https://www.linkedin.com/in/arfabuma/" target="_blank" rel="noopener noreferrer" class="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors inline-block py-3 min-h-[44px]">LinkedIn</a>
              <a href="https://github.com/fandiarfa26" target="_blank" rel="noopener noreferrer" class="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors inline-block py-3 min-h-[44px]">GitHub</a>
              <a href="https://www.tiktok.com/@arfa_dev" target="_blank" rel="noopener noreferrer" class="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors inline-block py-3 min-h-[44px]">TikTok</a>
            </div>
          </div>
        </div>
      </div>
      <div class="md:col-span-8">
        <p class="font-body-lg text-body-lg text-on-surface-variant mb-10">Whether you're exploring an idea, improving an existing product, or simply want to connect, I'd love to hear from you.</p>
        <div class="flex flex-wrap gap-4">
          <Button href="mailto:arfabuma.987@gmail.com">
            <Mail size={20} />
            Email Me
          </Button>
          <Button variant="secondary" href="https://wa.me/6281232728033?text=Hi%20Fandi%2C%20I%20found%20your%20portfolio%20and%20would%20love%20to%20connect." target="_blank" rel="noopener noreferrer">
            <img src="/icons/whatsapp.svg" alt="WhatsApp" class="w-5 h-5" style="filter: brightness(0) invert(1)" onerror={(e) => ((e.currentTarget as HTMLImageElement).style.display = 'none')} />
            WhatsApp
          </Button>
          <Button href="/resume">Download ATS CV</Button>
        </div>
      </div>
    </div>
  </div>
</section>

<script lang="ts">
  import Container from './Container.svelte';
  const year = new Date().getFullYear();
</script>

<footer class="w-full py-12 bg-surface border-t border-outline-variant/30">
  <Container>
    <div class="flex flex-col sm:flex-row justify-between items-center gap-6">
      <div class="font-headline-md text-headline-md text-primary">MFA</div>
      <div class="font-body-md text-body-md text-on-surface-variant text-center md:text-left">
        Built with curiosity, collaboration, and plenty of iteration.
      </div>
      <div class="flex gap-6">
        <a href="https://www.linkedin.com/in/arfabuma/" target="_blank" rel="noopener noreferrer" aria-label="Fandi's LinkedIn profile" class="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors inline-block py-3 min-h-[44px]">LinkedIn</a>
        <a href="https://github.com/fandiarfa26" target="_blank" rel="noopener noreferrer" aria-label="Fandi's GitHub profile" class="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors inline-block py-3 min-h-[44px]">GitHub</a>
        <a href="https://www.tiktok.com/@arfa_dev" target="_blank" rel="noopener noreferrer" aria-label="Fandi's TikTok profile" class="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors inline-block py-3 min-h-[44px]">TikTok</a>
      </div>
    </div>
    <div class="text-center mt-6 font-label-sm text-label-sm text-on-surface-variant">
      <a
        href="/archive"
        class="inline-block py-3 min-h-[44px] text-on-surface-variant hover:text-secondary transition-colors"
      >
        Portfolio Archive &rarr;
      </a>
    </div>
    <div class="text-center mt-2 font-label-sm text-label-sm text-on-surface-variant">
      &copy; {year} M. Fandi Arfabuma
    </div>
  </Container>
</footer>

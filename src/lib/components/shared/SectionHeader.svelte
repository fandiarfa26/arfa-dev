<script lang="ts">
  let { title = '', description }: { title: string; description?: string } = $props();
</script>

<div class="max-w-2xl mb-12">
  <h2 class="font-headline-lg-mobile text-headline-lg-mobile sm:font-headline-lg sm:text-headline-lg text-primary mb-4">
    {title}
  </h2>
  {#if description}
    <p class="font-body-lg text-body-lg text-on-surface-variant">{description}</p>
  {/if}
</div>

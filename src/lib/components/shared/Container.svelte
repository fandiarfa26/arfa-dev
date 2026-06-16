<script lang="ts">
  let { class: className = '', children }: { class?: string; children: import('svelte').Snippet } = $props();
</script>

<div class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto {className}">
  {@render children()}
</div>

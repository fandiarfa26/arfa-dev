<script lang="ts">
  import '../app.css';
  import Nav from '$lib/components/shared/Nav.svelte';
  import Footer from '$lib/components/shared/Footer.svelte';
  import BackgroundAurora from '$lib/components/shared/BackgroundAurora.svelte';
  import CursorFollower from '$lib/components/shared/CursorFollower.svelte';
  import { page } from '$app/stores';

  let { children }: { children: import('svelte').Snippet } = $props();
</script>

<svelte:head>
  <title>{$page.data.title ?? 'M. Fandi Arfabuma'}</title>
  <meta name="description" content={$page.data.description ?? 'Frontend engineer'} />
  <meta property="og:title" content={$page.data.title ?? 'M. Fandi Arfabuma'} />
  <meta property="og:description" content={$page.data.description ?? 'Frontend engineer'} />
</svelte:head>

<BackgroundAurora />
<CursorFollower />
<Nav />
<main class="pt-24 md:pt-32">
  {@render children()}
</main>
<Footer />

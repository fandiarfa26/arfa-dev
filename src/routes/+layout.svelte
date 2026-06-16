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
  <meta property="og:image" content="/images/profile.webp" />
</svelte:head>

<BackgroundAurora />
<CursorFollower />
<a href="#main-content" class="skip-link">Skip to content</a>
<Nav />
<main id="main-content" class="pt-24 md:pt-32 outline-none" tabindex="-1">
  {@render children()}
</main>
<Footer />

<style>
  .skip-link {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .skip-link:focus {
    position: fixed;
    top: 16px;
    left: 16px;
    width: auto;
    height: auto;
    padding: 12px 24px;
    margin: 0;
    overflow: visible;
    clip: auto;
    white-space: normal;
    z-index: var(--z-skip-link);
    background: rgb(var(--color-secondary));
    color: rgb(var(--color-background));
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 8px;
    outline: none;
  }

  .skip-link:focus-visible {
    outline: 2px solid rgb(var(--color-secondary));
    outline-offset: 2px;
  }
</style>

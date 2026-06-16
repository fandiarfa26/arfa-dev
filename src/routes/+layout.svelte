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
<a href="#main-content" class="skip-link">
  Skip to content
</a>
<Nav />
<main id="main-content" class="pt-24 md:pt-32 outline-none" tabindex="-1">
  {@render children()}
</main>
<Footer />

<style>
  .skip-link {
    position: fixed;
    top: -100%;
    left: 16px;
    z-index: 100;
    background: #10b981;
    color: #131313;
    font-family: Hanken Grotesk, sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-decoration: none;
    padding: 12px 24px;
    border-radius: 8px;
    transition: top 0.2s ease;
  }

  .skip-link:focus {
    top: 16px;
  }

  @media (prefers-reduced-motion: reduce) {
    .skip-link {
      transition: none;
    }
  }
</style>

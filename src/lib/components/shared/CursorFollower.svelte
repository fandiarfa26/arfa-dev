<script lang="ts">
  import gsap from 'gsap';
  import { onMount } from 'svelte';

  let dot: HTMLElement;
  let ring: HTMLElement;
  let enabled = $state(false);

  onMount(() => {
    const pointerMQ = window.matchMedia('(pointer: fine)');
    if (!pointerMQ.matches) return;

    const reducedMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMQ.matches) return;

    enabled = true;

    const onMove = (e: MouseEvent) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'power2.out', overwrite: 'auto' });
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.5, ease: 'power2.out', overwrite: 'auto' });
    };

    const onHoverStart = (e: Event) => {
      const target = (e.target as HTMLElement).closest('a, button, input, textarea, select, [data-cursor]');
      if (target) gsap.to(ring, { scale: 1.5, borderColor: '#10b981', duration: 0.3, ease: 'power2.out' });
    };

    const onHoverEnd = (e: Event) => {
      const target = (e.target as HTMLElement).closest('a, button, input, textarea, select, [data-cursor]');
      if (target) gsap.to(ring, { scale: 1, borderColor: 'rgba(16, 185, 129, 0.5)', duration: 0.3, ease: 'power2.out' });
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onHoverStart);
    document.addEventListener('mouseout', onHoverEnd);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onHoverStart);
      document.removeEventListener('mouseout', onHoverEnd);
    };
  });
</script>

<svelte:body class:cursor-none={enabled} />

<div class="cursor-dot" class:enabled bind:this={dot}></div>
<div class="cursor-ring" class:enabled bind:this={ring}></div>

<style>
  :global(body.cursor-none),
  :global(body.cursor-none *) {
    cursor: none !important;
  }

  .cursor-dot {
    position: fixed;
    width: 6px;
    height: 6px;
    background: #10b981;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    top: -4px;
    left: -4px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .cursor-dot.enabled {
    opacity: 1;
  }

  .cursor-ring {
    position: fixed;
    width: 32px;
    height: 32px;
    border: 1.5px solid rgba(16, 185, 129, 0.5);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    top: -16px;
    left: -16px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .cursor-ring.enabled {
    opacity: 1;
  }
</style>

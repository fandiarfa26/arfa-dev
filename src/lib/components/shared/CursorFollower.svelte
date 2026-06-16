<script lang="ts">
  import { onMount } from 'svelte';

  let dot: HTMLElement;
  let ring: HTMLElement;
  let enabled = $state(false);
  let visible = $state(true);

  function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t;
  }

  onMount(() => {
    const pointerMQ = window.matchMedia('(pointer: fine)');
    if (!pointerMQ.matches) return;

    const reducedMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMQ.matches) return;

    enabled = true;

    let targetX = -9999;
    let targetY = -9999;
    let dotX = -9999;
    let dotY = -9999;
    let ringX = -9999;
    let ringY = -9999;
    let hovered = false;
    let scale = 1;
    let targetScale = 1;
    let animId: number | null = null;
    let lastMove = 0;
    const IDLE_TIMEOUT = 3000;

    function tick() {
      if (Date.now() - lastMove > IDLE_TIMEOUT) {
        animId = null;
        visible = false;
        return;
      }

      dotX = lerp(dotX, targetX, 0.15);
      dotY = lerp(dotY, targetY, 0.15);
      ringX = lerp(ringX, targetX, 0.08);
      ringY = lerp(ringY, targetY, 0.08);
      scale = lerp(scale, targetScale, 0.15);

      dot.style.transform = `translate(${dotX}px, ${dotY}px)`;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) scale(${scale})`;

      animId = requestAnimationFrame(tick);
    }

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      lastMove = Date.now();
      visible = true;
      if (animId === null) animId = requestAnimationFrame(tick);
    };

    const onHoverStart = (e: Event) => {
      const target = (e.target as HTMLElement).closest('a, button, input, textarea, select, [data-cursor]');
      if (target && !hovered) {
        hovered = true;
        targetScale = 1.5;
        ring.style.borderColor = 'rgb(var(--color-secondary))';
      }
    };

    const onHoverEnd = (e: Event) => {
      const target = (e.target as HTMLElement).closest('a, button, input, textarea, select, [data-cursor]');
      if (target && hovered) {
        hovered = false;
        targetScale = 1;
        ring.style.borderColor = 'rgb(var(--color-secondary))';
      }
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onHoverStart);
    document.addEventListener('mouseout', onHoverEnd);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onHoverStart);
      document.removeEventListener('mouseout', onHoverEnd);
      if (animId !== null) cancelAnimationFrame(animId);
    };
  });
</script>

<svelte:body class:cursor-none={enabled && visible} />

<div class="cursor-dot" class:enabled class:visible bind:this={dot}></div>
<div class="cursor-ring" class:enabled class:visible bind:this={ring}></div>

<style>
  @media (pointer: fine) {
    :global(body.cursor-none),
    :global(body.cursor-none *) {
      cursor: none !important;
    }
  }

  .cursor-dot {
    position: fixed;
    width: 6px;
    height: 6px;
    margin: -3px 0 0 -3px;
    background: rgb(var(--color-secondary));
    border-radius: 50%;
    pointer-events: none;
    z-index: var(--z-cursor-dot);
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.3s;
    will-change: transform;
  }

  .cursor-dot.enabled.visible {
    opacity: 1;
  }

  .cursor-ring {
    position: fixed;
    width: 32px;
    height: 32px;
    margin: -16px 0 0 -16px;
    border: 2.5px solid rgb(var(--color-secondary));
    border-radius: 50%;
    pointer-events: none;
    z-index: var(--z-cursor-ring);
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.3s, border-color 0.3s;
    will-change: transform;
  }

  .cursor-ring.enabled.visible {
    opacity: 1;
  }

  @media (pointer: coarse) {
    .cursor-dot,
    .cursor-ring {
      display: none;
    }
  }
</style>

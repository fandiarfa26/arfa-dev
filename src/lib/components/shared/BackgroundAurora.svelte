<script lang="ts">
  import { onMount } from 'svelte';

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null = null;

  interface Dot {
    ox: number;
    oy: number;
    size: number;
  }

  let dots: Dot[] = [];
  let mouse = { x: -9999, y: -9999 };
  let animId: number | null = null;

  const RADIUS = 280;
  const MAX_SIZE = 2.5;

  function getSpacing() {
    const w = window.innerWidth;
    if (w < 480) return 56;
    if (w < 768) return 44;
    return 32;
  }

  function initGrid() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const spacing = getSpacing();
    dots = [];
    for (let x = spacing; x < w; x += spacing) {
      for (let y = spacing; y < h; y += spacing) {
        dots.push({ ox: x, oy: y, size: 0 });
      }
    }
  }

  let secondaryRGB = '16, 185, 129';

  function draw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const d of dots) {
      const dx = mouse.x - d.ox;
      const dy = mouse.y - d.oy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const t = Math.max(0, 1 - dist / RADIUS);
      const ease = t * t * (3 - 2 * t);

      d.size += (ease * MAX_SIZE - d.size) * 0.12;

      ctx.beginPath();
      ctx.arc(d.ox, d.oy, 0.8 + d.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${secondaryRGB}, ${0.08 + ease * 0.5})`;
      ctx.fill();
    }

    animId = requestAnimationFrame(draw);
  }

  onMount(() => {
    const raw = getComputedStyle(document.documentElement).getPropertyValue('--color-secondary').trim();
    if (raw) secondaryRGB = raw.replace(/\s+/g, ', ');

    const pointerMQ = window.matchMedia('(pointer: fine)');
    if (!pointerMQ.matches) return;

    const reducedMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMQ.matches) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext('2d');
    if (!ctx) return;

    initGrid();

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initGrid, 150);
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        if (animId !== null) cancelAnimationFrame(animId);
        animId = null;
      } else {
        animId = requestAnimationFrame(draw);
      }
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibilityChange);

    draw();

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      if (animId !== null) cancelAnimationFrame(animId);
    };
  });
</script>

<canvas bind:this={canvas} aria-hidden="true"></canvas>

<style>
  canvas {
    position: fixed;
    inset: 0;
    z-index: var(--z-aurora);
    pointer-events: none;
    width: 100vw;
    height: 100vh;
    will-change: transform;
  }

  @media (pointer: coarse) {
    canvas {
      display: none;
    }
  }
</style>

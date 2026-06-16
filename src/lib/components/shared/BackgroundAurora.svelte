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

  const SPACING = 32;
  const RADIUS = 140;
  const MAX_SIZE = 2.5;

  function initGrid() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    dots = [];
    for (let x = SPACING; x < w; x += SPACING) {
      for (let y = SPACING; y < h; y += SPACING) {
        dots.push({ ox: x, oy: y, size: 0 });
      }
    }
  }

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
      ctx.fillStyle = `rgba(16, 185, 129, ${0.08 + ease * 0.5})`;
      ctx.fill();
    }

    animId = requestAnimationFrame(draw);
  }

  onMount(() => {
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

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initGrid();
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    window.addEventListener('resize', onResize);

    draw();

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', onResize);
      if (animId !== null) cancelAnimationFrame(animId);
    };
  });
</script>

<canvas bind:this={canvas} aria-hidden="true"></canvas>

<style>
  canvas {
    position: fixed;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    width: 100vw;
    height: 100vh;
  }
</style>

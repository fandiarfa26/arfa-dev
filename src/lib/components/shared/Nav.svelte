<script lang="ts">
  import { Menu, X } from 'lucide-svelte';
  import Container from './Container.svelte';
  import Button from './Button.svelte';
  import { onMount } from 'svelte';
  import { afterNavigate } from '$app/navigation';

  const navLinks = [
    { href: '/#about', label: 'About' },
    { href: '/#work', label: 'Work' },
    { href: '/#experience', label: 'Experience' },
    { href: '/#thoughts', label: 'Thoughts' }
  ] as const;

  let menuOpen = $state(false);
  let openBtn: HTMLButtonElement | undefined = $state();
  let closeBtn: HTMLButtonElement | undefined = $state();
  let drawer: HTMLDivElement | undefined = $state();
  let activeSection = $state('');

  let observer: IntersectionObserver;

  onMount(() => {
    return () => observer?.disconnect();
  });

  afterNavigate(() => {
    observer?.disconnect();
    observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeSection = entry.target.id;
        }
      }
    }, { rootMargin: '-40% 0px -55% 0px' });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(s => observer.observe(s));
  });

  function open() {
    menuOpen = true;
  }

  function close() {
    menuOpen = false;
  }

  function onDrawerKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      close();
      return;
    }
    if (e.key !== 'Tab' || !drawer) return;
    const focusable = drawer.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  $effect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      closeBtn?.focus();
      const main = document.getElementById('main-content');
      if (main) main.inert = true;
      return () => {
        document.body.style.overflow = '';
        if (main) main.inert = false;
        openBtn?.focus();
      };
    }
  });
</script>

<nav class="fixed top-0 w-full z-[var(--z-nav)] bg-surface/80 backdrop-blur-md border-b border-outline-variant/30">
  <Container>
    <div class="flex justify-between items-center py-4">
      <a
        href="/"
        class="font-headline-md text-headline-md text-primary hover:opacity-80 transition-opacity"
      >
        MFA
      </a>
      <ul class="hidden md:flex items-center gap-8">
        {#each navLinks as link}
          <li>
            <a
              href={link.href}
              class="font-label-md text-label-md {activeSection === link.href.replace('/#', '') ? 'text-secondary' : 'text-on-surface-variant'} hover:text-secondary transition-colors duration-300"
            >
              {link.label}
            </a>
          </li>
        {/each}
      </ul>
      <div class="flex items-center gap-4">
        <Button href="/#contact" className="hidden md:inline-flex">
          Let's Talk
        </Button>
        <button
          class="md:hidden text-primary p-3 inline-flex items-center justify-center rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 hover:bg-surface-container"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onclick={open}
          bind:this={openBtn}
        >
          <Menu size={20} />
        </button>
      </div>
    </div>
  </Container>
</nav>

<!-- Mobile menu drawer -->
{#if menuOpen}
  <div
    class="fixed inset-0 z-[var(--z-overlay)] bg-background/60 backdrop-blur-sm"
    role="presentation"
    onclick={close}
    aria-hidden="true"
  ></div>
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <div
    class="mobile-drawer fixed top-0 right-0 z-[var(--z-drawer)] h-full w-72 max-w-[80vw] bg-surface border-l border-outline-variant/30 shadow-xl"
    role="dialog"
    aria-modal="true"
    aria-label="Navigation menu"
    onkeydown={onDrawerKeydown}
    tabindex="-1"
    bind:this={drawer}
  >
    <div class="flex items-center justify-between p-6 border-b border-outline-variant/30">
      <span class="font-headline-md text-headline-md text-primary">MFA</span>
      <button
        class="text-primary p-3 inline-flex items-center justify-center rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 hover:bg-surface-container"
        aria-label="Close menu"
        onclick={close}
        bind:this={closeBtn}
      >
        <X size={20} />
      </button>
    </div>
    <nav class="p-6" aria-label="Mobile navigation">
      <ul class="flex flex-col gap-2">
        {#each navLinks as link}
          <li>
            <a
              href={link.href}
              class="block px-4 py-3 font-label-md text-label-md {activeSection === link.href.replace('/#', '') ? 'text-secondary' : 'text-on-surface-variant'} hover:text-primary hover:bg-surface-container rounded-lg transition-colors"
              onclick={close}
            >
              {link.label}
            </a>
          </li>
        {/each}
      </ul>
      <div class="mt-8 pt-6 border-t border-outline-variant/30">
        <Button href="/#contact" onclick={close}>
          Let's Talk
        </Button>
      </div>
    </nav>
  </div>
{/if}

<style>
  .mobile-drawer {
    transform: translateX(100%);
  }

  @media (prefers-reduced-motion: no-preference) {
    .mobile-drawer {
      animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .mobile-drawer {
      transform: translateX(0);
    }
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
</style>

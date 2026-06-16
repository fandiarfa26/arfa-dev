<script lang="ts">
  import { Menu, X } from 'lucide-svelte';
  import Container from './Container.svelte';

  const navLinks = [
    { href: '/#work', label: 'Work' },
    { href: '/#experience', label: 'Experience' },
    { href: '/#thoughts', label: 'Thoughts' }
  ] as const;

  let menuOpen = $state(false);
  let openBtn: HTMLButtonElement | undefined = $state();
  let closeBtn: HTMLButtonElement | undefined = $state();
  let drawer: HTMLDivElement | undefined = $state();

  function open() {
    menuOpen = true;
    document.body.style.overflow = 'hidden';
  }

  function close() {
    menuOpen = false;
    document.body.style.overflow = '';
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
      closeBtn?.focus();
      return () => {
        document.body.style.overflow = '';
        openBtn?.focus();
      };
    }
  });
</script>

<nav class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300">
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
              class="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors duration-300"
            >
              {link.label}
            </a>
          </li>
        {/each}
      </ul>
      <div class="flex items-center gap-4">
        <a
          href="/#contact"
          class="hidden md:inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 bg-secondary text-on-primary hover:bg-secondary/90 h-10 px-4 py-2 shadow-sm"
        >
          Let's Talk
        </a>
        <button
          class="md:hidden text-primary p-2 inline-flex items-center justify-center rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 hover:bg-surface-container"
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
    class="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
    role="presentation"
    onclick={close}
    aria-hidden="true"
  ></div>
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <div
    class="mobile-drawer fixed top-0 right-0 z-[51] h-full w-72 max-w-[80vw] bg-surface border-l border-outline-variant/30 shadow-xl"
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
        class="text-primary p-2 inline-flex items-center justify-center rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 hover:bg-surface-container"
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
              class="block px-4 py-3 font-label-md text-label-md text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-lg transition-colors"
              onclick={close}
            >
              {link.label}
            </a>
          </li>
        {/each}
      </ul>
      <div class="mt-8 pt-6 border-t border-outline-variant/30">
        <a
          href="/#contact"
          class="flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 bg-secondary text-on-primary hover:bg-secondary/90 h-11 px-8 shadow-sm"
          onclick={close}
        >
          Let's Talk
        </a>
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

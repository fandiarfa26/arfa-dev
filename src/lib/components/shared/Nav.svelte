<script lang="ts">
  import { Menu } from 'lucide-svelte';
  import Container from './Container.svelte';

  const navLinks = [
    { href: '/#work', label: 'Work' },
    { href: '/#experience', label: 'Experience' },
    { href: '/#thoughts', label: 'Thoughts' }
  ] as const;
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
        >
          <Menu size={20} />
        </button>
      </div>
    </div>
  </Container>
</nav>

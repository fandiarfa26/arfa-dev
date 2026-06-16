<script lang="ts">
  import { cn } from '$lib/utils';

  interface Props {
    variant?: 'primary' | 'secondary';
    href?: string;
    className?: string;
    onclick?: (e: MouseEvent) => void;
    target?: string;
    rel?: string;
    children: import('svelte').Snippet;
  }

  let { variant = 'primary', href, className = '', onclick, target, rel, children }: Props = $props();

  const base = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 active:scale-[0.97] h-11 px-8 shadow-sm';
  const variants = {
    primary: 'bg-secondary text-on-primary hover:bg-secondary/90',
    secondary: 'border border-outline-variant bg-transparent hover:bg-surface-container hover:text-primary'
  };
</script>

{#if href}
  <a {href} {target} {rel} {onclick} class={cn(base, variants[variant], className)}>{@render children()}</a>
{:else}
  <button {onclick} class={cn(base, variants[variant], className)}>{@render children()}</button>
{/if}

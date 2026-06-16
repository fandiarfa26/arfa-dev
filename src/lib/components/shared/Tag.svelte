<script lang="ts">
  interface Props {
    variant?: 'default' | 'accent';
    children: import('svelte').Snippet;
  }

  let { variant = 'default', children }: Props = $props();

  const base = 'inline-flex items-center rounded-full border border-outline-variant px-2.5 py-0.5 font-label-sm text-xs font-semibold';
  const variants = {
    default: 'bg-surface-container text-on-surface-variant',
    accent: 'bg-secondary-container text-secondary'
  };
</script>

<span class="{base} {variants[variant]}">{@render children()}</span>

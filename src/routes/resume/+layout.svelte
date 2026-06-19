<script lang="ts">
  import '../../app.css';

  let { children }: { children: import('svelte').Snippet } = $props();
</script>

<svelte:head>
  <title>M. Fandi Arfabuma — Resume</title>
</svelte:head>

{@render children()}

<style>
  @page { size: A4; margin: 20mm; }

  @media print {
    :global(body) {
      background: white !important;
      color: black !important;
      font-family: 'Times New Roman', Times, serif;
      font-size: 11pt;
      line-height: 1.4;
    }

    :global(nav),
    :global(footer),
    :global(canvas) {
      display: none !important;
    }

    :global(main) {
      padding-top: 0 !important;
    }

    :global(.no-print) { display: none !important; }

    :global(.resume-item) {
      break-inside: avoid;
      page-break-inside: avoid;
    }
  }
</style>

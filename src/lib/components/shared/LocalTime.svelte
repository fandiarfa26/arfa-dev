<script lang="ts">
  let time = $state('');

  function updateTime() {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: 'Asia/Jakarta',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    };
    time = new Intl.DateTimeFormat([], options).format(new Date());
  }

  $effect(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  });
</script>

<div class="min-h-32 border border-outline-variant rounded-xl p-6 bg-surface-container-highest text-primary flex flex-col items-center justify-center text-center shadow-sm">
  <span class="font-label-sm text-label-sm opacity-80 uppercase tracking-widest mb-1 text-secondary">Bangkalan, ID</span>
  <div class="font-headline-md text-headline-md tabular-nums tracking-tight">{time}</div>
</div>

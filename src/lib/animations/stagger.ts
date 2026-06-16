const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';

export function animateStagger(container: HTMLElement, items: HTMLElement[], delay = 0) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        items.forEach((item, i) => {
          item.style.transition = `opacity 0.6s ${EASE} ${delay + i * 0.1}s, transform 0.6s ${EASE} ${delay + i * 0.1}s`;
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        });
      }
    },
    { threshold: 0, rootMargin: '0px 0px -15% 0px' }
  );

  observer.observe(container);

  requestAnimationFrame(() => {
    items.forEach((item) => {
      if (!item.style.opacity) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(24px)';
      }
    });
  });
}

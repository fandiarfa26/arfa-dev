const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';

export function animateReveal(element: HTMLElement, delay = 0) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        element.style.transition = `opacity 0.7s ${EASE} ${delay}s, transform 0.7s ${EASE} ${delay}s`;
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    },
    { threshold: 0, rootMargin: '0px 0px -15% 0px' }
  );

  observer.observe(element);

  requestAnimationFrame(() => {
    if (!element.style.opacity) {
      element.style.opacity = '0';
      element.style.transform = 'translateY(32px)';
    }
  });
}

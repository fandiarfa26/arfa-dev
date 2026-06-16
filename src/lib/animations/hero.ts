const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';

export function animateHeroEntrance(element: HTMLElement) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const items = Array.from(element.querySelectorAll('[data-hero-item]')) as HTMLElement[];

  items.forEach((child, i) => {
    child.style.opacity = '0';
    child.style.transform = 'translateY(24px)';
    child.style.transition = `opacity 0.8s ${EASE} ${i * 0.15}s, transform 0.8s ${EASE} ${i * 0.15}s`;
  });

  requestAnimationFrame(() => {
    items.forEach((child) => {
      child.style.opacity = '1';
      child.style.transform = 'translateY(0)';
    });
  });
}

import type { LayoutLoad } from './$types';

export const prerender = true;

export const load: LayoutLoad = () => {
  return {
    title: 'M. Fandi Arfabuma — Frontend Engineer',
    description:
      'Frontend engineer who enjoys bridging design and development—crafting experiences that feel intuitive, thoughtful, and practical for real users.'
  };
};

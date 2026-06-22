import { archives } from '$lib/data/archive';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
  return {
    archives,
    title: 'Portfolio Archive — M. Fandi Arfabuma',
    description:
      'Explore previous versions of my portfolio and see how my skills evolved over the years.',
  };
};

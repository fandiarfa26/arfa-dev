import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = () => {
  return {
    title: 'Resume — M. Fandi Arfabuma',
    description:
      'Download my ATS-friendly CV. A detailed overview of my experience, skills, projects, and education as a Frontend Engineer.'
  };
};

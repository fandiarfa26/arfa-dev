import { projects } from '$lib/content/projects';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
  return {
    projects,
    title: 'Projects — M. Fandi Arfabuma',
    description: 'Explore projects and the decisions behind them.'
  };
};

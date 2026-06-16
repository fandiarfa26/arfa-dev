import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const slug = params.slug;

  try {
    const post = await import(`$lib/content/blog/${slug}.md`);
    return {
      content: post.default,
      metadata: post.metadata,
      title: `${post.metadata.title as string} — M. Fandi Arfabuma`,
      description: post.metadata.description as string
    };
  } catch {
    throw new Error(`Blog post "${slug}" not found`);
  }
};

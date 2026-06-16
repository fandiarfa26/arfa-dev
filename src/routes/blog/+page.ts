import type { PageLoad } from './$types';

interface BlogPost {
  slug: string;
  title?: string;
  published?: boolean;
  publishedAt?: string;
  excerpt?: string;
  tags?: string[];
  [key: string]: unknown;
}

export const load: PageLoad = async () => {
  const posts = import.meta.glob('$lib/content/blog/*.md', { eager: true }) as Record<string, { metadata: Record<string, unknown> }>;

  const blogPosts: BlogPost[] = Object.entries(posts)
    .map(([path, post]) => {
      const slug = path.split('/').pop()?.replace('.md', '') ?? '';
      return { slug, ...post.metadata } as BlogPost;
    })
    .filter((post) => post.published !== false)
    .sort((a, b) => new Date(b.publishedAt ?? '').getTime() - new Date(a.publishedAt ?? '').getTime());

  return {
    posts: blogPosts,
    title: 'Blog — M. Fandi Arfabuma',
    description: 'Thoughts, reflections, and lessons from building products.'
  };
};

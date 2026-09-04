import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({
    pattern: ['**/*.{md,mdx}', '!**/_*'],
    base: './site/content/posts',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    slug: z.string().optional(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()).default(['others']),
    featured: z.boolean().optional(),
    draft: z.boolean().default(false),
    ogImage: z.string().optional(),
    coverImage: z.string().optional(),
    canonicalURL: z.url().optional(),
    showCTA: z.boolean().default(true),
    showComments: z.boolean().default(true),
    lang: z.string().default('en'),
    series: z
      .object({
        id: z.string(),
        order: z.number(),
      })
      .optional(),
    translatedPosts: z.record(z.string(), z.string()).optional(),
  }),
});

const about = defineCollection({
  loader: glob({
    pattern: ['**/*.{md,mdx}', '!**/_*'],
    base: './site/content/about',
  }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { posts, about };

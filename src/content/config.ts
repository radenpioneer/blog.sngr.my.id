import { defineCollection, reference, z } from 'astro:content'

export const collections = {
  posts: defineCollection({
    type: 'content',
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string(),
        category: reference('categories'),
        image: image().optional(),
        tags: z
          .array(
            z.object({
              name: z.string(),
              slug: z.string(),
            })
          )
          .optional(),
        draft: z.boolean(),
        hidden: z.boolean().optional(),
      }),
  }),
  pages: defineCollection({
    type: 'content',
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string().optional(),
        image: image().optional(),
        draft: z.boolean(),
        hidden: z.boolean().optional(),
      }),
  }),
  categories: defineCollection({
    type: 'data',
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
    }),
  }),
  site: defineCollection({
    type: 'data',
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        logo: image(),
        icon: z.string(),
        menu: z.array(
          z.discriminatedUnion('discriminant', [
            z.object({
                discriminant: z.literal('link'),
                value: z.object({
                    title: z.string(),
                    url: z.string()
                })
            }),
            z.object({
                discriminant: z.literal('page'),
                value: reference('pages')
            })
          ])
        ),
      }),
  }),
}
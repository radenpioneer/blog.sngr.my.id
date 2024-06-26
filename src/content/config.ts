import { defineCollection, z, reference } from 'astro:content'

export const collections = {
  posts: defineCollection({
    type: 'content',
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.date(),
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
          z.object({
            name: z.string(),
            slug: z.string(),
          })
        ),
      }),
  }),
}

import { defineCollection, z } from 'astro:content'

const BasicSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  draft: z.boolean().default(false),
})

export const collections = {
  blog: defineCollection({
    type: 'content',
    schema: ({ image }) =>
      BasicSchema.extend({
        image: image().optional(),
        date: z.date(),
        tags: z.array(z.string()).optional(),
        note: z.boolean().default(false),
      }),
  }),
  page: defineCollection({
    type: 'content',
    schema: ({ image }) =>
      BasicSchema.extend({
        image: image().optional(),
      }),
  }),
  site: defineCollection({
    type: 'data',
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        image: image(),
        menu: z.array(
          z
            .object({
              title: z.string(),
              href: z.string(),
            })
            .optional()
        ),
      }),
  }),
}

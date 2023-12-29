import { z, defineCollection } from 'astro:content'

export const collections = {
  home: defineCollection({
    type: 'data',
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        bio: z.string(),
        image: image(),
      }),
  }),
}

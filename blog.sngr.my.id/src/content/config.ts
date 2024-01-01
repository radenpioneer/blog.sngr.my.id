import { defineCollection, reference, z } from "astro:content";

export const collections = {
    posts: defineCollection({
        type: 'content',
        schema: ({ image }) => z.object({
            title: z.string(),
            description: z.string().optional(),
            date: z.string(),
            category: reference('categories'),
            image: image().optional(),
            draft: z.boolean(),
            hidden: z.boolean().optional()
        })
    }),
    categories: defineCollection({
        type: 'data',
        schema: z.object({
            title: z.string(),
            description: z.string().optional(),
        })
    }),
    site: defineCollection({
        type: 'data',
        schema: ({ image }) => z.object({
            title: z.string(),
            description: z.string(),
            logo: image()
        })
    })
}
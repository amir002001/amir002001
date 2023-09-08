import { defineCollection, z } from "astro:content";

const marginaliaCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        image: z.string().optional(),
        publishDate: z.date(),
    }),
});

const columnsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        shortDescription: z.string(),
        image: z.string(),
        publishDate: z.date(),
    }),
});

export const collections = {
    columns: columnsCollection,
    marginalia: marginaliaCollection,
};

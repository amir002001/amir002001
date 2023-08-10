import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        shortDescription: z.string(),
        tech: z.array(z.string()),
        awards: z.array(z.string()).optional(),
        github: z.string(),
        image: z.string(),
        link: z.string().optional(),
        devpost: z.string().optional(),
        date: z.string().datetime({ offset: true }),
    }),
});

const workCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        role: z.string(),
        shortDescription: z.string(),
        image: z.string(),
        startDate: z.string().datetime({ offset: true }),
        endDate: z.string().datetime({ offset: true }).optional(),
    }),
});

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        shortDescription: z.string(),
        image: z.string(),
        publishDate: z.string().datetime({ offset: true }),
    }),
});

export const collections = {
    projects: projectsCollection,
    work: workCollection,
    blog: blogCollection,
};

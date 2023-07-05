import { z, defineCollection } from "astro:content";
// 2. Define a schema for each collection you'd like to validate.
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
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    projects: projectsCollection,
};

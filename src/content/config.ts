import { z, defineCollection } from "astro:content";
// 2. Define a schema for each collection you'd like to validate.
const projectsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        awards: z.array(z.string()).optional(),
        github: z.string(),
        image: z.string().optional(),
        link: z.string().optional(),
    }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    projects: projectsCollection,
};

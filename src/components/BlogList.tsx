import type { CollectionEntry } from "astro:content";
import { BlogPost } from "./BlogPost";

export const BlogList = (props: {
    allBlogPosts: CollectionEntry<"blog">[];
}) => {
    return (
        <section className="my-12 w-4/5 max-w-[65ch]">
            <ul className="flex flex-col gap-8 mt-4">
                {props.allBlogPosts.map((blogPost) => (
                    <BlogPost key={blogPost.id} entry={blogPost} />
                ))}
            </ul>
        </section>
    );
};

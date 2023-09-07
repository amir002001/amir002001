import type { CollectionEntry } from "astro:content";
import { ColumnPost } from "./ColumnPost";

export const ColumnList = (props: {
    allColumnPosts: CollectionEntry<"columns">[];
}) => {
    return (
        <section className="my-12 w-4/5 max-w-[65ch]">
            <ul className="flex flex-col gap-8 mt-4">
                {props.allColumnPosts.map((columnPost) => (
                    <ColumnPost key={columnPost.id} entry={columnPost} />
                ))}
            </ul>
        </section>
    );
};

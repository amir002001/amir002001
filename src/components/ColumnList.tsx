import type { CollectionEntry } from "astro:content";
import { ColumnPost } from "./ColumnPost";

export const ColumnList = (props: {
    allColumnPosts: CollectionEntry<"columns">[];
}) => {
    return (
        <ul className="flex flex-col mt-4">
            {props.allColumnPosts.map((columnPost) => (
                <>
                    <ColumnPost key={columnPost.id} entry={columnPost} />

                    <div className="w-full h-0 border-gray-500 border-t-[0.25px]"></div>
                </>
            ))}
        </ul>
    );
};

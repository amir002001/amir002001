import type { CollectionEntry } from "astro:content";

export const Work = (props: { entry: CollectionEntry<"work"> }) => {
    const url = "/work/" + props.entry.slug;
    return (
        <div className="p-8 border">
            <a href={url} className="text-2xl font-semibold tracking-wider underline">
                {props.entry.data.title}
            </a>
            <p className="mt-3 mb-4">{props.entry.data.shortDescription}</p>
        </div>
    );
};

import type { CollectionEntry } from "astro:content";
import { useState } from "react";
import classnames from "classnames";

export const Project = (props: { entry: CollectionEntry<"projects"> }) => {
    const url = "/marginalia/" + props.entry.slug;
    const [mouseOver, setMouseOver] = useState(false);
    return (
        <a
            href={url}
            onMouseOver={() => {
                setMouseOver(true);
            }}
            onMouseOut={() => setMouseOver(false)}
            className={classnames("p-8 border", mouseOver && "border-rose-500")}
        >
            <h2
                className={classnames(
                    "block mt-4 text-2xl font-semibold tracking-wider relative",
                    mouseOver && "text-rose-500 underline"
                )}
            >
                {props.entry.data.title}
            </h2>
        </a>
    );
};

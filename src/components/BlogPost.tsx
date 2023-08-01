import type { CollectionEntry } from "astro:content";
import { useState } from "react";
import classnames from "classnames";

const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
};

export const BlogPost = (props: { entry: CollectionEntry<"blog"> }) => {
    const url = "/work/" + props.entry.slug;
    const [mouseOver, setMouseOver] = useState(false);

    return (
        <a
            href={url}
            className={classnames(
                "pt-6 pb-8 px-8 border",
                mouseOver && "border-rose-500"
            )}
            onMouseOver={() => setMouseOver(true)}
            onMouseOut={() => setMouseOver(false)}
        >
            <h2
                className={classnames(
                    "block text-2xl font-semibold tracking-wider relative",
                    mouseOver && "text-rose-500 underline"
                )}
            >
                <span
                    className={classnames("absolute -left-5", mouseOver ? "" : "hidden")}
                >
                    &gt;
                </span>
                {props.entry.data.title}
            </h2>
            <h4 className="text-sm">
                {formatDate(new Date(props.entry.data.publishDate))}
            </h4>
            <p className="mt-2">{props.entry.data.shortDescription}</p>
        </a>
    );
};

const formatDate = (date: Date): string => {
    const formattedDate = date.toLocaleString("en-US", DATE_OPTIONS);
    return formattedDate;
};

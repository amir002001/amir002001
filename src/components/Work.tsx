import type { CollectionEntry } from "astro:content";
import { useState } from "react";
import classnames from "classnames";

const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
};

export const Work = (props: { entry: CollectionEntry<"work"> }) => {
    const url = "/work/" + props.entry.slug;
    const [mouseOver, setMouseOver] = useState(false);

    return (
        <a
            href={url}
            className={classnames("p-8 border", mouseOver && "border-rose-500")}
            onMouseOver={() => setMouseOver(true)}
            onMouseOut={() => setMouseOver(false)}
        >
            <img
                className="w-fit"
                crossOrigin="anonymous"
                src={props.entry.data.image}
                alt={`${props.entry.data.title} project image`}
            />
            <h2
                className={classnames(
                    "block mt-4 text-2xl font-semibold tracking-wider relative",
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
            <h3 className="text-sm font-medium tracking-wide">
                {props.entry.data.role}
            </h3>
            <h4 className="text-sm">
                {formatDate(new Date(props.entry.data.startDate)) +
                    (props.entry.data.endDate
                        ? ` - ${formatDate(new Date(props.entry.data.endDate))}`
                        : "")}
            </h4>
            <p className="mt-2">{props.entry.data.shortDescription}</p>
        </a>
    );
};

const formatDate = (date: Date): string => {
    const formattedDate = date.toLocaleString("en-US", DATE_OPTIONS);
    return formattedDate;
};

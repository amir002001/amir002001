import type { CollectionEntry } from "astro:content";
import { useState } from "react";
import classnames from "classnames";

export const Project = (props: { entry: CollectionEntry<"projects"> }) => {
    const url = "/projects/" + props.entry.slug;
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
            <p className="mt-3 mb-4">{props.entry.data.shortDescription}</p>
            {props.entry.data.tech.length != 0 ? (
                <div className="mt-2 text-sm">
                    <span className="font-semibold">Technologies:</span>{" "}
                    {props.entry.data.tech.map((tech, index) => {
                        const builder = [];
                        builder.push(tech);
                        if (index != props.entry.data.tech.length - 1) {
                            builder.push(", ");
                        }
                        return builder.join("");
                    })}
                </div>
            ) : null}
            {props.entry.data.awards != null &&
                props.entry.data.awards != undefined &&
                props.entry.data.awards.length != 0 ? (
                <div className="mt-2 text-sm">
                    <span className="font-semibold">Awards:</span>{" "}
                    {props.entry.data.awards.map((award, index) => {
                        const builder = [];
                        builder.push(award);
                        if (index != props.entry.data.awards!.length - 1) {
                            builder.push(", ");
                        }
                        return builder.join("");
                    })}
                </div>
            ) : null}
        </a>
    );
};

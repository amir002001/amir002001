import type { CollectionEntry } from "astro:content";
import { ProjectButtons } from "./ProjectButtons";

export const Project = (props: { entry: CollectionEntry<"projects"> }) => {
    const url = "/projects/" + props.entry.slug;
    return (
        <div className="p-8 border">
            <a href={url} className="text-2xl font-semibold tracking-wider underline">
                {props.entry.data.title}
            </a>
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
            <ProjectButtons
                entry={props.entry}
                className="flex gap-2 justify-center mt-6"
            />
        </div>
    );
};

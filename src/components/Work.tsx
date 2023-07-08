import type { CollectionEntry } from "astro:content";

const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
};

export const Work = (props: { entry: CollectionEntry<"work"> }) => {
    const url = "/work/" + props.entry.slug;

    return (
        <div className="p-8 border">
            <img
                className="w-fit"
                crossOrigin="anonymous"
                src={props.entry.data.image}
                alt={`${props.entry.data.title} project image`}
            />
            <a
                href={url}
                className="block mt-4 text-2xl font-semibold tracking-wider underline"
            >
                {props.entry.data.title}
            </a>
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
        </div>
    );
};

const formatDate = (date: Date): string => {
    const formattedDate = date.toLocaleString("en-US", DATE_OPTIONS);
    return formattedDate;
};

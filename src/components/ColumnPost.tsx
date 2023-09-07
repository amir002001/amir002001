import type { CollectionEntry } from "astro:content";

const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
};

export const ColumnPost = (props: { entry: CollectionEntry<"columns"> }) => {
    const url = "/columns/" + props.entry.slug;

    return (
        <div className={"py-4"}>
            <div className="flex gap-1 items-baseline">
                <a
                    href={url}
                    className={
                        "font-medium relative underline decoration-gray-300 hover:decoration-black"
                    }
                >
                    {props.entry.data.title}
                </a>
                <h4 className="text-sm font-['Noto_Sans'] italic font-light text-gray-600">
                    {formatDate(props.entry.data.publishDate)}
                </h4>
            </div>
            <p className="mt-3">{props.entry.data.shortDescription}</p>
        </div>
    );
};

const formatDate = (date: Date): string => {
    const formattedDate = date.toLocaleString("en-US", DATE_OPTIONS);
    return formattedDate;
};

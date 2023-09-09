import type { CollectionEntry } from "astro:content";
import { Margin } from "./Margin";

export const MarginList = (props: {
    marginalia: CollectionEntry<"marginalia">[];
}) => {
    return (
        <ul className="flex flex-col gap-1 mt-4">
            {props.marginalia
                .sort(
                    (margin1, margin2) =>
                        margin2.data.publishDate.getTime() -
                        margin1.data.publishDate.getTime()
                )
                .map((margin) => (
                    <Margin key={margin.id} entry={margin} />
                ))}
        </ul>
    );
};

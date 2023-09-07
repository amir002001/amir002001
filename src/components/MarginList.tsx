import type { CollectionEntry } from "astro:content";
import { Margin } from "./Margin";

export const MarginList = (props: {
    marginalia: CollectionEntry<"marginalia">[];
}) => {
    return (
        <ul className="flex flex-col gap-4 mt-4">
            {props.marginalia.map((margin) => (
                <Margin key={margin.id} entry={margin} />
            ))}
        </ul>
    );
};

import type { CollectionEntry } from "astro:content";
import { Margin } from "./Margin";

export const MarginList = (props: {
    marginalia: CollectionEntry<"marginalia">[];
}) => {
    return (
        <section className="my-12 w-4/5 max-w-[65ch]">
            <ul className="flex flex-col gap-8 mt-4">
                {props.marginalia.map((margin) => (
                    <Margin key={margin.id} entry={margin} />
                ))}
            </ul>
        </section>
    );
};

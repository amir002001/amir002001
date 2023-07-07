import type { CollectionEntry } from "astro:content";
import { Work } from "./Work";
import { useState } from "react";

type SortKey = "date" | "name";

export const WorkList = (props: { allWork: CollectionEntry<"work">[] }) => {
    const [sortKey, setSortKey] = useState<SortKey>("date");

    const handleSortKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSortKey(e.target.value as SortKey);
    };

    const sortFn = (
        work1: CollectionEntry<"work">,
        work2: CollectionEntry<"work">
    ): number => {
        if (sortKey === "date") {
            const [date1, date2] = [
                new Date(work1.data.startDate),
                new Date(work2.data.startDate),
            ];
            return date1 < date2 ? 1 : -1;
        } else if (sortKey === "name") {
            return work1.data.title > work2.data.title ? 1 : -1;
        }
        return 0;
    };

    return (
        <section className="my-12 w-4/5 max-w-[65ch]">
            <div className="flex gap-3 text-sm">
                <span>sort by:</span>
                <div className="flex items-center">
                    <input
                        id="date-radio"
                        value="date"
                        type="radio"
                        name="inline-radio-group"
                        className="w-4 h-4 bg-gray-100 text-slate-700 ring-slate-700 focus:ring-slate-800"
                        checked={sortKey === "date"}
                        onChange={handleSortKeyChange}
                    />
                    <label htmlFor="date-radio" className="ml-2 font-medium">
                        latest
                    </label>
                </div>
                <div className="flex items-center">
                    <input
                        id="name-radio"
                        type="radio"
                        value="name"
                        name="inline-radio-group"
                        className="w-4 h-4 bg-gray-100 text-slate-700 ring-slate-700 focus:ring-slate-800"
                        checked={sortKey === "name"}
                        onChange={handleSortKeyChange}
                    />
                    <label htmlFor="name-radio" className="ml-2 font-medium">
                        name
                    </label>
                </div>
            </div>
            <ul className="flex flex-col gap-8 mt-4">
                {props.allWork.sort(sortFn).map((work) => (
                    <Work key={work.id} entry={work} />
                ))}
            </ul>
        </section>
    );
};

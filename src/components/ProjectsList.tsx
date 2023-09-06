import type { CollectionEntry } from "astro:content";
import { Project } from "./Project";

export const ProjectsList = (props: {
    allProjects: CollectionEntry<"projects">[];
}) => {
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
                    />
                    <label htmlFor="name-radio" className="ml-2 font-medium">
                        name
                    </label>
                </div>
            </div>
            <ul className="flex flex-col gap-8 mt-4">
                {props.allProjects.map((project) => (
                    <Project key={project.id} entry={project} />
                ))}
            </ul>
        </section>
    );
};

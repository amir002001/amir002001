export interface Link {
    title: string;
    target?: string;
    href: string;
}

export const links: Link[] = [
    {
        title: "blog",
        href: "/blog",
    },
    {
        title: "work",
        href: "/work",
    },
    {
        title: "projects",
        href: "/projects",
    },
    {
        title: "about",
        href: "/about",
    },
];

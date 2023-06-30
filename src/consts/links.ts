export interface Link {
    title: string;
    target?: string;
    href: string;
}

export const links: Link[] = [
    {
        title: "projects",
        href: "/projects",
    },
    {
        target: "_blank",
        title: "linkedin",
        href: "https://linkedin.com/in/amir-afshar",
    },
    {
        target: "_blank",
        title: "twitter",
        href: "https://twitter.com/amirloveskiwis",
    },
    {
        target: "_blank",
        title: "resume",
        href: "https://docsend.com/view/mni63p69dkxknkkj",
    },
];

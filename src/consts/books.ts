interface Book {
    rating: 1 | 2 | 3 | 4 | 5;
    title: string;
    author: string;
}

export type Year = 2023 | 2024;

export const books: { [year in Year]?: Book[] } = {
    "2023": [
        {
            rating: 4,
            title: "Atomic Habits",
            author: "James Clear",
        },
        {
            rating: 2,
            title: "Hyperfocus",
            author: "Chris Bailey",
        },
        {
            rating: 4,
            title: "Building a Second Brain",
            author: "Tiago Forte",
        },
        {
            rating: 2,
            title: "Refactoring UI",
            author: "Adam Wathan & Steve Schoger",
        },
        {
            rating: 4,
            title: "Mastering Go",
            author: "Mihalis Tsoukalos",
        },
        {
            rating: 1,
            title: "The Deadline Effect",
            author: "Christopher Cox",
        },
        {
            rating: 5,
            title: "Flowers for Algernon",
            author: "Daniel Keyes",
        },
        {
            rating: 4,
            title: "Attached",
            author: "Amir Levine",
        },
        {
            rating: 5,
            title: "If on a Winter's Night a Traveller",
            author: "Italo Calvina",
        },
        {
            rating: 3,
            title: "Metamorphosis",
            author: "Franz Kafka",
        },
        {
            rating: 2,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
        },
        {
            rating: 4,
            title: "The Alchemist",
            author: "Paulo Coelho",
        },
        {
            rating: 4,
            title: "The Prophet",
            author: "Khalil Gibran",
        },

        {
            rating: 4,
            title: "A Scanner Darkly",
            author: "Philip K. Dick",
        },
    ],
};

import { quoteSet } from "./quote-model"

export const ALL_QUOTES = quoteSet(
    {
        quote: {
            de: "Die zwei wichtigsten Dinge im Leben sind Petersilie und Liebe.",
        },
        topics: ["life", "love"],
        learnedFrom: "Family",
    },
    {
        quote: {
            de: "What's cooking, good looking.",
        },
        type: "saying",
        topics: "greeting",
        learnedFrom: "unknown",
    },
    {
        quote: {
            en: "The only constant thing in life is change.",
        },
        type: "saying",
        topics: ["life", "change"],
        learnedFrom: "unknown",
    },
    {
        quote: {
            de: "Gute Pferde springen so hoch wie sie müssen.",
        },
        type: "saying",
        learnedFrom: "unknown",
    },
    {
        quote: {
            de: "Lass dich nicht erwischen.",
            en: "Don't get caught.",
        },
        defaultLanguage: "de",
        topics: ["farewell"],
        learnedFrom: "unknown",
    }
)

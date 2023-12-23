export const languageList = ["en", "de", "fr", "it"] as const

export type Language = (typeof languageList)[number]

export type Quote = {
    id: string
    quote: {
        [language in Language]?: string
    }
    defaultLanguage: Language
    topics: string[]
    type: string[]
    learnedFrom: string[]
    author: string[]
    source: string[]
}

export type QuoteInput = {
    id?: string
    quote: {
        [language in Language]?: string
    }
    defaultLanguage?: Language
    topics?: string | string[]
    type?: string | string[]
    learnedFrom?: string | string[]
    author?: string | string[]
    source?: string | string[]
}

export const quoteSet = (...quotes: Partial<QuoteInput>[]): Quote[] => {
    // @ts-ignore
    return quotes.map((quote, index) => {
        if (!quote.id) {
            quote.id = "index-id" + index
        }
        if (!quote.defaultLanguage) {
            const languages = Object.keys(quote?.quote || {})
            if (languages.length === 1) {
                quote.defaultLanguage = languages[0] as Language
            }
            if (languages.length === 0) {
                quote.defaultLanguage = "de"
            }
        }
        quote.topics = listify(quote.topics)
        quote.type = listify(quote.type)
        quote.learnedFrom = listify(quote.learnedFrom)
        quote.author = listify(quote.author)
        return quote
    })
}

const listify = (value: string | string[] | undefined): string[] => {
    if (value === undefined) {
        return []
    }
    if (typeof value === "string") {
        return [value]
    }
    return value
}

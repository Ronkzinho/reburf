export interface categorysInterface{
    name: "utility" | "fun" | null
    emoji: string
    hidden?: boolean | false
    translation?: string
}

export var categorys: Array<categorysInterface> = [{
    name: "utility",
    emoji: "🤡",
    translation: "Utilidade"
    },
{
    name: "fun",
    emoji: "🥳",
    translation: "Diversão"
},
{
    name: null,
    emoji: "🤔",
    translation: "Sem categoria"
}]
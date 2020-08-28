export interface categorysInterface{
    name: "utility" | "fun"
    emoji: "🤡" | "🥳" | "🤔"
    translation?: "Utilidade" | "Diversão" | "Sem categoria"
    hidden?: boolean
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
import { command, runCommand } from "../utils/command";
import {categorys } from "../utils/categorys";

export default abstract class extends command{
    initialEmojis: Array<string>
    categorysEmojis: Array<string>
    goBackOrDelete: Array<string>
    constructor(name, client){
        super(name, client)
        this.name = "help"
        this.category = "utility"
        this.description = "Comando de ajuda do bot!"
        this.usage = [`${this.name}`, `${this.name} <comando>`]
        this.aliases = ["ajuda", "h", "commands", "comandos"]
        this.allowDm = true
        this.initialEmojis = ["📂", "❌"]
        this.categorysEmojis = ["◀️", "❌", ...categorys.map(c => c.emoji)]
        this.goBackOrDelete = ["◀️", "❌"]
    }
    async run({ message, args }: runCommand){
        var helpClass = new this.client.classes.Help(this, this.client)
        if(args[0]){
            var { msg, error } = await helpClass.sendCommandHelp(message, args)
            if(error) return message.channel.send(error)
            await msg.react("❌")
            var collector = await helpClass.createCollector(message, msg, ["❌"])   
            collector.on("collect", () => helpClass.deleteAll(message, msg))
        }
        else{
            var { msg } = await helpClass.sendIntialEmbed(message)
            this.initialEmojis.map(async (emoji) => await msg.react(emoji))
            const goBackOrDeleteCollector = helpClass.createCollector(message, msg, this.goBackOrDelete)
            const intialCollector = helpClass.createCollector(message, msg, this.initialEmojis.filter(e => !this.goBackOrDelete.includes(e)))
            intialCollector.on("collect", async () => {
                await helpClass.sendCategorysEmbed(message, msg)
                const categorysCollector = helpClass.createCollector(message, msg, this.categorysEmojis.filter(e => !this.goBackOrDelete.includes(e)))
                categorysCollector.on("collect", async (reaction) => {
                    await helpClass.sendCommandsEmbed(message, msg, categorys.find(c => c.emoji === reaction.emoji.name))
                    this.goBackOrDelete.map(async (emoji) => {
                        await msg.react(emoji)
                    })
                })
            })
            goBackOrDeleteCollector.on("collect", async (reaction) => {
                if(reaction.emoji.name === "◀️"){
                    helpClass.goBack(message, msg)
                }
                else{
                    helpClass.deleteAll(message, msg)
                }
            })
        }
    }
}
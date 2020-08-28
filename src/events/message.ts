import { Message } from "discord.js"
import Reburf from "../client"

export default async function(this: Reburf, message: Message){
    const pJ = this.parseJson
    if(message.author.bot) return
    if(message.content.startsWith(`<@${this.user.id}>`) || message.content.startsWith(`<@!${this.user.id}`)) return message.channel.send(pJ(this.messages.client.mention, { prefix: this.prefix }))
    if(!message.content.startsWith(this.prefix)) return
    var args = message.content.slice(this.prefix.length).split(/ +/g)
    var command = args.shift()!.toLowerCase()!
    if(!command || command === ""){
        return message.channel.send(this.errors.help.noCommandName)
    }
    var commandFile = this.commands.find(cmd => cmd.name === command || cmd.aliases.includes(command))
    message.reactions.removeAll()
    if(commandFile){
        if(!commandFile.allowDm && message.channel.type === "dm" || ((commandFile.manutencion || commandFile.owner) && !this.owners.includes(message.author.id))) return
        commandFile.run({ message, args, pJ })
    }
    else{
        await message.react("❓")
        var collector = await message.createReactionCollector((reaction, user) => user.id === message.author.id && reaction.emoji.name === "❓", { time: 30000, max: 1 })
        collector.on("collect", () => {
            message.channel.send(pJ(this.errors.command.notFoundCommand, { prefix: this.prefix , command }))
        })
    }
}
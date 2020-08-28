import { MessageEmbed, Message, MessageEmbedOptions } from "discord.js";

export default class Embed extends MessageEmbed{
    constructor(options: MessageEmbedOptions = {}, message?: Message, type?:number){
        super(options)
        message && (type ? type === 3 || (type > 5 && type < 6) : true) && this.setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
        message && (type ? type === 2 || (type > 4 && type < 7): true) && this.setTimestamp()
        message && (type ? type === 1 || (type > 3 && type < 8): true) && this.setColor(message.member.displayColor)
    }
}
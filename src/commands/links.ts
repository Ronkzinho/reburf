import { command, runCommand } from "../utils/command";
import Embed from "../utils/Classes/Embed";

export default abstract class extends command{
    constructor(name, client){
        super(name, client)
        this.name = "links"
        this.aliases = ["l"]
        this.allowDm = true
        this.category = "utility"
        this.description = "Comando para que você possa ver os links relacionados ao bot!"
        this.usage = [`${this.name}`]
    }
    async run({ message, pJ }: runCommand){
        const fields = []
        this.client.messages.commands.links.fields.map(c => {
            var { inviteLink, gitHubRepository } = this.client
            c.value = pJ(c.value, { inviteLink, gitHubRepository })
            fields.push(c)
        })
        const embed = new Embed({
            title: `Olá, ${this.client.owners.includes(message.author.id) ? "dono, como está seu dia?" : message.author.username + ", tudo bem?"}`,
            description: `${pJ(this.client.messages.commands.links.desciption, { owner0: this.client.owners[0], owner1: this.client.owners[1] })}`,
            fields
        }, message)
        message.channel.send(embed)
    }
}
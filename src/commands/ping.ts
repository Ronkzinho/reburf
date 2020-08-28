import { command, runCommand } from "../utils/command";
import Embed from "../utils/Classes/Embed";

export default abstract class extends command{
    constructor(name, client){
        super(name, client)
        this.name = "ping"
        this.aliases = ["p"]
        this.category = "utility"
        this.usage = [`${this.name}`]
        this.description = `Comando para saber a latência do bot!`
    }
    async run({ message }: runCommand){
        let msg = await message.channel.send(new Embed({ title: "Calculando..." }, message, 1))
        setTimeout(() => {
            msg.edit(new Embed({ title: "Pong!", description: `${msg.createdTimestamp - message.createdTimestamp}ms` }, message, 1))
        }, 1)
    }
}
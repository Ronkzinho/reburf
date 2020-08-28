import { command, runCommand } from "../utils/command";

export default abstract class extends command{
    constructor(name, client){
        super(name, client)
        this.name = "gadiao"
        this.category = "fun"
        this.usage = [`${this.name}`]
        this.description = "Comando de diversão kakajota!"
    }
    async run({ message }: runCommand){
        message.channel.send("kakajota? 😳")
    }
}
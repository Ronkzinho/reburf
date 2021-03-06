import Reburf from "../client"
import { Message } from "discord.js";
import { categorysInterface } from "./categorys";

export interface commandIterface extends command{}
export interface runCommand{
    message: Message
    args: Array<string>
    pJ: Reburf["parseJson"]
}
export class command implements commandIterface{
    name: string;
    client: Reburf;
    aliases: Array<string>;
    allowDm: boolean;
    category: categorysInterface["name"];
    manutencion: boolean;
    owner: boolean;
    description: string;
    usage: Array<string>;
    hidden: boolean;
    constructor(client: Reburf){
        this.name = null
        this.client = client
        this.allowDm = false
        this.manutencion = false
        this.hidden = false
        this.owner = false
        this.description = null
        this.category = null
        this.aliases = []
        this.usage = []
    }
    run({ }: runCommand){ }
}
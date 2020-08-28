import Reburf from "../client";
import { Message } from "discord.js";
import { isNull } from "util";

export default async function(this: Reburf, oM: Message, nM: Message){
    if(oM.author.bot) return
    if(oM.content.startsWith(this.prefix)) return
    nM.createdTimestamp = nM.editedTimestamp
    this.emit("message", nM)
}
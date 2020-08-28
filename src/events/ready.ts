import Reburf from "../client";
import { connect } from "http2";

export default async function(this: Reburf){
    console.log(this.user.username + " onlainer")
    this.filteredCommands = this.commands.filter(c => !c.hidden && !c.owner && !c.manutencion)
    this.user.setActivity({ name: `comandos com meu prefixo: ${this.prefix}`, type: 3 })
}
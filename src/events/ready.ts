import Reburf from "../client";
import { connect } from "http2";

export default async function(this: Reburf){
    console.log(this.user.username + " onlainer")
    this.inviteLink = `https://discord.com/oauth2/authorize?client_id=${this.user.id}&scope=bot&permissions=8`
    this.gitHubRepository = `https://github.com/${this.users.cache.get(this.owners[0]).username}/${this.user.username}/`
    this.filteredCommands = this.commands.filter(c => !c.hidden && !c.owner && !c.manutencion)
    this.user.setActivity({ name: `comandos com meu prefixo: ${this.prefix}`, type: 3 })
}
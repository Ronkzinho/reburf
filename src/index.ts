import "dotenv/config"
import Reburf from "./client"

const client = new Reburf(process.env.PREFIX)

client.login(process.env.TOKEN)
require('dotenv').config();
import "reflect-metadata";
import { Client } from "discordx";
import { Intents, Message } from "discord.js";
import * as path from 'path'
const client = new Client({
  botId: "test",
  // prefix: "!",
  prefix: async (message: Message) => {
    return "!";
  },
  // glob string to load the classes
  classes: [path.join(__dirname, "commands","**/*.{js,ts}"),
  path.join(__dirname, "events", "**/*.{ts,js}"),
],
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
  ],
  silent: false,
});

client.on("ready", () => {
  console.log(">> Bot started");

  // to create/update/delete discord application commands
  client.initApplicationCommands();
});

client.login(process.env.BOT_TOKEN ?? "");
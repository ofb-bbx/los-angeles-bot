const Discord = require("discord.js");
const client = new Discord.Client();

require("dotenv").config();

const token = process.env.token;
const prefix = process.env.prefix;

client.on("ready", () => {
  console.log(`${client.user.tag}`);
});

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "test")) {
    message.channel.send("Test réussi!");
  }
});

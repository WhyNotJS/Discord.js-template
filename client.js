const { Client, GatewayIntentBits, Partials } = require('discord.js');
const { token } = require("./config.json")
const { handleInteractions } = require('./handlers/handleInteractions')
const { handleEvents } = require('./handlers/handleEvents')
const { handleClietOptions } = require('./handlers/handleClientOptions')
const { options } = require('./utitlites/clientOptions')
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildPresences ],
    partials: [Partials.Channel]
});

handleClietOptions(client, options)
handleInteractions(client)
handleEvents(client)

process.on("unhandledRejection", async (reason, promise) => {
    console.log(reason)
});

client.login(token);
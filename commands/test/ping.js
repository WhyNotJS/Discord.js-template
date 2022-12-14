const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Just a ping-pong command!'),
    run: async (client, interaction) => {
        interaction.reply('Pong!')
    }
}
const { ActivityType } = require("discord.js");

module.exports = async (client) => {
    client.user.setActivity({
        name: "Ты мне не враг.",
        type: ActivityType.Streaming,
        url: "https://twitch.tv/;ohsdaf;agbsdfcbda'fgsa'fgsd'f",
    });

    console.log(`${client.user.tag} is ready. RAM: ${process.memoryUsage().heapUsed / 1024 / 1024}mb, cpu: ${process.cpuUsage().user / 1024 / 1024}%`);
    const commands = [];
    client.commands.each(command => commands.push(command.data));

    client.application.commands.set(commands);
}

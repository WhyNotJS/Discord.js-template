function defaultHandler(interaction) {
    return interaction.reply({
        content: "Простите Вай Нотика, он ещё не сделал эту команду ;<",
        allowedMentions: {
            repliedUser: false
        },
        ephemeral: true
    });
}

module.exports = async (client, interaction) => {
    function handleInteraction(type) {
        const interact = type === 'commands' ? client[type].get(interaction.commandName) : client[type].get(interaction.customId)
        if (interact && interact.run) interact.run(client, interaction)
        else defaultHandler(interaction);
    }

    if (interaction.isCommand()) return handleInteraction('commands')
    else if (interaction.isButton()) return handleInteraction('buttons')
    else return handleInteraction('selectmenues')
}
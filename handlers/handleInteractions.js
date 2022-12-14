const { readdirSync } = require("node:fs");

function handleInteractions(client) {
    const interactions = ['commands', 'buttons', 'selectmenues']

    interactions.forEach((type, index) => {
        readdirSync(`./${type}`).forEach(directory => {
            let interactionFiles = readdirSync(`./${type}/${directory}`).filter(file => file.endsWith('.js'))
            for (let i = 0; i < interactionFiles.length; i++) {
                const interactionFile = require(`../${type}/${directory}/${interactionFiles[i]}`);
                if (index > 0) client[type].set(interactionFile.data.id, interactionFile)
                else {
                    const commandData = interactionFile.data.toJSON()
                    client.commands.set(commandData.name, interactionFile);
                }
            }
        })
        console.log(`\x1b[34m[interactions]\x1b[32m ${type.toUpperCase()} were registred!\x1b[0m`)
    })
}

module.exports = { handleInteractions }
const { readdirSync } = require('node:fs')

function handleEvents(client) {
    console.log(`\x1b[33m[EVENTS]\x1b[36m Events handler started!\x1b[0m`)
    readdirSync('events').forEach(directory => {
        let eventFiles = readdirSync(`./events/${directory}`).filter(file => file.endsWith('.js'))
        for (let i = 0; i < eventFiles.length; i++) {
            const eventRun = require(`../events/${directory}/${eventFiles[i]}`)
            const eventName = eventFiles[i].replace('.js', '')
            client.on(eventName, (...args) => eventRun(client, ...args))

        }
    })
}

module.exports = { handleEvents }
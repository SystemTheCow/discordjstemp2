const { Client, Collection } = require('discord.js')
const fs = require('fs')
const client = new Client({
    intents: 32767,
})

const { slash } = require(`${__dirname}/src/utils/handler/comandos.js`)
const { eventos } = require(`${__dirname}/src/utils/handler/eventos.js`)

eventos(fs, client)
slash(fs, client, Collection)

client.login(require('./src/config.json').bot.token)
const { SlashCommandBuilder } = require('@discordjs/builders');

const builder = new SlashCommandBuilder()
    .setName('borrar')	
    .setDescription('Comando para borrar mensajes')
    .addStringOption(option => option.setName('nombre').setDescription('El nombre de la nueva insignia').setRequired(true))
    .addNumberOption(option => option.setName('numero').setDescription('el numero').setRequired(false))  

module.exports = {
    builder: builder.toJSON(),
    name: 'borrar',
    async execute(interaction, user, options, client) {
        interaction.reply('hola')
    }
}
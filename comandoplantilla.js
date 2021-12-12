const { SlashCommandBuilder } = require('@discordjs/builders');

const builder = new SlashCommandBuilder()
    .setName('nombreComando')	
    .setDescription('Descripcion comando')
    .addStringOption(option => option.setName('nombre').setDescription('La descripcion de la opcion').setRequired(true))

module.exports = {
    builder: builder.toJSON(),
    name: 'nombreComando',
    async execute(interaction, user, options, client) {
        interaction.reply('hola')
    }
}
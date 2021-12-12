module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if(interaction.isCommand()){
            if(client.commands.has(interaction.commandName)){
                let command = await client.commands.get(interaction.commandName)
                let user = interaction.user
                let options = [] 
                interaction.options._hoistedOptions.forEach(option => options.push(option.value))
                command.execute(interaction, user, options, client);
            }
            
            
        }
    }
}
module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`${client.user.tag} está online!`);
        await client.application?.commands.set(client.commands.map(c => c.builder), '809973181573496852')
    }
}
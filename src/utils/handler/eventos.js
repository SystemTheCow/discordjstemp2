module.exports.eventos = function(fs, client) {
    const eventFiles = fs.readdirSync(__dirname + "/" + `../../eventos/`).filter((file) => file.endsWith(".js"));
    for (const file of eventFiles) {
      const event = require(__dirname + "/" + `../../eventos/${file}`);
      if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
      } else {
        client.on(event.name, (...args) => event.execute(...args, client));
      }
    }
}
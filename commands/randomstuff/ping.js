exports.run = (client, message, args) => {
    message.channel.send("pong = " + `\`${client.ws.ping} ms\``).catch(console.error);
}
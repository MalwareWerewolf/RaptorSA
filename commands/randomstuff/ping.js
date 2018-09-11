exports.run = (client, message, args) => {
    message.channel.send("pong = " + `\`${client.ping} ms\``).catch(console.error);
}
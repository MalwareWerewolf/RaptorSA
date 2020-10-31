exports.run = (client, message, args) => {
    try {
        message.channel.send(`pong = ${client.ws.ping} ms`);
    } catch (error) {
        console.error(error);
    }
}
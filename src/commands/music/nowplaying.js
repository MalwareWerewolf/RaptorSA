exports.run = async (client, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);
    if(!fetched)
        return message.channel.send("There isn't any music playing in this guild!");
        
    let queue = fetched.queue;
    let nowPlaying = queue[0];

    let resp = `__**Now playing**__\n**${nowPlaying.songTitle}** -- Requested by **${nowPlaying.requester}**`;
    message.channel.send(resp);    
}
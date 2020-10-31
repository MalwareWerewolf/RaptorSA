exports.run = async (client, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);
    let voiceChannel = message.member.voice.channel;
    
    if(!fetched)
        return message.channel.send("There isn't any music playing in this guild!");
    
    if(!voiceChannel)
        return message.channel.send("You are not in a voice channel");        

    let userCount = voiceChannel.members.size;
    
    let required = Math.ceil(userCount/2);

    if(!fetched.queue[0].voteSkips)
        fetched.queue[0].voteSkips = [];
    
    if(fetched.queue[0].voteSkips.includes(message.member.id))
        return message.channel.send(`Sorry you already voted to skip! ${fetched.queue[0].voteSkips.length}/${required} required`)    

    fetched.queue[0].voteSkips.push(message.member.id);
    
    ops.active.set(message.guild.id, fetched);

    if(fetched.queue[0].voteSkips.length >= required){
        message.channel.send("Successfully skipped song!");
        return fetched.dispatcher.emit('end');
    }

    message.channel.send(`Successfully voted to skip! ${fetched.queue[0].voteSkips.length}/${required} required`);

}
exports.run = async (client, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);
    
    if(!fetched)
        return message.channel.send("There isn't any music playing in this guild!");
            
    if(!message.member.voice.channel)
        return message.channel.send("You are not in a voice channel");        

    if(fetched.dispatcher.paused)
        return message.channel.send("The music is already paused");
        
    fetched.dispatcher.pause();    
    
    message.channel.send(`Successfully paused the track **${fetched.queue[0].songTitle}**`);    
}
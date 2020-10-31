exports.run = async (client, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);
    if(!fetched)
        return message.channel.send("There isn't any music playing in this guild!");
    
    if(!message.member.voice.channel)
        return message.channel.send("You are not in a voice channel");    
    
    if(isNaN(args[0]) || args[0] > 200 || args[0] < 0)
        return message.channel.send("Please input a number betweem 0-200");
    
    fetched.dispatcher.setVolume(args[0]/100);
    
    message.channel.send(`Successfully set volume of **${fetched.queue[0].songTitle}** to ${args[0]}`);
}
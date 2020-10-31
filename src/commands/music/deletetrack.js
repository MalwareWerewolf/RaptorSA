exports.run = (client, message, args, ops) => {
    const audioUrl = message.content.split(' ');
    var convertTrack;

    let fetched = ops.active.get(message.guild.id);
    if(!fetched)
        return message.channel.send("There isn't any music playing in this guild!");
    let queue = fetched.queue;

    if(queue.length == 1){
        return message.channel.send("There are not tracks in the queue to remove!");
    }

    try{
        convertTrack = parseInt(audioUrl[1]);

        if(convertTrack > (queue.length))
            return message.channel.send("I couldn't remove the song from the queue!");

        message.channel.send(`The track **${fetched.queue[convertTrack].songTitle}** has been removed from the queue`); 

        queue.splice(convertTrack, 1);    

    }

    catch(error){
        return message.channel.send("You did not enter an integer number!");
    }
}
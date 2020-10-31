exports.run = async (client, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);
    if(!fetched)
        return message.channel.send("There isn't any music playing in this guild!");
    let queue = fetched.queue;

    let resp = '__**Queue**__\n';

    if(queue.length > 1){
        for(var i=1; i<queue.length; i++){
            resp += `${i}. **${queue[i].songTitle}** -- Requested by **${queue[i].requester}**\n`
        }

        return message.channel.send(resp);    
    
    }
    else {
        return message.channel.send(`There are no songs in the queue!`);    
    }
}
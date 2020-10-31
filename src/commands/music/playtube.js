const ytdl = require('ytdl-core');

exports.run = async (client, message, args, ops) => {
    voiceChannel = message.member.voice.channel;
    if(!voiceChannel)
        return message.channel.send("You are not in a voice channel");
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if(!permissions.has('CONNECT'))
        return message.channel.send("You don't have the right permissions");
    if(!permissions.has('SPEAK'))
        return message.channel.send("You don't have the right permissions to speak");

    let validate = await ytdl.validateURL(args[0]);

    if(!validate)
        return message.channel.send("Enter a valid youtube url please!");

    let info = await ytdl.getInfo(args[0]);

    let data = ops.active.get(message.guild.id) || {};

    if(!data.connection) 
        data.connection = await message.member.voice.channel.join();
    if(!data.queue)
        data.queue = [];
    data.guildID = message.guild.id;
    
    data.queue.push({
        songTitle: info.title,
        requester: message.author.tag,
        url: args[0],
        announceChannel: message.channel.id
    });

    if(!data.dispatcher) play(client, ops, data);

    else
        message.channel.send(`Added to queue: **${info.title}** | requested by **${message.author.username}**`);

    ops.active.set(message.guild.id, data);
}

async function play(client, ops, data){

    data.dispatcher = await data.connection.play(ytdl(data.queue[0].url, {filter: 'audioonly'}));

    data.dispatcher.guildID = data.guildID;

    data.dispatcher.once('end', function(){
        finish(client, ops, this);
    });
}

function finish(client, ops, dispatcher){
    let fetched = ops.active.get(dispatcher.guildID);

    fetched.queue.shift();

    if(fetched.queue.length > 0){
        ops.active.set(dispatcher.guildID, fetched);

        play(client, ops, fetched);
    }

    else{

        ops.active.delete(dispatcher.guildID);

        let vc = client.guilds.get(dispatcher.guildID).me.voiceChannel;

        if(vc) vc.leave();
    }
}
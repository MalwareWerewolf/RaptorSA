const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const url = message.content.split(' ');  
    const embed = new Discord.MessageEmbed();
    voiceChannel = message.member.voice.channel;

    if(!voiceChannel)
        return message.channel.send("You are not in a voice channel");
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if(!permissions.has('CONNECT'))
        return message.channel.send("You don't have the right permissions");
    if(!permissions.has('SPEAK'))
        return message.channel.send("You don't have the right permissions to speak");

    if(!url[1] || url[1] === undefined){
        return message.channel.send("You did not paste radio url!");
    } 
    
    message.member.voice.channel.join().then(connection => {
        require('http').get(url[1], (res) => {
            connection.playStream(res);
            embed.setColor("#b92727");
            embed.setDescription("Playing correctly!");
            message.channel.send({ embed });
        });
    }).catch(err => "**Error:** ```\n" + err + "```");
}
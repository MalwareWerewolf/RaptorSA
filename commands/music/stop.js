exports.run = (client, message, args) =>{
    if(!message.member.voiceChannel)
        return message.channel.send("You are not in a voice channel");
    else{
        message.channel.send("Bye bye!");
        return message.guild.me.voiceChannel.leave();
    }	
        
}
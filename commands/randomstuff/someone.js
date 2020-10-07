const Discord = require('discord.js');

var sToggle = true;

exports.run = (client, message, args) =>{

    if(sToggle === true && !args[0]) {
            let randoMember = message.guild.members.cache.random().id;
            message.channel.send('<@' + randoMember + '>');
    }
    else if(sToggle === false && message.member.hasPermission('ADMINISTRATOR') && !args[0]) {
            let randoMember = message.guild.members.cache.random().id;
            message.channel.send('<@' + randoMember + '>');
    } 
        
    if(args[0] === "toggle" && message.member.hasPermission('ADMINISTRATOR')) {
    sToggle = !sToggle;
        if(sToggle === true) {
            message.channel.send("Enabled `someone` globally.")
        }
        else {
            message.channel.send("Disabled `someone` globally. Command locked to ADMINS only.")
        }
    }
}

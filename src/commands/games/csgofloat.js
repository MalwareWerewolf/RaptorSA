const Discord = module.require('discord.js');
var getJSON = require('get-json');

exports.run = async (client, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    if(!args){
        return message.channel.send(":x: " + "| Please enter an inspect link for your awesome skin/weapon");
    }
    else{
        getJSON("https://api.csgofloat.com/?url=" + args, function(error, data){

            if(data == undefined){
                return message.channel.send(":x: " + "| Please enter a valid inspect link for your awesome skin/weapon");
            }

            var embed = new Discord.MessageEmbed()
                .addField("Weapon Name: ", data.iteminfo.weapon_type, true)
                .addField("Weapon Skin Name: ", data.iteminfo.item_name, false)
                .addField("Float Value: ", data.iteminfo.floatvalue, true)
                .addField("Requested by: ", `${member.user.tag}`)
                .addField("Powered by: ", `[csgofloat.com](https://csgofloat.com/)`)
                .setThumbnail(data.iteminfo.imageurl)
                .setTimestamp()
                .setColor("0x#FF0000")
            message.channel.send(embed);
        })
    }  
}
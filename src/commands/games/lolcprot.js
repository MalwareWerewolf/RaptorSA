const Discord = module.require('discord.js');
const championName = require(__dirname+'/../../functions/lolcpid.js');
const fs = require('fs');
var getJSON = require('get-json');

exports.run = async (client, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    var myChampions = [];
    var championId = "";
    var dataToPush = "";

    fs.readFile(__dirname + '/../../jsonFiles/lolConfig.json', (err, dataJson) => {  
        if (err) throw err;
        let lolApiKey = JSON.parse(dataJson);	
        getJSON("https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key="+lolApiKey.apiKey, function(error, data){
        
            for(var i = 0; i<14; i++){
                championId = championName.getChampionName(data.freeChampionIds[i])
                dataToPush = championId;
                myChampions.push(dataToPush);
            }

            var embed = new Discord.MessageEmbed()
                .addField("Free champion rotation: ", myChampions.join('\n'), true)
                .addField("Requested by: ", `${member.user.tag}`)
                .addField("Powered by: ", `[developer.riotgames.com](https://developer.riotgames.com/)`)
                .setTimestamp()
                .setColor("0x#FF0000")
            message.channel.send(embed);
        })
    });
}
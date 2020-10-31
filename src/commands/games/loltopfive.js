const Discord = module.require('discord.js');
const championName = require(__dirname+'/../../functions/lolcpid.js');
const fs = require('fs');
var getJSON = require('get-json');

exports.run = async (client, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    var myChampions = [];
    var championId = "";
    var dataToPush = "";

    if(!args){
        return message.channel.send("Please enter a valid Summoner ID!");
    }
    else{
        fs.readFile(__dirname + '/../../jsonFiles/lolConfig.json', (err, dataJson) => {  
            if (err) throw err;
            let lolApiKey = JSON.parse(dataJson);	
            getJSON("https://euw1.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/"+args+"?api_key="+lolApiKey.apiKey, function(error, data){

                if(data == undefined){
                    return message.channel.send("Please enter a valid Summoner ID!");
                }

                for(var i = 0; i<5; i++){
                    championId = championName.getChampionName(data[i].championId)
                    dataToPush = "**Champion level:** " + data[i].championLevel + ' - **Name**: ' + championId + ' - **Champion points since last level:** ' + data[i].championPointsSinceLastLevel + ' - **Champions points until next level:** ' + data[i].championPointsUntilNextLevel;
                    myChampions.push(dataToPush);
                }
                
                var embed = new Discord.MessageEmbed()
                    .addField("Top 5 champions played: ", myChampions.join('\n'), true)
                    .addField("Requested by: ", `${member.user.tag}`)
                    .addField("Powered by: ", `[developer.riotgames.com](https://developer.riotgames.com/)`)
                    .setTimestamp()
                    .setColor("0x#FF0000")
                message.channel.send(embed);
                
            })
        });
    }  
}
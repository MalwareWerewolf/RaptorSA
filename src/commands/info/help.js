const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {
    const command = message.content.split(' '); 

    if(command[1] == undefined){
        const embed = new Discord.MessageEmbed()
            .setColor("#FF4500")
            .addField("Commands",`You can view commands at [github.com](https://github.com/Cramenorn/RaptorSA#commands)`);
        message.channel.send(embed);    
    }

    else if(command[1] != undefined){ 
        fs.readFile(__dirname + '/../../jsonFiles/commands.json', (err, dataJson) => {  
            if (err) throw err;
            let helpMe = JSON.parse(dataJson);
            let commandName = command[1];

            try{
                const embed = new Discord.MessageEmbed()
                    .setColor("#FF4500")
                    .addField(`Command: $${helpMe[commandName].name}`,`Group: ${helpMe[commandName].group}\n`+`Desc: ${helpMe[commandName].desc}\n`+`Usage: ${helpMe[commandName].usage}\n`+`Example: ${helpMe[commandName].example}\n`);
                message.channel.send(embed);    
            }
            catch(error){
                message.channel.send("I could not find that command!");
            }
        });
    }
}
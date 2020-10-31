const Discord = require('discord.js');
const geolib = require('geolib');

exports.run = async (client, message, args) => {
    try{
        const coordinates = message.content.split(' ');
        var distance = geolib.getDistance({latitude: coordinates[1], longitude: coordinates[2] }, {latitude: coordinates[3], longitude: coordinates[4]});

        var distanceKM = geolib.convertDistance(distance, 'km')

        let serverembed = new Discord.MessageEmbed()
            .setColor("#0000FF")
            .addField("latitude1 & longitude1", `${coordinates[1]}, ${coordinates[2]}`, true)
            .addField("latitude2 & longitude2", `${coordinates[3]}, ${coordinates[4]}`, true)
            .addField("Distance (km)", `${distanceKM}`);

        message.channel.send(serverembed);    
    }
    catch(error){
        console.log(error);
        message.channel.send("You must type 4 numbers !distance [latitude1] [longitude1] [latitude2] [longitude2], for example 4.1233123 5344.1231231 6.3423423 712312.123123123");
    }
}
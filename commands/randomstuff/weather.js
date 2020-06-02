const Discord = require('discord.js');
var YQL = require('yql');

exports.run = (client, message, args) =>{
    const city = message.content.split(' '); 

    if(isNaN(city[1])){
        var query = new YQL('select * from geo.places where text="'+city[1]+'"');
    }

    else{
        return message.channel.send("I could not find the weather.");
    }

    
    query.exec(function(err, data) {
        try{
            var linkForecast = data.query.results;
            console.log(linkForecast);
            var location = data.query.results.channel.location;
            var wind = data.query.results.channel.wind;
            var atmosphere = data.query.results.channel.atmosphere;
            var sunRise = "";
            var astronomy = data.query.results.channel.astronomy;
            var forecast = data.query.results.channel.item.forecast[0];
            var latLong = data.query.results.channel.item;
            var units =  data.query.results.channel.units;
            var condition = data.query.results.channel.item.condition;
        }

        catch(error){
            console.log(error);
            return message.channel.send("I could not find the weather.");
        }

        if(atmosphere.rising == 0){
            sunRise = "steady";
        }

        else if(atmosphere.rising == 1){
            sunRise = "rising";
        }

        else if(atmosphere.rising == 2){
            sunRise = "falling";
        }

        const embed = new Discord.RichEmbed()
            .setTitle(`Current weather in ${location.city} part of the region ${location.region} in ${location.country}`)
            .setThumbnail(`https://westwoodhorizon.com/wp-content/uploads/2018/03/category_weather_500x500.png`)
            .setColor("#FF4500")
            .setTimestamp()
            .addField(`Wind speed | Direction | Chill:`, `Wind Speed: ${wind.speed} ${units.speed} `+`\n`+`Wind direction: ${wind.direction}°`+`\n`+`Wind chill: ${wind.chill}°`, false)
            .addField(`Humidity | Visibility:`, `Humidity: ${atmosphere.humidity}% `+`\n`+`Visibility: ${atmosphere.visibility} ${units.distance}`, true)
            .addField(`Pressure | Rising:`, `Pressure: ${atmosphere.pressure} ${units.pressure} `+`\n`+`Rising: ${sunRise}`, true)
            .addField(`Sunrise | Sunset:`,`Sunrise: ${astronomy.sunrise}`+`\n`+`Sunset: ${astronomy.sunset}`, true)
            .addField(`Conditions | Temperature | Date time:`,`Conditions: ${condition.text}`+`\n`+`Temperature: ${condition.temp} °${units.temperature}`+`\n`+`Date time: ${condition.date}`,false)
            .addField(`Highest | Lowest temperatures: `, `Highest: ${forecast.high} °${units.temperature}`+`\n`+`Lowest: ${forecast.low} °${units.temperature}`, true)
            .addField(`Latitude | Longitude: `, `Latitude: ${latLong.lat}`+`\n`+`Longitude: ${latLong.long}`, true)
            .addField(`Library: `, `[yahoo weather api](https://developer.yahoo.com/weather/?guccounter=2)`, true)
            .addField(`URL for the weather: `, `[Forecast](${linkForecast.link})`,true);
            
        message.channel.send(embed);    
    });
}
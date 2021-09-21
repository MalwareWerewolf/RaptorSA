const Discord = require('discord.js');
const Enmap = require("enmap");
const client = new Discord.Client();
const fs = require('fs');

client.config = require("../config/config.json");



fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
    });
});

client.commands = new Enmap();

const command_Folders = Fs.readdirSync('./commands');

 for (const folder of command_Folders) {
 const command_Files = Fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
 for (const file of command_Files) {
 const command = require(`./commands/${folder}/${file}`); 

client.commands.set(command.name, command);
 }
}
//checks if there is a file inside a folder inside the commands folder 

client.login(client.config.token);



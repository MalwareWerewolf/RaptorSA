const Discord = require('discord.js');

module.exports = (client, member) =>{
	// Send the message to a designated channel on a server:
	const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
	
	// Do nothing if the channel wasn't found on this server
	if (!channel) return;
	// Send the message, mentioning the member
	member.send(`Welcome to the server ${member} please read the rule channel and enjoy your journey to our server!`);
	
	let sicon = member.user.displayAvatarURL();
	let serverembed = new Discord.MessageEmbed()
		.setColor("#ff0000")
		.setThumbnail(sicon)
		.addField("Here comes a new challenger!",`A new member has joined to our server ${member}`)
		.addField("Where should i start ?","You must check the faq-rules channel, which is above all other channels.");

	channel.send(serverembed);
}
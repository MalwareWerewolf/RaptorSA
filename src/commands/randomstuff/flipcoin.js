var flipcoin = ["heads", "tails"];

exports.run = (client, message, args) =>{
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    var randomIndex = Math.floor(Math.random() * flipcoin.length); 

    message.channel.send(`<@${member.user.id}> `+ flipcoin[randomIndex]);
}
exports.run = async (client, message, args) => {
    const newName = message.content.split(' ');

    if(!message.member.hasPermission("ADMINISTRATOR")){
        return message.channel.send("You don't have the permissions to use this command!");
    }
    
    try{
        client.user.setUsername(newName[1])
            .then(user => message.channel.send(`My new username is **${user.username}**`))
            .catch(console.error);
    }
    catch(error){
        message.channel.send("I could not set my new username :sob:");
    }
}
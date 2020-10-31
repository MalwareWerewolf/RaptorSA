exports.run = (client, message, args) =>{
    //Pay attention in order to assign a role of a user, the bot needs to be above that role, that means you can't assign an equal or highest role than bot's role
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
    
    if(!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")){
        message.channel.send("You don't have the permissions to use this command!");
    }

    else{

        if(!rMember) 
            return message.channel.send("Couldn't find that user, yo.");

        let role = args.join(" ").slice(23);
        if(!role) 
            return message.channel.send("Specify a role!");

        let gRole = message.guild.roles.cache.find(roles => roles.name === role);
        if(!gRole) 
            return message.channel.send("Couldn't find that role.");

        if(rMember.roles.cache.has(gRole.id)) 
            return message.channel.send("They already have that role.");

        else{
            rMember.roles.add(gRole.id).catch(console.error);
            
            try{
                rMember.send(`Congrats, you have been given the role ${gRole.name}`);
                message.channel.send(`The user ${rMember} has a new role ${gRole.name}`);
            }
            catch(e){
                console.log(e.stack);
                message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}.`)
            }
        }
    }
}
exports.run = (client, message, args) =>{
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

        if(!rMember.roles.cache.has(gRole.id)) 
            return message.reply("They don't have that role.");
        
        else{
            rMember.roles.remove(gRole.id).catch(console.error);
            
            try{
                rMember.send(`Sorry, you lost the ${gRole.name} role`);
                message.channel.send(`The user ${rMember} has lost the ${gRole.name} role`);
            }
            catch(e){
                console.log(e.stack);
                message.channel.send(`RIP to <@${rMember.id}>, We removed ${gRole.name} from them.`)
            }
        }
    }
}
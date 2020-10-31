exports.run = async (client, message, args) =>{
  const deleteCount = parseInt(args[0], 10);

  // get the delete count, as an actual number.
  if(!message.member.hasPermission("MANAGE_MESSAGES")){
    message.channel.send("You don't have the permissions to use this command!");
  }
  
  else{        
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100){
      return message.channel.send("Please provide a number between 2 and 100 for the number of messages to delete");
    }
    
    await message.channel.bulkDelete(deleteCount).catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }   
}
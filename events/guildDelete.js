module.exports = (client, guild) => {
    client.logger.cmd(`[GUILD LEAVE] ${guild.name} (${guild.id}) removed the bot.`);
  
    // If the settings Enmap contains any guild overrides, remove them.
    // No use keeping stale data!
    if (client.settings.has(guild.id)) {
      client.settings.delete(guild.id);
    }
};
const GuildLog = require('../models/GuildLog');

module.exports = {
  name: 'messageDelete',
  async execute(message, client) {
    try {
      if (!message.guild || message.author.bot) return;

      // Loglama
      const log = new GuildLog({
        guildId: message.guild.id,
        type: 'message_delete',
        userId: message.author.id,
        username: message.author.username,
        description: `Mesaj silindi - İçerik: ${message.content.substring(0, 100)}...`,
        changes: {
          content: message.content,
          channel: message.channel.name
        }
      });
      await log.save();

    } catch (error) {
      console.error('messageDelete hatası:', error);
    }
  }
};

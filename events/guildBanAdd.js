const { EmbedBuilder } = require('discord.js');
const GuildLog = require('../models/GuildLog');

module.exports = {
  name: 'guildBanAdd',
  async execute(ban, client) {
    try {
      const guild = ban.guild;
      const banLogChannelId = process.env.BAN_LOG_CHANNEL_ID;

      if (banLogChannelId) {
        const channel = guild.channels.cache.get(banLogChannelId);
        if (channel) {
          const embed = new EmbedBuilder()
            .setColor('#ff3333')
            .setTitle('⛔ Kullanıcı Banlandı')
            .setDescription(`${ban.user} banlandı!`)
            .setThumbnail(ban.user.displayAvatarURL({ dynamic: true }))
            .addFields(
              { name: 'Kullanıcı', value: `${ban.user.tag}`, inline: false },
              { name: 'Neden', value: ban.reason || 'Belirtilmemiş', inline: false }
            )
            .setTimestamp();

          await channel.send({ embeds: [embed] });
        }
      }

      // Loglama
      const log = new GuildLog({
        guildId: guild.id,
        type: 'member_ban',
        userId: ban.user.id,
        username: ban.user.username,
        description: `${ban.user.tag} banlandı - Neden: ${ban.reason || 'Belirtilmemiş'}`
      });
      await log.save();

    } catch (error) {
      console.error('guildBanAdd hatası:', error);
    }
  }
};

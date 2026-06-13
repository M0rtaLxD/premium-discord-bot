const mongoose = require('mongoose');

const guildLogSchema = new mongoose.Schema({
  guildId: { type: String, required: true },
  type: { 
    type: String, 
    enum: ['member_join', 'member_leave', 'member_ban', 'member_kick', 'message_delete', 'message_update', 'channel_create', 'channel_delete', 'channel_update', 'role_create', 'role_delete', 'role_update', 'voice_join', 'voice_leave', 'moderation_action'], 
    required: true 
  },
  userId: { type: String },
  username: { type: String },
  moderatorId: { type: String },
  moderatorName: { type: String },
  description: { type: String },
  changes: { type: mongoose.Schema.Types.Mixed },
  timestamp: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }
}, { collection: 'guild_logs' });

guildLogSchema.index({ guildId: 1, timestamp: -1 });

module.exports = mongoose.model('GuildLog', guildLogSchema);

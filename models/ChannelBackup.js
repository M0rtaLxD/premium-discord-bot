const mongoose = require('mongoose');

const channelBackupSchema = new mongoose.Schema({
  guildId: { type: String, required: true },
  channelId: { type: String, required: true },
  channelName: { type: String, required: true },
  channelType: { type: String },
  permissions: [{ type: mongoose.Schema.Types.Mixed }],
  topic: { type: String },
  nsfw: { type: Boolean },
  parentId: { type: String },
  position: { type: Number },
  rateLimitPerUser: { type: Number },
  createdAt: { type: Date },
  deletedAt: { type: Date },
  action: { type: String, enum: ['created', 'deleted', 'updated'] },
  recordedAt: { type: Date, default: Date.now }
}, { collection: 'channel_backups' });

module.exports = mongoose.model('ChannelBackup', channelBackupSchema);

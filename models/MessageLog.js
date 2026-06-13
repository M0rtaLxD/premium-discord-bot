const mongoose = require('mongoose');

const messageLogSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  username: { type: String, required: true },
  guildId: { type: String, required: true },
  channelId: { type: String, required: true },
  channelName: { type: String },
  content: { type: String },
  messageId: { type: String },
  attachments: [{ type: String }],
  edited: { type: Boolean, default: false },
  editedContent: { type: String },
  timestamp: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now, expire: 2592000 }
}, { collection: 'message_logs' });

messageLogSchema.index({ guildId: 1, timestamp: -1 });
messageLogSchema.index({ userId: 1 });

module.exports = mongoose.model('MessageLog', messageLogSchema);

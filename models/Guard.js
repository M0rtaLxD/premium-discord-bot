const mongoose = require('mongoose');

const guardSchema = new mongoose.Schema({
  guildId: { type: String, required: true },
  userId: { type: String, required: true },
  username: { type: String, required: true },
  type: { type: String, enum: ['spam', 'ads', 'swear', 'mention', 'bot'], required: true },
  level: { type: Number, default: 1 },
  action: { type: String, enum: ['warn', 'mute', 'kick', 'ban'] },
  role: { type: String },
  duration: { type: Number },
  reason: { type: String },
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  expiresAt: { type: Date }
}, { collection: 'guards' });

guardSchema.index({ guildId: 1 });
guardSchema.index({ userId: 1 });

module.exports = mongoose.model('Guard', guardSchema);

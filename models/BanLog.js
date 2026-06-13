const mongoose = require('mongoose');

const banLogSchema = new mongoose.Schema({
  guildId: { type: String, required: true },
  userId: { type: String, required: true },
  username: { type: String, required: true },
  reason: { type: String, default: 'Belirtilmemiş' },
  bannedBy: { type: String },
  bannedAt: { type: Date, default: Date.now },
  unbannedAt: { type: Date },
  unbannedBy: { type: String },
  active: { type: Boolean, default: true },
  duration: { type: Number },
  createdAt: { type: Date, default: Date.now }
}, { collection: 'ban_logs' });

module.exports = mongoose.model('BanLog', banLogSchema);

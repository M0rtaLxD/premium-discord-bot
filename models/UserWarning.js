const mongoose = require('mongoose');

const userWarningSchema = new mongoose.Schema({
  guildId: { type: String, required: true },
  userId: { type: String, required: true },
  username: { type: String, required: true },
  reason: { type: String, required: true },
  warnedBy: { type: String },
  removedBy: { type: String },
  removedAt: { type: Date },
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
}, { collection: 'user_warnings' });

module.exports = mongoose.model('UserWarning', userWarningSchema);

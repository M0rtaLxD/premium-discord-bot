const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  guildId: { type: String, required: true },
  username: { type: String, required: true },
  joinDate: { type: Date, default: Date.now },
  warningCount: { type: Number, default: 0 },
  banCount: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  xp: { type: Number, default: 0 },
  totalMessages: { type: Number, default: 0 },
  roles: [{ type: String }],
  verified: { type: Boolean, default: false },
  verifiedAt: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { collection: 'user_profiles' });

module.exports = mongoose.model('UserProfile', userProfileSchema);

const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  guildId: { type: String, required: true },
  userId: { type: String, required: true },
  username: { type: String, required: true },
  type: { type: String, enum: ['moderator', 'admin', 'helper'], required: true },
  answers: [{ type: String }],
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
  reviewedBy: { type: String },
  reviewedAt: { type: Date },
  reason: { type: String },
  createdAt: { type: Date, default: Date.now }
}, { collection: 'applications' });

module.exports = mongoose.model('Application', applicationSchema);

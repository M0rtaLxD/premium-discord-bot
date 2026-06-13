const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  guildId: { type: String, required: true },
  reportedUserId: { type: String, required: true },
  reportedUsername: { type: String, required: true },
  reporterId: { type: String, required: true },
  reporterUsername: { type: String, required: true },
  reason: { type: String, required: true },
  description: { type: String },
  evidence: [{ type: String }],
  status: { type: String, enum: ['open', 'investigating', 'resolved', 'rejected'], default: 'open' },
  handledBy: { type: String },
  handledAt: { type: Date },
  action: { type: String },
  createdAt: { type: Date, default: Date.now }
}, { collection: 'reports' });

module.exports = mongoose.model('Report', reportSchema);

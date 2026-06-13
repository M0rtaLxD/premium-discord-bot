const mongoose = require('mongoose');

const giveawaySchema = new mongoose.Schema({
  guildId: { type: String, required: true },
  messageId: { type: String, required: true },
  channelId: { type: String, required: true },
  creatorId: { type: String, required: true },
  prize: { type: String, required: true },
  winners: { type: Number, required: true },
  participants: [{ type: String }],
  winners_list: [{ type: String }],
  startedAt: { type: Date, required: true },
  endsAt: { type: Date, required: true },
  ended: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
}, { collection: 'giveaways' });

module.exports = mongoose.model('Giveaway', giveawaySchema);

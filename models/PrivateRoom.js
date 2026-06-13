const mongoose = require('mongoose');

const privateRoomSchema = new mongoose.Schema({
  guildId: { type: String, required: true },
  ownerId: { type: String, required: true },
  channelId: { type: String, required: true },
  channelName: { type: String, required: true },
  members: [{ type: String }],
  maxMembers: { type: Number },
  locked: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  deletedAt: { type: Date }
}, { collection: 'private_rooms' });

module.exports = mongoose.model('PrivateRoom', privateRoomSchema);

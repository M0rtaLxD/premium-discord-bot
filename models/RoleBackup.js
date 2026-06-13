const mongoose = require('mongoose');

const roleBackupSchema = new mongoose.Schema({
  guildId: { type: String, required: true },
  roleId: { type: String, required: true },
  roleName: { type: String, required: true },
  roleColor: { type: Number },
  permissions: { type: String },
  position: { type: Number },
  hoist: { type: Boolean },
  mentionable: { type: Boolean },
  createdAt: { type: Date },
  deletedAt: { type: Date },
  action: { type: String, enum: ['created', 'deleted', 'updated'] },
  recordedAt: { type: Date, default: Date.now }
}, { collection: 'role_backups' });

module.exports = mongoose.model('RoleBackup', roleBackupSchema);

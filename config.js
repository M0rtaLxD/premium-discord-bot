module.exports = {
  // Bot Settings
  prefix: process.env.PREFIX || '-/',
  token: process.env.TOKEN,
  mongoURI: process.env.MONGODB_URI,
  botId: process.env.BOT_ID,

  // Server Settings
  mainServerId: process.env.MAIN_SERVER_ID,
  modChannelId: process.env.MOD_CHANNEL_ID,
  logChannelId: process.env.LOG_CHANNEL_ID,
  welcomeChannelId: process.env.WELCOME_CHANNEL_ID,
  banLogChannelId: process.env.BAN_LOG_CHANNEL_ID,
  registrationChannelId: process.env.REGISTRATION_CHANNEL_ID,

  // Admin Settings
  adminIds: (process.env.ADMIN_IDS || '').split(',').filter(id => id),

  // Guard Settings
  guardSettings: {
    spamLimit: 5,
    spamTime: 5000,
    warningLimit: 3,
    muteTime: 60000
  },

  // Registration Settings
  registrationSettings: {
    enabled: true,
    roleId: null,
    channelId: null
  },

  // Colors
  colors: {
    success: '#00ff00',
    error: '#ff0000',
    warning: '#ffff00',
    info: '#0099ff',
    ban: '#ff3333',
    unban: '#33ff33'
  }
};

const { Client, GatewayIntentBits, Collection, ChannelType } = require('discord.js');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const config = require('./config');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildModeration
  ]
});

// Collections
client.commands = new Collection();
client.cooldowns = new Collection();
client.userWarnings = new Map();
client.userSpam = new Map();

// Load Commands
const commandsPath = path.join(__dirname, 'commands');
if (fs.existsSync(commandsPath)) {
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    try {
      const command = require(filePath);
      if (command.data && command.data.name) {
        client.commands.set(command.data.name, command);
        console.log(`✅ Komut yüklendi: ${command.data.name}`);
      }
    } catch (error) {
      console.error(`❌ Komut yükleme hatası (${file}):`, error);
    }
  }
}

// Load Events
const eventsPath = path.join(__dirname, 'events');
if (fs.existsSync(eventsPath)) {
  const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));
  for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    try {
      const event = require(filePath);
      if (event.name) {
        if (event.once) {
          client.once(event.name, (...args) => event.execute(...args, client));
        } else {
          client.on(event.name, (...args) => event.execute(...args, client));
        }
        console.log(`✅ Event yüklendi: ${event.name}`);
      }
    } catch (error) {
      console.error(`❌ Event yükleme hatası (${file}):`, error);
    }
  }
}

// MongoDB Connection
if (config.mongoURI) {
  mongoose.connect(config.mongoURI)
    .then(() => console.log('✅ MongoDB bağlantısı başarılı'))
    .catch(err => console.error('❌ MongoDB bağlantı hatası:', err));
}

// Bot Login
client.login(config.token);

module.exports = client;

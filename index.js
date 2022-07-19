const Discord = require('discord.js');
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_PRESENCES", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_VOICE_STATES",],
});

client.on('messageCreate', async message => {
  if (message.content.startsWith('!nit')) {
    const nitro = require('discord.js-nitro');
    const boost = false;
    message.channel.send(`${nitro`${(boost)}`}`);
  };
});

client.login(process.env.TOKEN);

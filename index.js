const Discord = require('discord.js');
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_PRESENCES", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_VOICE_STATES",],
});

client.on('ready', () => {
  client.user.setActivity('Replit', { status: "online" });
  console.log(`${client.user.tag}の起動完了`);
  console.log(`${client.guilds.cache.size}個のサーバーで稼働中`);
  console.log(`${client.users.cache.size}人が参加中です。`);
});


client.on('messageCreate', async message => {
  if (message.content.startsWith('t!nit')) {
    const nitro = require('discord.js-nitro');
    const boost = false;
    message.channel.send(`${nitro`${(boost)}`}`);
  }
})

client.login(process.env.TOKEN);
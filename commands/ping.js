const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
	          if (message.channel.type == 'dm') return;
  let msg = await message.channel.send('Getting...');
   msg.edit(`Pong! ${Math.round(client.ping)}ms`);
}
module.exports.help = {
  name: "ping"
}

const Discord = require('discord.js');
const translate = require('google-translate-api');
const token = require('google-translate-token');
module.exports.run = async(client, message, args) => {
	          if (message.channel.type == 'dm') return;
  if(!args[1]) return message.reply('Provide a language!');
  var word = args.slice(2).join(' ');
  if(!word) return message.reply('Provide a text to translate!');
  let msg = await message.channel.send('Translating...');
  translate(word, {to: args[1]}).then(res => {
    msg.delete();
    message.channel.send(res.text);
  });
}
module.exports.help = {
  name: "translate"
}

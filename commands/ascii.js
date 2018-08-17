const Discord = require('discord.js');
const ascii = require('figlet')
const canvas = require('canvas');
const fs = require('fs');
const text2png = require('text2png');
module.exports.run = async(client, message, args, ops) => {
	          if (message.channel.type == 'dm') return;
  if(!args[1]) return message.reply('Provide a text to convert!');
	ascii(args.slice(1).join(' '), 'ANSI Shadow', (err, rendered) => {
		if(err) return message.reply("This font doesn't support these characters!");
		message.channel.send({files:[text2png(rendered, {font: '18px Cousine', textColor: '#82ffa7'})]});
	});
}
module.exports.help = {
  name: "ascii"
}

const Discord = require('discord.js');
const text2png = require('text2png');
const fs = require('fs');
const canvas = require('canvas');
module.exports.run = async(client, message, args) => {
  if(message.channel.type === 'dm') return;
  let word = args.slice(1).join(' ');
  if(!word) return message.reply('Provide a text to convert!');
  message.channel.send({files:[text2png(word, {font: '72px Assyrian', textColor: '#82ffa7'})]}).catch(e => {
    if(e) throw e;
  });
}
module.exports.help = {
  name: "image"
}

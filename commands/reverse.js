const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
	          if (message.channel.type == 'dm') return;
  if(!args[1]) return message.reply('Provide a text to make it reversed!');
  function reverseString(str) {

    var newString = "";

    for (var i = str.length - 1; i >= 0; i--) {

        newString += str[i];

    }

    return newString;
}
var word = reverseString(args.slice(1).join(' '));
message.channel.send(`\`${word}\` :repeat:`);
}
module.exports.help = {
  name: "reverse"
}

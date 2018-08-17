const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
	          if (message.channel.type == 'dm') return;
      message.delete();
      let wChannel = message.mentions.channels.first();
      if (!wChannel) return message.reply('Provide a channel!');
      var word = args.slice(2).join(' ');
      if (!word) return message.reply('Provide a message to say!');
      else {
          wChannel.send(`${word}`);
          console.log(`${message.author.username} used tell command in ${wChannel}`);
          console.log(word);
      }
    }
    module.exports.help = {
      name: "tell"
    }

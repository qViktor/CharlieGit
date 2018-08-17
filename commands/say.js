const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
                if (message.channel.type == 'dm') return;
      message.delete();
      var word = args.slice(1).join(' ');
      if(!word) return message.reply('Provide a text to say!');
      message.channel.sendMessage(word);
      console.log(`${message.author.username} said ${word}`);
    }
    module.exports.help = {
      name: "say"
    }

const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
	          if (message.channel.type == 'dm') return;
      message.delete();
      let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);
      if (!User) return message.reply("Can't find a user to send message!");
      var ms = args.slice(2).join(' ');
      if (!ms) return message.reply('Write a message to send!');
      User.sendMessage(ms).catch(O_o => { });
      console.log(`${message.author.username} => ${User.displayName}`);
      console.log(`${ms}`);
    }
    module.exports.help = {
      name: "dm"
    }

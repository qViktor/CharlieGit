const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
	          if (message.channel.type == 'dm') return;
      if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have permission to manage messages!");
      let delValue = args.slice(1).join(' ');
      if (!delValue) return message.reply("Provide ammount of messages to purge!");
      if (delValue == '0') return message.reply("I can't delete 0 messages!");
      if (delValue > 100) return message.reply("I can't delete more than 100 messages!");
      message.channel.bulkDelete(delValue);
    }
    module.exports.help = {
      name: "purge"
    }

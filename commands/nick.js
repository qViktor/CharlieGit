const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
                if (message.channel.type == 'dm') return;
      if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.reply("You don't have permission to manage nicknames!");
      let mUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);
      if (!mUser) return message.reply("Can't find a user to change the nickname!");
      let nick = args.slice(2).join(' ');
      if (!nick) return message.reply('Enter a nickname!');;
      mUser.setNickname(nick).then(message.channel.send("Nickname was successfully changed!"));
    }
module.exports.help = {
  name: "nick"
}

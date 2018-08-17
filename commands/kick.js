const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
                if (message.channel.type == 'dm') return;
      if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply("You don't have permission to kick members!");
      var kUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);
      if (!kUser) return message.reply("Can't find a user to kick!");
      var kReason = args.slice(2).join(' ');
      if (!kReason) return message.reply('Enter a reason of kick');
      if (!kUser.kickable) return message.channel.send("Can't kick this user!");
      let msg = await message.channel.send('Kicking...');
      msg.delete();
      await message.channel.send(`${kUser} was kicked by ${message.author.username} for a reason: ${kReason}`);
      await kUser.kick();
}
module.exports.help = {
  name: "kick"
}

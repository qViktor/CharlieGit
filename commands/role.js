const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
	          if (message.channel.type == 'dm') return;
      if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You don't have permission to manage roles!");
      let rUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);
      if (!rUser) return message.reply("Can't find a user to add/remove the role!");
      let role = args.slice(2).join(' ');
      if (!role) return message.reply('Enter a name of role!');
      let grole = message.guild.roles.find('name', role);
      if (!grole) return message.reply("Can't find this role!");
      if (rUser.roles.has(grole.id)) {
          message.guild.member(rUser).removeRole(grole.id);
          message.channel.send(`${message.author.username} removed ${role} role from ${rUser}`);
      }
      else {
          message.guild.member(rUser).addRole(grole.id);
          message.channel.send(`${message.author.username} added ${role} role to ${rUser}`);
      }
    }
module.exports.help = {
  name: "role"
}

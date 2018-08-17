const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
	          if (message.channel.type == 'dm') return;
  let colors = ['#fffe00', '#ff0000', '#00ff63', '#00fff5', '#00c4ff', '#0063ff', '#0001ff', '#dd00ff'];
  let colRes = (colors[Math.floor((Math.random() * colors.length))]);
  if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply("You don't have permission to ban members!");
  let bUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);
  if (!bUser) return message.reply("Can't find a user to ban!");
  var bReason = args.slice(2).join(' ');
  if (!bReason) return message.reply('Enter a reason of ban!');
  if (!bUser.bannable) return message.channel.send("Can't ban this member!");
  let msg = await message.channel.send('Banning...');
  msg.delete()
  await message.channel.send(`${bUser} was banned by ${message.author.username} for a reason: ${bReason}`);
  await message.guild.member(bUser).ban();
    }
module.exports.help = {
  name: "ban"
}

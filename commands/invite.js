const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
               if (message.channel.type == 'dm') return;
      let colors = ['#fffe00', '#ff0000', '#00ff63', '#00fff5', '#00c4ff', '#0063ff', '#0001ff', '#dd00ff'];
      let colRes = (colors[Math.floor((Math.random() * colors.length))]);
      let inv = new Discord.RichEmbed()
      .setTitle('Bot Invite')
      .setColor(colRes)
      .addField('Link', '[Click](https://discordapp.com/api/oauth2/authorize?client_id=452817993039216640&permissions=8&scope=bot)')
      .setFooter(`Requested by ${message.author.username}`)
      message.channel.send(inv);
    }
module.exports.help = {
  name: "invite"
}

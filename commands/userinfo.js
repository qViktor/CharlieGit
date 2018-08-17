const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
                if (message.channel.type == 'dm') return;
      function generateHex() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
      let User = message.mentions.users.first() || message.author;
      var userCreated = User.createdAt.toString().split(' ');
      var userRoles = message.guild.member(User).roles.map(r => r).toString().split('  ');
      let rar = new Discord.RichEmbed()
          .setAuthor(`${User.username}`)
          .setColor(generateHex())
          .setThumbnail(`${User.displayAvatarURL}`)
          .addField('User Tag', User.tag)
          .addField('Status', User.presence.status)
          .addField('Is User a Bot?', User.bot)
          .addField('ID', User.id)
          .addField('Created at', userCreated[1] + '/' + userCreated[2] + '/' + userCreated[3] + '/' + userCreated[4])
          .addField('Roles', userRoles)
          .setTimestamp()
      message.channel.send(rar);
    }
module.exports.help = {
  name: "userinfo"
}

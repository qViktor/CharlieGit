const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
                if (message.channel.type == 'dm') return;
      function generateHex() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
      let bots = message.guild.members.filter(member => member.user.bot).size;
      let users = message.guild.memberCount - bots;
      var serverCreated = message.guild.createdAt.toString().split(' ');
      var joined = message.member.joinedAt.toString().split(' ');
      var server = new Discord.RichEmbed()
          .setTitle(`${message.guild.name}`)
          .setColor(generateHex())
          .setThumbnail(message.guild.iconURL)
          .addField('Owner', message.guild.owner)
          .addField('Server Region', message.guild.region)
          .addField('Members in general', message.guild.memberCount)
          .addField('Bots', bots)
          .addField('Humans', users)
          .addField('Roles Size', message.guild.roles.size)
          .addField('Server created at', serverCreated[1] + '/' + serverCreated[2] + '/' + serverCreated[3] + '/' + serverCreated[4])
          .addField('You joined at', joined[1] + '/' + joined[2] + '/' + joined[3] + '/' + joined[4])
          .setTimestamp()
      message.channel.send(server);
    }
    module.exports.help = {
      name: "server"
    }

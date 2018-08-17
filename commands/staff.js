const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
                if (message.channel.type == 'dm') return;
      function generateHex() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
      let staffEmbed = new Discord.RichEmbed()
      .setTitle('Staff Commands')
          .setColor(generateHex())
          .addField('Ban', '~ban <user> <reason>')
          .addField('Kick', '~kick <user> <reason>')
          .addField('Add/Remove role', '~role <user>')
          .addField('Clear messages', '~purge <1-100>')
          .addField('Change nickname', '~nick <user> <nickname>')
          .setTimestamp()
      message.channel.send(staffEmbed);
    }
    module.exports.help = {
      name: "staff"
    }

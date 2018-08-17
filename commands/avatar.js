const Discord = require('discord.js');
const superagent = require('superagent');
module.exports.run = async(client, message, args) => {
                  if (message.channel.type == 'dm') return;
        function generateHex() {
          return "#" + Math.floor(Math.random() * 16777215).toString(16);
      }
        let msg = await message.channel.send('Finding...');
        let user = message.mentions.users.first() || message.author;
        msg.delete();
        let body = superagent.get(`${user.displayAvatarURL}`);
        let avEm = new Discord.RichEmbed()
        .setTitle(user.tag)
        .setColor(generateHex())
        .setImage(`${user.displayAvatarURL}`)
        message.channel.send(avEm);
    }
module.exports.help = {
  name: "avatar"
}

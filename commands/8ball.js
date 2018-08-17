const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
          if (message.channel.type == 'dm') return;
          var fortunes = ['Yes', 'No', 'Sure', 'Dont', 'Cant', 'Try Again', ':100:'];
          var result = (fortunes[Math.floor((Math.random() * fortunes.length))]);
          var question = args.slice(1).join(' ');
          if (!question) return message.reply('Provide a question!');
          message.reply(`${result}`);
        }
module.exports.help = {
  name: "8ball"
}

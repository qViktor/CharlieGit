const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
	          if (message.channel.type == 'dm') return;
      const emojiLove = client.emojis.find('name', 'jhonfred_person_love');
      var ship = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
      var love = (ship[Math.floor(Math.random() * ship.length)]);
      var match = args.slice(1).join(' ');
      if(!match) return message.reply('Provide things to ship!');
      message.channel.send(`${emojiLove} Relationship: \`${match}\` = \`${love}%\` ${emojiLove}`);
    }
    module.exports.help = {
      name: "ship"
    }

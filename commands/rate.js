const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
                if (message.channel.type == 'dm') return;
      var thing = args.slice(1).join(' ');
      if(!thing) return message.reply('Provide a thing to rate!');
      let msg = await message.channel.send('Rating...');
      var rates = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
      var res = (rates[Math.floor((Math.random() * rates.length))]);
      msg.delete();
      message.channel.send(`Hmm, I rate ${thing} - ${res}/10`);
    }
    module.exports.help = {
      name: "rate"
    }

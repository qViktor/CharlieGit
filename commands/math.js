const Discord = require('discord.js');
const math = require('mathjs');
module.exports.run = async(client, message, args, tools) => {
	          if (message.channel.type == 'dm') return;
  let colors = ['#fffe00', '#ff0000', '#00ff63', '#00fff5', '#00c4ff', '#0063ff', '#0001ff', '#dd00ff'];
  let colRes = (colors[Math.floor((Math.random() * colors.length))]);
  if(!args[1]) return message.reply('Provide a calculation!');
  let resp;
  try{
      resp = math.eval(args.slice(1).join(' '));
    } catch(e) {
      return message.reply('Input a valid calculation!');
    }
    let msg = await message.channel.send('Calculating...');
    msg.delete();
      await message.reply(resp);
}
module.exports.help = {
  name: "math"
}

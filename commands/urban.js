const Discord = require('discord.js');
const urban = require('relevant-urban');
module.exports.run = async(client, message, args) => {
            if (message.channel.type == 'dm') return;
  function generateHex() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
  if(!args[1]) return message.reply('Provide a text to find!');
  let res = await urban(args.slice(1).join(' '));
  if(!res) return message.reply("Can't find it!");
  let urEm = new Discord.RichEmbed()
  .setTitle(res.word)
  .setURL(res.urbanURL)
  .setColor(generateHex())
  .addField('Definition', `${res.definition}`)
  .addField('Example', `${res.example}`)
  message.channel.send(urEm);
}
module.exports.help = {
  name: "urban"
}

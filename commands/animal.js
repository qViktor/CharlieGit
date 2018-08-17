const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const superagent = require('superagent');
const api = 'PsA7wsRiPBUqiV7Aotz5muZzQTSS9T5E';
module.exports.run = async(client, message, args) => {
            if (message.channel.type == 'dm') return;
  function generateHex() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
let msg = await message.channel.send('Generating...');
  const res = await superagent.get(`https://api.giphy.com/v1/gifs/random?api_key=PsA7wsRiPBUqiV7Aotz5muZzQTSS9T5E&tag=animal`, {json: true});
  let catEmbed = new Discord.RichEmbed()
  .setTitle('Random Animal ❓')
  .setColor(generateHex())
  .setImage(res.body.data.image_url)
  msg.delete();
  message.channel.send(catEmbed);
}
module.exports.help = {
	name: "animal"
}

const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
	          if (message.channel.type == 'dm') return;
		  function generateHex() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
let osuHelp = new Discord.RichEmbed()
.setColor(generateHex())
.setTitle('Osu Help')
.addField('~osu/mania/taiko/ctb <osu-username>', 'Sends osu! stats')
.addField('~osu/mania/taiko/ctb/top <osu-username>', 'Sends top 5 plays')
message.channel.send(osuHelp);
}
module.exports.help = {
	name: "osuhelp"
}

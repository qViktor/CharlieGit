const Discord = require('discord.js');
var osu = require('node-osu');
var osuApi = new osu.Api('3c132550f35e50d9751f476245f1e35e9d20278c', {
    notFoundAsError: true,
    completeScores: false
})
module.exports.run = async(client, message, args) => {
	          if (message.channel.type == 'dm') return;
	  function generateHex() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
	let osuUser = args.slice(1).join(' ');
	if(!osuUser) return message.reply('Provide a user to find!');
	osuApi.getUser({m: '0', u: osuUser}).then(user => {
		function accuracy() {
		return parseFloat(user.accuracy).toFixed(2) + '%';
	}
	let osuEmbed = new Discord.RichEmbed()
	.setTitle(`${user.name}'s osu!std stats`)
	.setThumbnail(`https://a.ppy.sh/${user.id}?1517070337.png`)
	.setColor(generateHex())
	.addField('ID', user.id)
	.addField('Level', user.level)
	.addField('Accuracy', accuracy())
	.addField('PP', user.pp.raw)
	.addField('Rank', user.pp.rank)
	.addField('Country Rank', user.pp.countryRank)
	.addField('SS', user.counts.SS)
    .addField('S', user.counts.S)
    .addField('Playcount', user.counts.plays)
	message.channel.send(osuEmbed);

});
}
module.exports.help = {
	name: "osu"
}

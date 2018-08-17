const Discord = require('discord.js');
var osu = require('node-osu');
var osuApi = new osu.Api('3c132550f35e50d9751f476245f1e35e9d20278c', {
    notFoundAsError: true,
    completeScores: true
})
module.exports.run = async(client, message, args) => {
	          if (message.channel.type == 'dm') return;
	  function generateHex() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
	let osuUser = args.slice(1).join(' ');
	if(!osuUser) return message.reply('Provide a user to get scores!');
	osuApi.getUser({u: osuUser}).then(user => {
		osuApi.getUserBest({m: '3', u: osuUser}).then(scores => {
				function mods() {
		if (this._mods !== undefined)
			return this._mods;
		this._mods = [];
		for (let mod in mods) {
			if (this.raw_mods & mods[mod])
				this._mods.push(mod);
		}
		return this._mods;
	}
			let osuEmbed = new Discord.RichEmbed()
			.setTitle(`${user.name}'s osu!mania Top Scores`)
			.setThumbnail(`https://a.ppy.sh/${user.id}?1517070337.png`)
      .addField(`${scores[0][1].title} - ${scores[0][1].version}`, `Max Combo: ${scores[0][0].maxCombo} || Miss: ${scores[0][0].counts.miss} \rScore: ${scores[0][0].score} || Rank: ${scores[0][0].rank} \rModes: ${scores[0][0].mods} || PP: ${scores[0][0].pp}`)
    .addField(`${scores[1][1].title} - ${scores[1][1].version}`, `Combo: ${scores[1][0].maxCombo} || Miss: ${scores[1][0].counts.miss} \rScore: ${scores[1][0].score} || Rank: ${scores[1][0].rank} \rModes: ${scores[1][0].mods} || PP: ${scores[1][0].pp}`)
    .addField(`${scores[2][1].title} - ${scores[2][1].version}`, `Combo: ${scores[2][0].maxCombo} || Miss: ${scores[2][0].counts.miss} \rScore: ${scores[2][0].score} || Rank: ${scores[2][0].rank} \rModes: ${scores[2][0].mods} || PP: ${scores[2][0].pp}`)
    .addField(`${scores[3][1].title} - ${scores[3][1].version}`, `Combo: ${scores[3][0].maxCombo} || Miss: ${scores[3][0].counts.miss} \rScore: ${scores[3][0].score} || Rank: ${scores[3][0].rank} \rModes: ${scores[3][0].mods} || PP: ${scores[3][0].pp}`)
    .addField(`${scores[4][1].title} - ${scores[4][1].version}`, `Combo: ${scores[4][0].maxCombo} || Miss: ${scores[4][0].counts.miss} \rScore: ${scores[4][0].score} || Rank: ${scores[4][0].rank} \rModes: ${scores[4][0].mods} || PP: ${scores[4][0].pp}`)
			.setColor(generateHex())
			message.channel.send(osuEmbed);
});
});
}
module.exports.help = {
	name: "maniatop"
}

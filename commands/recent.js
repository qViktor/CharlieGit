const Discord = require('discord.js');
var osu = require('node-osu');
var osuApi = new osu.Api('3c132550f35e50d9751f476245f1e35e9d20278c', {
    notFoundAsError: true,
    completeScores: true
})
const osuPP = require('osu-pp-calculator');
module.exports.run = async(client, message, args) => {
	          if (message.channel.type == 'dm') return;
	  function generateHex() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
let modes = args[1];
if(!args[1]) return message.reply('Provide a mode! std/mania/taiko/ctb');
let osuUser = args.slice(2).join(' ');
if(!args[2]) return message.reply('Provide a user to get a recent score!');
if(modes === 'std'){
	osuApi.getUser({u: osuUser}).then(user => {
osuApi.getUserRecent({m: '0', u: osuUser}).then(scores => {
  let s = scores[0][0];
  let combo = s.counts['50'] + s.counts['100'] + s.counts['300'] + s.counts['geki'] + s.counts['katu'];

	if(!scores) return message.reply("No recent scores found!");
					function mods() {
		if (this._mods !== undefined)
			this._mods = 'NoMode';
		this._mods = ['HR', 'SD', 'PF', 'DT', 'NC', 'HD', 'FL'];
		for (let mod in Mods) {
			if (this.raw_mods & Mods[mod])
				this._mods.push(mod);
		}
		return this._mods;
	}
	let recEm = new Discord.RichEmbed()
	.setTitle(`${user.name}'s osu!std Recent Play`)
	.setColor(generateHex())
	.setThumbnail(`https://a.ppy.sh/${user.id}?1517070337.png`)
	.addField(`${scores[0][1].title} - ${scores[0][1].version}`, `Combo: ${scores[0][0].maxCombo} || Miss: ${scores[0][0].counts.miss} \rScore: ${scores[0][0].score} || Modes: ${scores[0][0].mods} \rRank: ${scores[0][0].rank} || PP: ${scores[0][0].pp}`)
	.addField('Download Map', `[Download](https://osu.ppy.sh/b/${scores[0][1].id})`)
	message.channel.send(recEm);

});
});
}
if(modes === 'mania'){
	osuApi.getUser({u: osuUser}).then(user => {
osuApi.getUserRecent({m: '3', u: osuUser}).then(scores => {
  let s = scores[0][0];
  let combo = s.counts['50'] + s.counts['100'] + s.counts['300'] + s.counts['geki'] + s.counts['katu'];
		if(!scores) return message.reply("No recent scores found!");
					function mods() {
		if (this._mods !== undefined)
			this._mods = 'NoMode';
		this._mods = [];
		for (let mod in Mods) {
			if (this.raw_mods & Mods[mod])
				this._mods.push(mod);
		}
		return this._mods;
	}
	uc = user.country.toLowerCase();
	let recEm = new Discord.RichEmbed()
	.setTitle(`${user.name}'s osu!mania Recent Play`)
	.setColor(generateHex())
	.setThumbnail(`https://a.ppy.sh/${user.id}?1517070337.png`)
	.addField(`${scores[0][1].title} - ${scores[0][1].version}`, `Combo: ${scores[0][0].maxCombo} || Miss: ${scores[0][0].counts.miss} \rScore: ${scores[0][0].score} || Modes: ${scores[0][0].mods} \rRank: ${scores[0][0].rank} || PP: ${scores[0][0].pp}`)
	.addField('Download Map', `[Download](https://osu.ppy.sh/b/${scores[0][1].id})`)
	message.channel.send(recEm);

});
});
}
if(modes === 'taiko'){
	osuApi.getUser({u: osuUser}).then(user => {
osuApi.getUserRecent({m: '1', u: osuUser}).then(scores => {
  let s = scores[0][0];
  let combo = s.counts['50'] + s.counts['100'] + s.counts['300'] + s.counts['geki'] + s.counts['katu'];
		if(!scores) return message.reply("No recent scores found!");
					function mods() {
		if (this._mods !== undefined)
			this._mods = 'NoMode';
		this._mods = [];
		for (let mod in Mods) {
			if (this.raw_mods & Mods[mod])
				this._mods.push(mod);
		}
		return this._mods;
	}
	uc = user.country.toLowerCase();
	let recEm = new Discord.RichEmbed()
	.setTitle(`${user.name}'s osu!taiko Recent Play`)
	.setColor(generateHex())
	.setThumbnail(`https://a.ppy.sh/${user.id}?1517070337.png`)
	.addField(`${scores[0][1].title} - ${scores[0][1].version}`, `Combo: ${scores[0][0].maxCombo} || Miss: ${scores[0][0].counts.miss} \rScore: ${scores[0][0].score} || Modes: ${scores[0][0].mods} \rRank: ${scores[0][0].rank} || PP: ${scores[0][0].pp}`)
	.addField('Download Map', `[Download](https://osu.ppy.sh/b/${scores[0][1].id})`)
	message.channel.send(recEm);

});
});
}
if(modes === 'ctb'){
	osuApi.getUser({u: osuUser}).then(user => {
osuApi.getUserRecent({m: '2', u: osuUser}).then(scores => {
  let s = scores[0][0];
  let combo = s.counts['50'] + s.counts['100'] + s.counts['300'] + s.counts['geki'] + s.counts['katu'];
		if(!scores[0][1].id) return message.reply("No recent scores found!");
					function mods() {
		if (this._mods !== undefined)
			this._mods = 'NoMode';
		this._mods = [];
		for (let mod in Mods) {
			if (this.raw_mods & Mods[mod])
				this._mods.push(mod);
		}
		return this._mods;
	}
	uc = user.country.toLowerCase();
	let recEm = new Discord.RichEmbed()
	.setTitle(`${user.name}'s osu!ctb Recent Play`)
	.setColor(generateHex())
	.setThumbnail(`https://a.ppy.sh/${user.id}?1517070337.png`)
	.addField(`${scores[0][1].title} - ${scores[0][1].version}`, `Combo: ${scores[0][0].maxCombo} || Miss: ${scores[0][0].counts.miss} \rScore: ${scores[0][0].score} || Modes: ${scores[0][0].mods} \rRank: ${scores[0][0].rank} || PP: ${scores[0][0].pp}`)
	.addField('Download Map', `[Download](https://osu.ppy.sh/b/${scores[0][1].id})`)
	message.channel.send(recEm);

});
});
}
}
module.exports.help = {
	name: "recent"
}

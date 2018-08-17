const Discord = require('discord.js');
const Prefix = "~";
module.exports.run = async(client, message, args) => {
                if (message.channel.type == 'dm') return;
      function generateHex() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
      var helpEmbed = new Discord.RichEmbed()
      .setTitle('Charlie Bot Help')
      .setColor(generateHex())
      .addField('Avatar cmd', '~avatar')
      .addField('8ball cmd', '~8ball <question>')
      .addField('DM cmd', '~dm <user> <message>')
      .addField('Urban cmd', '~urban <term>')
	  .addField('Osu cmds', '~osuhelp')
      .addField('Translate cmd', '~translate <to> <text>')
      .addField('Random GIF', '~dog/cat/animal/anime/manga')
      .addField('Convert cmd', '~ascii/hex/binary/image <text>')
      .addField('Math cmd', '~math <calculation>')
      .addField('Say cmds', '~say <message>/~tell #channel <message>')
      .addField('Rate cmd', '~rate <thing>')
      .addField('Serverinfo cmd', '~server')
      .addField('Userinfo cmd', '~userinfo')
      .addField('Reverse text cmd', '~reverse <text>')
      .addField('Ship cmd', '~ship <me + charlie>')
      .addField('Staff cmds', '~staff')
      .addField('Invite Charlie', '~invite')
      .setFooter('Bot Dev - Selfish ✓#0001')
      .setTimestamp()
      message.channel.send(helpEmbed);
    }
    module.exports.help = {
      name: "help"
    }

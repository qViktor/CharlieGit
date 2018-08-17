const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require('discord.js');
const TOKEN = process.env.TOKEN;
const Prefix = '~';
const fs = require('fs');
let coins = require('./coins.json');
let xp = require('./xp.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split('.').pop() === 'js');
  if(jsfile.length <= 0){
    console.log("Can't find commands!");
    return;
  }
jsfile.forEach((f, i) => {
  let props = require(`./commands/${f}`);
  console.log(`${f} loaded`);
  client.commands.set(props.help.name, props);
})
})
client.on('ready', () => {
    client.user.setStatus('Online');
    client.user.setGame('~help | Selfish ✓', 'https://twitch.tv/qselfish');
    console.log(`Dog Period`);
});
client.on('message', async message => {
  let colors = ['#fffe00', '#ff0000', '#00ff63', '#00fff5', '#00c4ff', '#0063ff', '#0001ff', '#dd00ff'];
  let colRes = (colors[Math.floor((Math.random() * colors.length))]);
    let messageArray = message.content.split(" ");
    let prefix = '~';
    let cmd = messageArray[0].toLowerCase();
    var args = message.content.substring(Prefix.length).split(' ');
    let commandFile = client.commands.get(cmd.slice(Prefix.length));
    if(cmd.startsWith(Prefix)){
    if(commandFile) commandFile.run(client, message, args);
  }
          function generateHex() {
          return "#" + Math.floor(Math.random() * 16777215).toString(16);
      }
       if (!xp[message.author.id]) {
            xp[message.author.id] = {
                xp: 0,
                level: 1
            };
        }
        let xpAdd = Math.floor(Math.random() * 3) + 4;
        let curxp = xp[message.author.id].xp;
        let curlvl = xp[message.author.id].level;
        let nxtlvl = xp[message.author.id].level * 500;
        let difference = xp[message.author.id].xp = nxtlvl - curxp;
        xp[message.author.id].xp = curxp + xpAdd;
        if (nxtlvl <= xp[message.author.id].xp) {
            xp[message.author.id].level = curlvl + 1;
            message.channel.send(`OMG!!! ${message.author} just advanced to level ${curlvl + 1}. GG!!!`);
        }
        fs.writeFile('./xp.json', JSON.stringify(xp), (err) => {
            if (err) console.log(err);
        });
    if (cmd === Prefix + 'level') {
        let kUser = message.mentions.users.first() || message.author;
        if (kUser.id === '349972812095684608') {
            let aEm = new Discord.RichEmbed()
                .setColor('#9200ff')
                .setTitle(`${kUser.tag}`)
                .setThumbnail(kUser.displayAvatarURL)
                .addField('Level', '666')
                .addField('Xp', '666')
                .addField('Xp to new level', '666')
                .setFooter('Bot Developer')
                .setTimestamp()
            message.channel.send(aEm);
        }
        else {
            if (!xp[kUser.id]) return message.channel.send("This user isn't ranked yet!");
            let lvlEm = new Discord.RichEmbed()
                .setTitle(kUser.tag)
                .setThumbnail(kUser.avatarURL)
                .setColor(generateHex())
                .addField('Level', `${xp[kUser.id].level}`)
                .addField('XP', `${xp[kUser.id].xp}`)
                .addField('XP to new level', `${xp[kUser.id].level * 500 - xp[kUser.id].xp}`)
            message.channel.send(lvlEm);
        }
    }
    if (!coins[message.author.id]) {
        coins[message.author.id] = {
            coins: 0
        };
    }
    let coinAmt = Math.floor(Math.random() * 2) + 3;
    let baseAmt = Math.floor(Math.random() * 2) + 3;
    if (coinAmt === baseAmt) {
        coins[message.author.id] = {
            coins: coins[message.author.id].coins + coinAmt
        };
        fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
            if (err) console.log(err);
        });
    }
    if(cmd === Prefix + 'balance'){
      let uUser = message.mentions.users.first() || message.author;
      let uCoins = coins[uUser.id].coins;
      const ruby = client.emojis.find('name', 'dony');
      if (uUser.id === '349972812095684608') {
          let curEmbed = new Discord.RichEmbed()
              .setTitle(`${uUser.tag}`)
              .setThumbnail(uUser.displayAvatarURL)
              .setColor('#9200ff')
              .addField('Currency', `${ruby} ${uCoins} ${ruby}`)
              .setTimestamp()
              .setFooter('Bot Developer')
          message.channel.send(curEmbed);
      }
      else {
          let curEmbed = new Discord.RichEmbed()
              .setTitle(`${uUser.tag}`)
              .setColor(generateHex())
              .setThumbnail(uUser.displayAvatarURL)
              .addField('Currency', `${ruby} ${uCoins} ${ruby}`)
              .setTimestamp()
          message.channel.send(curEmbed);
      }
    }
    if(cmd === Prefix + 'exp++'){
      if (message.author.id === '349972812095684608') {
          let vUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);
          if (!vUser) return message.channel.send('Enter a user to edit xp!');
          let exp = xp[vUser.id].xp;
          let xlvl = xp[vUser.id].level;
          xp[vUser.id] = {
              xp: exp + parseInt(args[2]),
              level: xlvl
          };
          fs.writeFile('./xp.json', JSON.stringify(xp), (err) => {
              if (err) console.log(err);
          });
          message.channel.send(`Success! Added ${args[2]} exp to ${vUser}`);
      }
      else {
          message.reply("Available only for developer!");
      }
    }
    if(cmd === Prefix + 'bal++'){
      if (message.author.id === '349972812095684608') {
        const coin = client.emojis.find('name', 'dony');
          let lUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);
          if (!lUser) return message.channel.send('Enter a user to edit balance!');
          let lCoins = coins[lUser.id].coins;
          coins[lUser.id] = {
              coins: lCoins + parseInt(args[2])
          };
          fs.writeFile('./coins.json', JSON.stringify(coins), (err) => {
              if (err) console.log(err);
          });
          message.channel.send(`Success! Added ${args[2]}${coin} to ${lUser}`);
      }
      else {
          message.reply("Available only for developer!");
      }
    }
});
client.login(TOKEN);

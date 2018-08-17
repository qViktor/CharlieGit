const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
	          if (message.channel.type == 'dm') return;
  let users = client.users;

  let term = args.slice(1).join(' ');
  if(!term) return message.reply('Enter a search term!');

  let matches = users.filter(u => u.tag.toLowerCase().includes(term.toLowerCase()));
  if(matches.length > 2000) return message.reply("Can't send it! Try again");
  message.channel.send(matches.map(u => u.tag), {
    code: "css"
  });
}
module,exports.help = {
  name: "users"
}

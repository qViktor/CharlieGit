const figlet = require('figlet');
module.exports.run = async(client, message, args, ops) => {
	          if (message.channel.type == 'dm') return;
  if(!args[1]) return message.reply('Provide a text to convert!');
  figlet(args.slice(1).join(' '), 'Hex', (err, data) => {
    if(data.length > 2000) return message.reply('Message is too long!');
    message.channel.send(`\`${data}\``);
  });
}
module.exports.help = {
  name: "hex"
}

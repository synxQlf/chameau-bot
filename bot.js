const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('regarde par la fenetre');
});

client.on('message', message => {
    if (message.content === 'Chameau?') {
    	message.reply('mec c moi le vrai ok?');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

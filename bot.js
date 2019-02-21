const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
  console.log('I am ready!');
});
  
client.on('message', message => {
  if (message.content === '@jones') {
   message.reply ('Hello! How can I help you??');
    if(message.content == 'tell me a story'){
     message.reply("Well, I'm not so good with words"); 
    }
  }
});

client.login(process.env.BOT_TOKEN);
   

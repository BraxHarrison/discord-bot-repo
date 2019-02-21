const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
  console.log('I am ready!');
});
  
client.on('message', message => {
  if (message.content === '@JonesTheGreyshell#2090') {
   message.reply ("Hello! Welcome to the Memory Dust Development Server. Go ahead and sit down- I'm baking some cookies!");
  }
});

client.login(process.env.BOT_TOKEN);
   

const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

  if(!args[0]) {
   message.reply("Here's my uptime : " + client.uptime/60 + " minutes")
   }
  if(args[0] === "hours") {
    message.reply("Here's my uptime : " + client.uptime/3600 + " hours")
  }
  if(args[0] === "days") {
    message.reply("Here's my uptime : " + client.uptime/86400 + " days")
   }
   
}

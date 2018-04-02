const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{
   
      if(message.guild.id = "420316735149965322"){
         if(message.author.hasPermission('BAN_MEMBERS')) {

             let mensg = args.join(" ");
             if(!mensg)
                return message.reply("Por favor, digite o que o bot vai transmitir!");


             message.channel.send(`Agora o Kally esta transmitindo: ${mensg}`)


             client.user.setPresence({ game: { name: mensg, url: 'https://www.twitch.tv/LockDzn', type: 1 } });
             console.log(`Agora o bot esta transmitindo: ${mensg}`);
      
     }
  } else {
      message.reply("você não tem permissão! :x:");
  
  }
}

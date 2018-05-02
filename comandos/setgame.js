const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   if(message.member.id == "244537374258888725") {
   
      let type = args.slice(0)
      if(!type)
        return message.reply("Por favor, digite o tipo!");
      let msg = args.slice(1).join(' ');
      if(!msg)
        return message.reply("Por favor, digite a mensagem!");
      
      if(type === "-J"){
         client.user.setPresence({ game: { name: msg, type: 0 } });
         message.reply('o bot esta jogando ' + msg)

      }
      
   }
}

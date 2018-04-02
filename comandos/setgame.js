const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   if(message.member.id == "244537374258888725") {
   
      let mensg = args.join(" ");
      if(!mensg)
        return message.reply("Por favor, digite o que o bot vai trasmitir!");
        
       
      client.user.setPresence({ game: { name: mensg, type: 0 } });
      message.reply('o bot esta jogando ' + mensg)
      console.log('O bot esta jogando ' + mensg)

   }
   
}

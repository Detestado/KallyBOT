const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   if(message.author.id = "244537374258888725"){
      let mensg = args.join(" ");
      if(!mensg)
      return message.reply("Por favor, digite o jogo que o bot vai jogar!");
      
      
      message.channel.send(`Agora o Kally esta jogando: ${mensg}`)
      client.user.setPresence({ game: { name: `${mensg}`, type: 0 } });
      console.log(`Agora o bot esta jogando: ${mensg}`);
   
   
   } else {
      message.reply("você não tem permissão! :x:")
   
   }
 
   
   
   
}

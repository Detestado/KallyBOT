const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});
   if (message.author.id === '244537374258888725') {
     const ayy = client.emojis.find("name", "piingblob");
     message.reply(`${ayy} LMAO`);
    
    
  }
}

const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});
   if (message.author.id === '244537374258888725') {]
     const ayy = client.emojis.find("name", "piingblob");
     const teste = new Discord.RichEmbed()
        .setDescription(`Test ${ayy}`)
        .setAuthor(`Test`, message.guild.iconURL)
        .setColor("#00a4ce")
   
    message.channel.send(teste)
    
    
  }
}

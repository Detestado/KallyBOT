const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});
   if (message.author.id === '244537374258888725') {
     const teste = new Discord.RichEmbed()
        .setDescription("Test :heart: ")
        .setAuthor(`Test :heart:`)
        .setColor("#00a4ce")
   
    message.channel.send(teste)
    
    
  }
}

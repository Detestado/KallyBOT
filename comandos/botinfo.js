const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (client, message, args) =>{
   
   message.delete().catch(O_o=>{});
   const info = new Discord.RichEmbed()
      .setColor("#0092ca")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setThumbnail(message.author.avatarURL)

      .setDescription(`Olá, me chamo Kally, sou focado na moderação dos servidores do discord,
      entre no meu servidor [aqui](https://discord.gg/nbEqSrv), 
      lá o meu dono pode te ajuda e você vai receber atualizações!\n \n
      Estou em ${client.guilds.size} servidores no discord, sou feito em **JS** (**Node.js**/**JavaScript**), Entre no meu **site** :) (**SENDO FEITO**)
      \nUse **!ajuda** para saber meus comandos!`)

   
   message.channel.send(info)
   
}

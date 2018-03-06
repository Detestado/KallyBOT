const Discord = require("discord.js");


module.exports.run = async (client, message, args) =>{
   
   const dono = message.members.get("244537374258888725");
   message.delete().catch(O_o=>{});
   const info = new Discord.RichEmbed()
   
   .setColor("#0092ca")
   .setAuthor(message.author.name, message.author.avatarURL)
   .setThumbnail(message.author.avatarURL)
   
   .setDescription(`Olá, me chamo Kally, sou focado na moderação dos servidores do discord,
   entre no meu servidor [aqui](https://discord.gg/nbEqSrv), 
   lá o meu dono pode te ajuda e você vai receber atualizações!\n \n
   Estou em ${client.guilds.size} servidores no discord, sou feito em **JS** (**Node.js**/**JavaScript**), Entre no meu **site** :) (**SENDO FEITO**)
   \nUse **!ajuda** para saber meus comandos!`)
   
   .addField("Obrigado a:",
    ```LockDzn#8368`` Foi ele que fez! :)\n
    ``${message.author.username}#${message.author.discriminator}`` Por estar falando comigo! :smile:`)
  
   .setFooter("© Kallyᴮᴱᵀᴬ | bit.ly/LockDzn", dono.user.avatarURL)
   
   message.channel.send(infoo)
   
}

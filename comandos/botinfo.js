const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (client, message, args) =>{
   
   message.delete().catch(O_o=>{});
   const info = new Discord.RichEmbed()
      .setColor("#0092ca")
      .setAuthor(client.user.username, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)

      .setDescription(`Olá, me chamo Kally, sou focado na moderação dos servidores do discord,
entre no meu servidor [aqui](https://discord.gg/nbEqSrv), 
lá o meu dono pode te ajuda e você vai receber atualizações!\n \n
Estou em ${client.guilds.size} servidores no discord, sou feito em **JS** (**Node.js**/**JavaScript**), Entre no meu **site** :) (**SENDO FEITO**)
\nUse **!ajuda** para saber meus comandos!`)
   
      .addField("Melhores pessoas:", "``LockDzn#8368`` Foi ele que me criou! :grin: ")
      .setFooter("© Kallyᴮᴱᵀᴬ | Site: bit.ly/LockDzn",
   
   message.channel.send(info)
   
}

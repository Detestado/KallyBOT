const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});
   if (message.member.hasPermission('ADMINISTRATOR')) {
   const parceiro = new Discord.RichEmbed()
      .setColor("318bdb")
      .setAuthor("Kally Parceiro", "https://cdn.discordapp.com/avatars/415288373071183872/1a14ab20566d1feff9eeda412208053a.png")
      
      .setDescription(`Olá galera, eu me chamo Kally, sou um bot focado na moderação dos servidores do discord, entre no meu servidor [aqui](https://discord.gg/fsSNJJH),
lá o meu dono pode te ajuda e você vai receber atualizações! Entre no meu site [clicando aqui](https://kally.glitch.me/)!`)

      .addField("Mais:", "Agora esse servidor é parceiro do Kally :tada: HEYYY! O bot esta em fazê de desenvolvimento, então qual quer bug reporte no meu discord.")
      
      .setTimestamp()
      .setFooter("© Kallyᴮᴱᵀᴬ Moderação", message.author.avatarURL)
   
   message.channel.send(parceiro)
   message.channel.send("discord.gg/fsSNJJH")
   
   }
}

const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});

   if (message.member.hasPermission('MANAGE_GUILD')) {
   const comousar = new Discord.RichEmbed()
      .setAuthor("Kally", client.user.avatarURL)
      .setTitle("k!kick")
      .setDescription(`Ira kickar o usuário mencionado.`)
      .setColor("#60d1f6")
      .setFooter("© Kally - kally.glitch.me")
      .addField("Como usar", "`k!kick @usuário <motivo>`")
      .addField("Permissão", "O staff que for mutar tem que esta em um cargo com a permissão `Expulsar membros`")   
      
   let mensg = args.join(" ");
   if(!mensg)
      return message.channel.send(comousar)
      
   const anuncio = new Discord.RichEmbed()
      .setColor("0cff00")
      .setAuthor("Anúncio", "https://cdn.discordapp.com/attachments/409846357982183434/429837842697682955/emoji.png")
      
      .setDescription(mensg)
      
      .setTimestamp()
      .setFooter(`Por: ${message.author.tag} - © Kallyᴮᴱᵀᴬ Anúncio`, message.author.avatarURL)
   
   message.channel.send("@everyone", anuncio)
   
   }
}

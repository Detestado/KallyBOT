const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});

   if (message.member.hasPermission('MANAGE_GUILD')) {
   const comousar = new Discord.RichEmbed()
      .setAuthor("Kally", client.user.avatarURL)
      .setTitle("k!anuncio")
      .setDescription(`Ira mandar um anúncio no chat que o comandos foi executado.`)
      .setColor("#60d1f6")
      .setFooter("© Kally - kally.glitch.me")
      .addField("Como usar", "`k!anuncio <mensagem do anúncio>`")
      .addField("Permissão", "O staff que for usar o comando tem que esta em um cargo com a permissão `Gerenciar servidor`")   
      
   let mensg = args.join(" ");
   if(!mensg)
      return message.channel.send(comousar).then(msg => msg.delete(10000));
   const emojiaviso = client.guilds.get("420316735149965322").emojis.find("name", "KallyAviso");
   const anuncio = new Discord.RichEmbed()
      .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
      .setTitle(`${emojiaviso} ANÚNCIO`)
      
      .setDescription(mensg)
      
      .setTimestamp()
      .setFooter(`Por: ${message.author.tag} - © Kally`, message.author.avatarURL)
   
   message.channel.send("@everyone", anuncio)
   
   }
}

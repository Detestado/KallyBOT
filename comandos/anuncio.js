const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});
   const emojinop = client.guilds.get("420316735149965322").emojis.find("name", "KallyNop");
   if (!message.member.hasPermission('MANAGE_GUILD'))
      return message.reply("você não tem permissão! "+ emojinop).then(msg => msg.delete(10000));
   let kallyrole = message.guild.roles.find("name", "Kally");
   const comousar = new Discord.RichEmbed()
      .setAuthor("Kally", client.user.avatarURL)
      .setTitle("k!anuncio")
      .setDescription(`Ira mandar um anúncio no chat que o comandos foi executado.`)
      .setColor("#60d1f6")
      .setFooter("© Kally - kally.glitch.me")
      .addField("Como usar", "`k!anuncio <mensagem do anúncio>`")
      .addField("Permissão", "O staff que for usar o comando tem que esta em um cargo com a permissão `Gerenciar servidor`")
      .addField("Como mudar a cor do anúncio?", "Simples, para escolher a cor do anúncio só você mudar a cor do cargo **"+ kallyrole +"** (O cargo do Kally), se quiser uma cor aleatória só deixar na cor"+` "Padrão."`)   
      
   let mensg = args.join(" ");
   if(!mensg)
      return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));
   if(!message.guild.roles.find("name", "Kally")) {
        const emojiaviso = client.guilds.get("420316735149965322").emojis.find("name", "KallyAviso");
        const anuncio = new Discord.RichEmbed()
            .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
            .setTitle(`${emojiaviso} ANÚNCIO`)
            
            .setDescription(mensg)
            
            .setTimestamp()
            .setFooter(`Por: ${message.author.tag} - © Kally`, message.author.avatarURL)

        message.channel.send("@everyone", anuncio)
        return;
    }
    if(kallyrole.color == "0"){
            const emojiaviso = client.guilds.get("420316735149965322").emojis.find("name", "KallyAviso");
            const anuncio = new Discord.RichEmbed()
                .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                .setTitle(`${emojiaviso} ANÚNCIO`)
                
                .setDescription(mensg)
                
                .setTimestamp()
                .setFooter(`Por: ${message.author.tag} - © Kally`, message.author.avatarURL)

            message.channel.send("@everyone", anuncio)
        }else{
            const emojiaviso = client.guilds.get("420316735149965322").emojis.find("name", "KallyAviso");
            const anuncio = new Discord.RichEmbed()
                .setColor(kallyrole.color)
                .setTitle(`${emojiaviso} ANÚNCIO`)
                
                .setDescription(mensg)
                
                .setTimestamp()
                .setFooter(`Por: ${message.author.tag} - © Kally`, message.author.avatarURL)

            message.channel.send("@everyone", anuncio)
            return;
        }   
}

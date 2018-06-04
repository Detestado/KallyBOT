const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});
   if (message.member.hasPermission('BAN_MEMBERS')) {
   const comousar = new Discord.RichEmbed()
      .setAuthor("Kally", client.user.avatarURL)
      .setTitle("k!ban")
      .setDescription(`Ira banir o usuário mencionado.`)
      .setColor("#60d1f6")
      .setFooter("© Kally - kally.glitch.me")
      .addField("Como usar", "`k!ban @usuário <motivo>`")
      .addField("Permissão", "O staff que for mutar tem que esta em um cargo com a permissão `Banir membros`")
   let member = message.mentions.members.first();
   if(!member)
      return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));
   if(!member.bannable) 
      return message.reply("Eu não posso banir esse usuário! Ele(a) têm um cargo maior.");

   let motivo = args.slice(1).join(' ');
   if(!motivo)
      return message.reply("por favor, indique um motivo para o banimento!").then(msg => msg.delete(6000));
  
   await member.ban(`Por: ${message.author.tag} | Motivo: ` + motivo)
      .catch(error => message.reply(`Desculpa ${message.author} Eu não poderia banir por causa de: ${error}`));
      
      
   const banmsg = new Discord.RichEmbed()
       .setAuthor('Você foi banido!', member.user.avatarURL)
       .setColor("ff0000")

       .setThumbnail("https://i.imgur.com/ZmWM1UT.png")

       .setTimestamp()
       .setFooter("© Kallyᴮᴱᵀᴬ Moderação", message.author.avatarURL)

        .addField("Motivo:", motivo)

        .addField("Servidor:", message.guild.name)  
  
   member.send(banmsg)   
      
   const banido = new Discord.RichEmbed()
       .setAuthor(member.user.tag + ' | Ban', member.user.avatarURL)
       .setDescription(`${member.user.tag} (ID: ${member.user.id}) não respeitou as regras e foi banido! :worried: `)
       .setColor("ff0000")

       .setThumbnail("https://i.imgur.com/ZmWM1UT.png")

       .setTimestamp()
       .setFooter("© Kallyᴮᴱᵀᴬ Moderação", message.author.avatarURL)

        .addField("Motivo:", motivo)

        .addField("Staffer:", message.author)
        
    message.channel.send(banido)
    } else {
      message.reply("você não tem permissão! :x:")
  }
}

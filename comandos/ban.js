const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});
   if (message.member.hasPermission('BAN_MEMBERS')) {
   let member = message.mentions.members.first();
   if(!member)
      return message.reply("Por favor, mencione um usuário valido. Você não mencionou o usuário ou ele não esta aqui no servidor. :x:");
   if(!member.bannable) 
      return message.reply("Eu não posso banir esse usuário! Ele(a) têm um cargo maior.");

   let motivo = args.slice(1).join(' ');
   if(!motivo)
      return message.reply("Por favor, indique um motivo para o mute!");
  
   await member.ban(`Por: ${message.author.tag} | Motivo: ` + motivo)
      .catch(error => message.reply(`Desculpa ${message.author} Eu não poderia banir por causa de: ${error}`));
  
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

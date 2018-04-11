const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});
   if (message.member.hasPermission('KICK_MEMBERS')) {
   let member = message.mentions.members.first();
   if(!member)
     return message.reply("por favor, mencione um usuário valido. Você não mencionou o usuário ou ele não esta aqui no servidor. :x:");
   if(!member.kickable) 
     return message.reply("eu não posso kickar esse usuário! Ele(a) têm um cargo maior.");
    
   let motivo = args.slice(1).join(' ');
   if(!motivo)
      return message.reply("por favor, indique um motivo para o kick!"
    
   const kick = new Discord.RichEmbed()
      .setAuthor(member.user.tag + ' | Kick', member.user.avatarURL)
      .setDescription(`${member.user.tag} (ID: ${member.user.id}) foi kickado! :worried: `)
      
      .setColor("ff0000")
      .setThumbnail(member.user.avatarURL)
      .setTimestamp()
      .setFooter("© Kallyᴮᴱᵀᴬ Moderação", message.author.avatarURL)
      
      .addField("Motivo:", motivo)
      .addField("Staffer:", message.author)
    
   await member.ban(`Por: ${message.author.tag} | Motivo: ` + motivo)
      .catch(error => message.reply(`Desculpa ${message.author} Eu não poderia banir por causa de: ${error}`));
      
    message.channel.send(kick)

   } else {
      message.reply("você não tem permissão! :x:")
   }
}

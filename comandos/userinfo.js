const Discord = require("discord.js");
const dateFormat = require('dateformat');

const now = new Date();
dateFormat(now, 'shortDate');

module.exports.run = async (client, message, args) =>{

    let member = message.mentions.members.first();
   
   if(member) {
     
   const info = new Discord.RichEmbed()
      
      .setTitle(":bust_in_silhouette: Informações de" + ` ${member.user.username}`)
      .setThumbnail(member.user.avatarURL)
      .addField(':computer: ID:', member.user.id)
      .addField(":video_game: Jogando:", `${member.user.presence.game ? `${member.user.presence.game.name}` : "Não está jogando."}`)
      .addField(':inbox_tray: Entrou nesse servido em:', dateFormat(member.joinedAt, 'dd/mm/yyyy'))
      .addField(':inbox_tray: Conta criado em:', dateFormat(member.user.createdAt, 'dd/mm/yyyy'))
      .setColor("#00a4ce")
      .setFooter("© Kally")
   
      message.channel.send(info)
   
   } else {
      
    const info = new Discord.RichEmbed()
      
    .setTitle(":bust_in_silhouette: Informações de" + ` ${message.author.tag}`)
    .setThumbnail(message.author.avatarURL)
    .addField(':computer: ID:', message.author.id)
    .addField(":video_game: Jogando:", `${message.author.presence.game ? `${message.author.presence.game.name}` : "Não está jogando."}`)
    .addField(':inbox_tray: Entrou nesse servido em:', dateFormat(message.author.joinedAt, 'dd/mm/yyyy'))
    .addField(':inbox_tray: Conta criado em:', dateFormat(message.author.createdAt, 'dd/mm/yyyy'))
    .setColor("#00a4ce")
    .setFooter("© Kally")
 
    message.channel.send(info)
      
   }
}

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
      .addField(':red_circle: Cargos', member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "Sem cargo")
      .addField(':inbox_tray: Entrou nesse servidor em:', dateFormat(member.joinedAt, 'dd/mm/yyyy') + " às " + dateFormat(member.joinedAt, 'H:MM'))
      .addField(':inbox_tray: Conta criado em:', dateFormat(member.user.createdAt, 'dd/mm/yyyy') + " às " + dateFormat(member.user.createdAt, 'H:MM'))
      .setColor("#00a4ce")
      .setFooter("© Kally")
   
      message.channel.send(info)
   
   } else {
      
    let member = message.author   
    const info = new Discord.RichEmbed()
      
    .setTitle(":bust_in_silhouette: Informações de" + ` ${message.author.tag}`)
    .setThumbnail(message.author.avatarURL)
    .addField(':computer: ID:', message.author.id)
    .addField(":video_game: Jogando:", `${message.author.presence.game ? `${message.author.presence.game.name}` : "Não está jogando."}`)
    .addField(':inbox_tray: Entrou nesse servidor em:', dateFormat(message.author.joinedAt, 'dd/mm/yyyy') + " às " + dateFormat(message.author.joinedAt, 'H:MM'))
    .addField(':inbox_tray: Conta criado em:', dateFormat(message.author.createdAt, 'dd/mm/yyyy') + " às " + dateFormat(message.author.createdAt, 'H:MM'))
    .setColor("#00a4ce")
    .setFooter("© Kally")
 
    message.channel.send(info)
      
   }
}

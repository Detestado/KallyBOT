const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   let member = message.mentions.members.first();
   
   if(member) {
     
   const avatar = new Discord.RichEmbed()
      
      .setTitle(":question: Informação de " + `${member.user.username}`)
      .addField(":computer: Tag do discord", member.user.tag)   
      .addField(":bookmark_tabs: ID do discord", member.user.id) 
      .addField(":calendar_spiral: Criou conta em", member.user.createdAt.toLocaleString())
      .addField(":date: Entro em", member.user.joinedAt.toLocaleString()) 
      .addField(":card_box: Cargos",  member.user.roles)
      .setThumbnail(member.user.avatarURL)
      .setColor("#00a4ce")
      .setFooter("© Kallyᴮᴱᵀᴬ")
   
      message.channel.send(avatar)
   
   } else {
      
   const avatar = new Discord.RichEmbed()
   
      .setTitle(":question: Informação de " + `${message.author.username}`)
      .addField(":computer: Tag do discord", message.author.tag)   
      .addField(":bookmark_tabs: ID do discord", message.author.id) 
      .addField(":calendar_spiral: Criou conta em", message.author.createdTimestamp)
      .addField(":date: Entro em", message.member.joinedAtTimestamp)
      .addField(":card_box: Cargos",  message.member.roles)
      .setThumbnail(message.author.avatarURL)
      .setColor("#00a4ce")
      .setFooter("© Kallyᴮᴱᵀᴬ")
   
      message.channel.send(avatar)
      
   }
}

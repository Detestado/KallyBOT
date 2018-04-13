const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   let member = message.mentions.members.first();
   
   if(member) {
     
   const avatar = new Discord.RichEmbed()
      
      .setTitle(":question: Informação de" + `${member.user.username}`)
      .addField(":computer: Tag do discord", member.user.tag)   
      .addField(":bookmark_tabs: ID do discord", member.user.id) 
      .addField(":calendar_spiral: Criou conta em", member.user.createdAt.toLocaleString())
      .addField(":date: Entro em", member.user.joinedAt.toLocaleString())
      .setThumbnail(member.user.avatarURL)
      .setColor("#00a4ce")
      .setFooter("© Kallyᴮᴱᵀᴬ")
   
      message.channel.send(avatar)
   
   } else {
      
   const avatar = new Discord.RichEmbed()
   
      .setTitle(":question: Informação de" + `${message.author.username}`)
      .addField(":computer: Tag do discord", message.author.tag)   
      .addField(":bookmark_tabs: ID do discord", message.author.id) 
      .addField(":calendar_spiral: Criou conta em", message.author.createdAt.toLocaleString())
      .addField(":date: Entro em", message.author.joinedAt)
      .setThumbnail(member.user.avatarURL)
      .setColor("#00a4ce")
      .setFooter("© Kallyᴮᴱᵀᴬ")
   
      message.channel.send(avatar)
      
   }
}

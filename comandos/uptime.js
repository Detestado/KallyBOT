const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   let member = message.mentions.members.first();
   
   if(member) {
     
   const uptime = new Discord.RichEmbed()
      .setDescription(`${member.user.username} esta online a ${member.user.uptime}`)
      .setAuthor(`:stopwatch: ${member.user.username} tempo online`)
      .setImage(member.user.avatarURL)
      .setFooter("© Kallyᴮᴱᵀᴬ")
   
      message.channel.send(uptime)
   
   } else {
      
   const uptime = new Discord.RichEmbed()
      .setDescription(`${message.author.username} esta online a ${message.author.uptime}`)
      .setAuthor(`:stopwatch: ${message.author.username} tempo online`)
      .setImage(message.author.avatarURL)
      .setFooter("© Kallyᴮᴱᵀᴬ")
   
      message.channel.send(uptime)
      
   }
}

const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});
   const avatar = new Discord.RichEmbed()
      .setDescription(`**Clique [aqui](http://google.com) para baixar a imagem!**`)
      .setAuthor(`<:frame_photo:420370083672752129> ${message.author.username}`)
      .setImage(message.author.avatarURL)
      .setColor("#00a4ce")
      .setFooter("© Kallyᴮᴱᵀᴬ")
   
   message.channel.send(avatar)
           
}

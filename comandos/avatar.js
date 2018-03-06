const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});
   const avatar = new Discord.RichEmbed()
      .setDescription(`**Clique [aqui](http://${message.author.avatarURL}) para baixar a imagem!**`)
      .setAuthor(`Foto de avatar de ${message.author.username}`)
      .setImage(message.author.avatarURL)
      .setColor("#00a4ce")
      .setFooter("© Kallyᴮᴱᵀᴬ")
   
   message.channel.send(avatar)
           
}

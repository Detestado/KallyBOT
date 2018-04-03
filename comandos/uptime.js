const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

     
   const uptime = new Discord.RichEmbed()
      .setDescription(`${client.user.username} esta online a ${client.uptime}`)
      .setAuthor(`:stopwatch: ${client.user.name} tempo online`)
      .setThumbnail(client.user.avatarURL)
      .setFooter("© Kallyᴮᴱᵀᴬ")
   
    message.channel.send(uptime)
   
}

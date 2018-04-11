const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

  const serverinfo = new Discord.RichEmbed()
    .setAuthor(message.guild.name)
    .setColor(3447003)
    .setDescription(`Informações do servidor **${message.guild.name}**`)
    
    .addField('Dono', message.guild.owner.user.tag, true)
    .addField('Quantidade de membros', `${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size} (${message.guild.members.filter(m=>m.user.bot).size} bots)`)
    .addField('Localização', message.guild.region)
    .addField('Criado em', message.guild.createdAt.toLocaleString(), true)
    
    .addBlankField(true)
    
    .setThumbnail(message.guild.iconURL)
     
    .setTimestamp()
    .setFooter(client.user.username, client.user.avatarURL);
  
    message.channel.send(serverinfo)
    
 }

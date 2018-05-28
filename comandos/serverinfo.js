const Discord = require("discord.js");
const dateFormat = require('dateformat');

const now = new Date();
dateFormat(now, 'shortDate');

module.exports.run = async (client, message, args) =>{

  let servericon = message.guild.iconURL;
  const serverinfo = new Discord.RichEmbed()
    .setAuthor(message.guild.name)
    .setColor(3447003)
    .setDescription(`Informações do servidor **${message.guild.name}** (ID: ${message.guild.id})`)
    
    .addField(':crown: Dono', message.guild.owner.user.tag)
    .addField(':busts_in_silhouette: Quantidade de membros', `${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size} - ${message.guild.members.filter(m=>m.user.bot).size} bot(s)`)
    .addField(':earth_americas: Região', message.guild.region)
    .addField(':calendar_spiral: Criado em', dateFormat(message.guild.createdAt, 'dd/mm/yyyy') + " às " + dateFormat(message.guild.createdAt, 'H:MM'))
    .addField(':calendar_spiral: Você entrou em', dateFormat(message.member.joinedAt, 'dd/mm/yyyy') + " às " + dateFormat(message.member.joinedAt, 'H:MM'))
    
    .setThumbnail(servericon)
     
    .setTimestamp()
    .setFooter("Kallyᴮᴱᵀᴬ", client.user.avatarURL);
  
    message.channel.send(serverinfo)
    
 }

const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    var date = new Date(client.uptime);
    var uptime = '';
    
    const tempo = uptime += date.getUTCDate() - 1 + ' d, ' + uptime += date.getUTCHours() + ' h, ' + uptime += date.getUTCMinutes() + ' m, ' + uptime += date.getUTCSeconds() + 's. '
    
    const embed2 = new Discord.RichEmbed()
       .setTitle("🕐 Tempo que eu acordei:")
       .setDescription(uptime += date.getUTCDate() - 1 + ' dia(s), ')
       .setDescription(uptime += date.getUTCHours() + ' hora(s), ')
       .setDescription(uptime += date.getUTCMinutes() + ' minuto(s), ')
       .setDescription(uptime += date.getUTCSeconds() + ' segundo(s)')
    
       .addField("🕐 Estou acordado faz", tempo)
    
    
    message.channel.send(embed2).then(msg => { msg.react("🕐") });
   
}

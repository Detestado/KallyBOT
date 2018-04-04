const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    var date = new Date(client.uptime);
    var uptime = '';
    
    const d = date.getUTCDate()
    const h = date.getUTCHours()
    const m = date.getUTCMinutes()
    const s = date.getUTCSeconds()
    
    const embed2 = new Discord.RichEmbed()
       .setTitle("🕐 Tempo que eu acordei:")
       .setDescription(uptime += date.getUTCDate() - 1 + ' dia(s), ')
       .setDescription(uptime += date.getUTCHours() + ' hora(s), ')
       .setDescription(uptime += date.getUTCMinutes() + ' minuto(s), ')
       .setDescription(uptime += date.getUTCSeconds() + ' segundo(s)')
    
       .addField("🕐 Estou acordado faz", uptime += d + 'd, ' + uptime += h + 'h, ' + uptime += m + 'm, ' + uptime += s + 's.')
    
    
    message.channel.send(embed2).then(msg => { msg.react("🕐") });
   
}

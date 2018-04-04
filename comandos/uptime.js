const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    var date = new Date(client.uptime);
    var uptime = '';
    
    const d = uptime += date.getUTCDate() - 1 + 'd, ';
    const h = uptime += date.getUTCHours() + 'h, ';
    const m = uptime += date.getUTCMinutes() + 'm, ';
    const s = uptime += date.getUTCSeconds() + 's.';

    
    const embed2 = new Discord.RichEmbed()
       .setTitle("🕐 Tempo que eu acordei:")
       .setDescription("**" + s + "**")
    
    
    
    message.channel.send(embed2).then(msg => { msg.react("🕐") });
   
}

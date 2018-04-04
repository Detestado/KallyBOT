const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    var date = new Date(client.uptime);
    var uptime = '';
    const embed2 = new Discord.RichEmbed()
       .setTitle("🕐 Tempo que eu acordei:")
       .setDescription(uptime += date.getUTCDate() - 1 + ' days, ')
       .setDescription(uptime += date.getUTCHours() + ' hours, ')
       .setDescription(uptime += date.getUTCMinutes() + ' minutes, ')
       .setDescription(uptime += date.getUTCSeconds() + ' seconds')
       .setFooter("v1.1")
    message.channel.send(embed2).then(msg => { msg.react("🕐") });
   
}

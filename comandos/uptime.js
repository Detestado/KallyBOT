const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (client, message, args) =>{

    let uptime = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    let statsEmbed = new Discord.RichEmbed()
        .setTitle('Uptime')
        .setColor('#66b3ff')
        .setTimestamp()
        .addField(':timer:', `**${uptime}**`, true);

    message.channel.send(statsEmbed)
   
}

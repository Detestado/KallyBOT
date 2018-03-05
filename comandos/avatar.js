const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});
   const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Action:', 'Un/Mute')
    .addField('User:', `AAAAA`)
    .addField('Modrator:', `${message.author.username}#${message.author.discriminator}`);
   
   client.embed(embed)
           
}

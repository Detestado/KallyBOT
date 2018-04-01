const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});

   if (message.member.hasPermission('MANAGE_GUILD')) {
   let mensg = args.slice(1).join(' ');
   if(!mensg)
      return message.reply("Por favor, digite a mensagem do anuncio!");
      
   const anuncio = new Discord.RichEmbed()
      .setColor("0cff00")
      .setAuthor("Anúncio", "https://discordapp.com/assets/dac20f2ccbd28f469f3154cfe6ea1709.svg")
      
      .setDescription(mensg)
      
      .setTimestamp()
      .setFooter(`Por: ${message.author} - © Kallyᴮᴱᵀᴬ Anúncio`, message.author.avatarURL)
   
   message.channel.send(anuncio)
   
   }
}

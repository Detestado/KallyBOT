const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});
   if (message.member.hasPermission('MANAGE_MESSAGES')) {
   let member = message.mentions.members.first();
   if(!member)
      return message.reply("Por favor, mencione um usuário valido. Você não mencionou o usuário ou ele não esta aqui no servidor. :x:");

   let motivo = args.slice(1).join(' ');
   if(!motivo)
      return message.reply("Por favor, indique um motivo para o mute!");

   if (!message.guild.roles.find("name", "Mutado")) {
      message.channel.send(`${message.author}, o cargo **Mutado** não foi criado. :( Eu não posso mutar o usuário! :(`)
     } else {
        let role = message.guild.roles.find("name", "Mutado");
        member.addRole(role)
        const mutado = new Discord.RichEmbed()
           .setAuthor(client.user..tag, client.user.avatarURL)
           .setDescription(`${client.user.name} foi mutado, não respeito às regras e foi mutado! :mute: `)
           .setColor("ff0000")

           .setThumbnail(message.author.avatarURL)

           .setTimestamp()
           .setFooter("© Kallyᴮᴱᵀᴬ Moderação", message.author.avatarURL)

           .addField("Motivo", motivo)

           .addField("Staffer", message.author)
     }
  
   } else {
      message.reply("você não tem permissão! :x:")
  }
}

const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});
   if (message.member.hasPermission('MANAGE_MESSAGES')) {
   const comousar = new Discord.RichEmbed()
      .setAuthor(client.user.name, client.user.avatarURL)
      .authorUrl("https://kally.glitch.me/")
      .setTitle("k!mute")
      .setDescription(`Ira mutarIra mutar o usuário mencionado.`)
      .setColor("#60d1f6")
      .addField("Como usar", "`k!mute @usuário <motivo>`")
      .addField("Permissão", "O staff que for mutar tem que esta em um cargo com a permissão `Gerenciar mensagens`")

   let member = message.mentions.members.first();
   if(!member)
      return message.channel.send(comousar);

   let motivo = args.slice(1).join(' ');
   if(!motivo)
      return message.reply("Por favor, indique um motivo para o mute!");

   if (!message.guild.roles.find("name", "Mutado") || message.guild.roles.find("name", "mutado")) {
      
      const norole = new Discord.RichEmbed()
         .setColor("ff0000")
         .setAuthor('Deu um erro', client.user.avatarURL)
         
         .setDescription(`${message.author}, o cargo **Mutado** não foi encontrado. :slight_frown: 
Crie um cargo com o nome "**Mutado**", assim poderei mutar o usuário!`)
      
      
         .setTimestamp()
         .setFooter("© Kallyᴮᴱᵀᴬ ERRO", message.author.avatarURL)
      
      message.channel.send(norole)
      
      
     } else {
        let role = message.guild.roles.find("name", "Mutado");
        member.addRole(role)
        
        const mutado = new Discord.RichEmbed()
           .setAuthor(member.user.tag + ' | Mute', member.user.avatarURL)
           .setDescription(`${member.user.tag} (ID: ${member.user.id}) não respeitou as regras e foi mutado! :pensive: `)
           .setColor("ff0000")

           .setThumbnail(message.author.avatarURL)

           .setTimestamp()
           .setFooter("© Kallyᴮᴱᵀᴬ Moderação", message.author.avatarURL)

           .addField("Motivo:", motivo)

           .addField("Staffer:", message.author)
        
        message.channel.send(mutado)
     }
  
   } else {
      message.reply("você não tem permissão! :x:")
  }
}

const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});
   if (message.member.hasPermission('MANAGE_MESSAGES')) {
   const comousar = new Discord.RichEmbed()
      .setAuthor("Kally", client.user.avatarURL)
      .setTitle("k!unmute")
      .setDescription(`Ira desmutar o usuário mencionado.`)
      .setColor("#60d1f6")
      .setFooter("© Kally - kally.glitch.me")
      .addField("Como usar", "`k!unmute @usuário`")
      .addField("Permissão", "O staff que for mutar tem que esta em um cargo com a permissão `Gerenciar mensagens`")
      
      
   let member = message.mentions.members.first();
   if(!member)
      return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));

   if (!message.guild.roles.find("name", "Mutado")) {
      
      const norole = new Discord.RichEmbed()
         .setColor("ff0000")
         .setAuthor('Deu um erro', client.user.avatarURL)
         
         .setDescription(`O cargo **Mutado** não foi encontrado. :slight_frown: 
Crie um cargo com o nome "**Mutado**", assim poderei desmutar o usuário!`)
      
      
         .setTimestamp()
         .setFooter("© Kallyᴮᴱᵀᴬ ERRO", message.author.avatarURL)
      
      message.channel.send(message.author, norole)
      
      
     } else {
        let role = message.guild.roles.find("name", "Mutado");
        member.removeRole(role)
        
        const unmutemsg = new Discord.RichEmbed()
             .setAuthor('Você foi desmutado!', member.user.avatarURL)
             .setColor("ff0000")

             .setThumbnail(member.user.avatarURL)

             .setTimestamp()
             .setFooter("© Kallyᴮᴱᵀᴬ Moderação", message.author.avatarURL)


             .addField("Servidor:", message.guild.name)  

        member.send(unmutemsg)
        
        const mutado = new Discord.RichEmbed()
           .setAuthor(member.user.tag + ' | Mute', member.user.avatarURL)
           .setDescription(`${member.user.tag} (ID: ${member.user.id}) foi desmutado! HEEYY! Agora respeite as regras. :wink: `)
           .setColor("ff0000")

           .setThumbnail(message.author.avatarURL)

           .setTimestamp()
           .setFooter("© Kallyᴮᴱᵀᴬ Moderação", message.author.avatarURL)


           .addField("Staffer:", message.author)
        
        message.channel.send(mutado)
     }
  
   } else {
      message.reply("você não tem permissão! :x:").then(msg => msg.delete(6000));
  }
}

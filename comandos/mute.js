const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   if (message.member.hasPermission('MANAGE_MESSAGES')) {
    if (!message.guild.roles.find("name", "Mutado") || message.guild.roles.find("name", "mutado")) {
        const norole = new Discord.RichEmbed()
           .setColor("ff0000")
           .setAuthor('Deu um erro', client.user.avatarURL)
           
           .setDescription(`O cargo **Mutado** não foi encontrado. :slight_frown: 
Crie um cargo com o nome "**Mutado**", assim poderei mutar o usuário!`)
        
           .addField("Info", "Coloque o cargo **Mutado** em cima dos cargo que eu vou poder mutar e coloque o cargo do bot (**Cargo chama Kally**) em cima do cargo **Mutado**! Obrigado.")
           .setTimestamp()
           .setFooter("© Kallyᴮᴱᵀᴬ ERRO", message.author.avatarURL)
        
        message.channel.send(message.author, norole)
        return;
        
    }
   message.delete().catch(O_o=>{});
   const comousar = new Discord.RichEmbed()
      .setAuthor("Kally", client.user.avatarURL)
      .setTitle("k!mute")
      .setDescription(`Ira mutar o usuário mencionado.`)
      .setColor("#60d1f6")
      .setFooter("© Kally - kally.glitch.me")
      .addField("Como usar", "`k!mute @usuário <motivo>`")
      .addField("Permissão", "O staff que for mutar tem que esta em um cargo com a permissão `Gerenciar mensagens`")

   let member = message.mentions.members.first();
   if(!member)
      return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));

   let motivo = args.slice(1).join(' ');
   if(!motivo)
      return message.reply("por favor, indique um motivo para o mute!").then(msg => msg.delete(10000));

   if (!message.guild.roles.find("name", "Mutado") || message.guild.roles.find("name", "mutado")) {
      
      const norole = new Discord.RichEmbed()
         .setColor("ff0000")
         .setAuthor('Deu um erro', client.user.avatarURL)
         
         .setDescription(`O cargo **Mutado** não foi encontrado. :slight_frown: 
Crie um cargo com o nome "**Mutado**", assim poderei mutar o usuário!`)
      
         .addField("Info", "Coloque o cargo **Mutado** em cima dos cargo que eu vou poder mutar e coloque o cargo do bot (**Cargo chama Kally**) em cima do cargo **Mutado**! Obrigado.")
         .setTimestamp()
         .setFooter("© Kallyᴮᴱᵀᴬ ERRO", message.author.avatarURL)
      
      message.channel.send(message.author, norole)
      
      
     } else {
        let role = message.guild.roles.find("name", "Mutado");
        member.addRole(role)
        
        const mutemsg = new Discord.RichEmbed()
          .setAuthor('Você foi mutado!', member.user.avatarURL)
          .setColor("ff0000")

          .setThumbnail(member.user.avatarURL)

          .setTimestamp()
          .setFooter("© Kallyᴮᴱᵀᴬ Moderação", message.author.avatarURL)

          .addField("Motivo:", motivo)

          .addField("Servidor:", message.guild.name)  
  
       member.send(mutemsg)
        
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
        message.reply("você não tem permissão! :x:").then(msg => msg.delete(5000));
    }
}

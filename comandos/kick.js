const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});
   if (message.member.hasPermission('BAN_MEMBERS')) {
   const comousar = new Discord.RichEmbed()
      .setAuthor("Kally", client.user.avatarURL)
      .setTitle("k!kick")
      .setDescription(`Ira kickar o usuário mencionado.`)
      .setColor("#60d1f6")
      .setFooter("© Kally - kally.glitch.me")
      .addField("Como usar", "`k!kick @usuário <motivo>`")
      .addField("Permissão", "O staff que for mutar tem que esta em um cargo com a permissão `Expulsar membros`")
   let member = message.mentions.members.first();
   if(!member)
      return message.reply(comousar);
   if(!member.kickable) 
      return message.reply("eu não posso banir esse usuário! Ele(a) têm um cargo maior.");

   let motivo = args.slice(1).join(' ');
   if(!motivo)
      return message.reply("por favor, indique um motivo para o banimento!");
  
   await member.kick(`Por: ${message.author.tag} | Motivo: ` + motivo)
      .catch(error => message.reply(`desculpa ${message.author} Eu não poderia banir por causa de: ${error}`));
  
   const kickado = new Discord.RichEmbed()
       .setAuthor(member.user.tag + ' | Ban', member.user.avatarURL)
       .setDescription(`${member.user.tag} (ID: ${member.user.id}) não respeitou as regras e foi kickado! :worried: `)
       .setColor("ff0000")

       .setThumbnail(member.user.avatarURL)

       .setTimestamp()
       .setFooter("© Kallyᴮᴱᵀᴬ Moderação", message.author.avatarURL)

        .addField("Motivo:", motivo)

        .addField("Staffer:", message.author)
        
    message.channel.send(kickado)
    } else {
      message.reply("você não tem permissão! :x:")
  }
   
   
   
   
}

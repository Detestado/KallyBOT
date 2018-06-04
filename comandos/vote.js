const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});
   
    if(!message.member.hasPermission('MANAGE_GUILD'))
      return message.reply("você não tem permissão! :x:").then(msg => msg.delete(6000));
    
    const comousar = new Discord.RichEmbed()
      .setAuthor("Kally", client.user.avatarURL)
      .setTitle("k!vote")
      .setDescription(`Ira abrir uma votação no canal que a mensagem foi executada.`)
      .setColor("#60d1f6")
      .setFooter("© Kally - kally.glitch.me")
      .addField("Como usar", "`k!vote <mensagem da votação>`")
      .addField("Permissão", "O staff que for usar o comando tem que esta em um cargo com a permissão `Gerenciar servidor`")
   
   let mensg = args.join(" ");
   if(!mensg)
      return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));
   
   const vote = new Discord.RichEmbed()
      .setTitle(":thinking: Votação")
      .setDescription(`\n\n${mensg}`)
      .setColor("#00ffa8")
      .setFooter(`Por: ${message.author.tag} - © Kally Votação`)
   
   message.channel.send("@everyone")
   const m = await message.channel.send(vote)
   m.react('👍')
   m.react('👎')
   m.react('❓')
}

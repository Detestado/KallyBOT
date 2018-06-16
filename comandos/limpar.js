const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});

   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("você não tem permissão! :x:");
   
   const comousar = new Discord.RichEmbed()
      .setAuthor("Kally", client.user.avatarURL)
      .setTitle("k!limpar")
      .setDescription(`Ira limpar o número de mensagens escolhido.`)
      .setColor("#60d1f6")
      .setFooter("© Kally - kally.glitch.me")
      .addField("Como usar", "`k!limpar <número de mensagens MAIOR QUE 2>`")
      .addField("Permissão", "O staff que for mutar tem que esta em um cargo com a permissão `Gerenciar mensagens`")
   
   if(args == "") return message.channel.send(comousar).then(msg => msg.delete(10000));
   if(args == "2") return message.reply("por favor, digite o número maior que 2 para deletar as mensagens. :x:").then(msg => msg.delete(8000));
   if(args == "1") return message.reply("por favor, digite o número maior que 2 para deletar as mensagens. :x:").then(msg => msg.delete(8000));
   if(!args[0]) return message.reply("por favor, digite o número maior que 2 para deletar as mensagens.");
   message.channel.bulkDelete(args[0]).catch(error => message.reply(`Algumas mensagens não puderam ser deletadas por serem enviadas a mais de 2 semanas!`));
   
   message.channel.send(`Chat limpo! Limpado **${args[0]}** mensagens por ${message.author}.`).then(msg => msg.delete(5000));
   
}

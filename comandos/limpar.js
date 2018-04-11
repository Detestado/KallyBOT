const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});

   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("você não tem permissão! :x:");
   if(args == "2") return message.reply("por favor, digite o número maior que 2 para deletar as mensagens. :x:");
   if(args == "1") return message.reply("por favor, digite o número maior que 2 para deletar as mensagens. :x:");
   if(!args[0]) return message.reply("por favor, digite o número maior que 2 para deletar as mensagens.");
   message.channel.bulkDelete(args[0]).catch(error => 
                                            const erro = new Discord.RichEmbed()
                                             .setColor("ff0000")
                                             .setAuthor('Deu um erro', client.user.avatarURL)
         
                                             .setDescription("```js\n" + error +"```")
      
      
                                              .setTimestamp()
                                              .setFooter("© Kallyᴮᴱᵀᴬ ERRO", message.author.avatarURL)
                                             
                                             message.channel.send(erro));
   
   message.channel.send(`Chat limpo! Limpado **${args[0]}** mensagens por ${message.author}.`).then(msg => msg.delete(5000));
   
}

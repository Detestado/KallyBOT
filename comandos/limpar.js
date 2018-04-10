const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("você não tem permissão! :x:");
   if(!args[0]) return message.reply("por favor, digite um número.");
   message.channel.bulkDelete(args[0]).then(() => {
   message.channel.send(`Limpado **${args[0]}** mensagens.`).then(msg => msg.delete(5000));
});
   
}

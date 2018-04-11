const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    message.delete().catch(O_o=>{});
    if(!message.member.roles.some(r=>["⚒ Desenvolvedor"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("por favor, mencione um usuário valido. Você não mencionou o usuário ou ele não esta aqui no servidor. :x:");
    if(!member.kickable) 
      return message.reply("eu não posso banir esse usuário! Ele(a) têm um cargo maior.");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} foi kickado por ${message.author.tag} motivo: ${reason}`);

   
}

const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   if(message.author.id === "244537374258888725"){
    message.delete().catch(O_o=>{});
    let servidornome = args.join(" ");
    if(!servidornome)
        return message.reply("por favor, digite o nome do servidor!")

    let guild = client.guilds.find("name", servidornome);
    if(!guild)
        return message.reply("por favor, o servidor que você digitou não existe!")

    guild.leave()
    message.reply(`você me removeu do servidor ${servidornome}! :white_check_mark:`)

    client.channels.get("429844744110211072").send(`**Removido por ${message.author}!**`);


   
   }
}

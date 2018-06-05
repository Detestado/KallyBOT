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

    const sai = new Discord.RichEmbed()
        .setAuthor(`${guild.name} | Removido`)
        .setDescription(`Fui removido do servidor **${guild.name}** (ID: ${guild.id})!`)
        .setColor("#ff0000")
        .addField("Membros", `Com **${guild.memberCount}** membros`)
        .addField("Dono", `${guild.owner} (ID: ${guild.owner.id})`)

        .setFooter(`${message.author.tag} me removeu do servidor!`, guild.iconURL)

    client.channels.get("429844744110211072").send(sai);


   
   }
}

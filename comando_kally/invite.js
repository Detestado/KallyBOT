const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    let servidornome = args.join(" ");
    let guild = client.guilds.find("name", servidornome);
    if(!guild)
        return message.reply("por favor, o servidor que você digitou não existe!")
    message.reply("qual o canal?")
    var collector =  message.channel.createMessageCollector(a => a.author.id == message.author.id,{time: 1000 * 20,max: 1})
    collector.on('collect', a => {
            var canal;
            canal = a.content;

            let canall = guild.channels.find("name", canal);
            if(!canall)
                return message.reply("por favor, o canal que você digitou não existe!") 
            canall.createInvite({maxAge: 0}).then(invite => {

            let embed = new Discord.RichEmbed()
                .setAuthor(guild.name, guild.iconURL)
                .setDescription(`Criei o invite no servidor **${guild.name}**, no canal **${canal}**`)
                .addField("Link do invite:", invite)
                .setFooter(`© Por: ${message.author.tag}`)
            message.channel.send(embed);

            });
        })
}

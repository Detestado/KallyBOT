const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   if(message.author.id === "244537374258888725"){
    message.delete().catch(O_o=>{});
    let servidornome = args.join(" ");
    if(!servidornome){
        const infoserv = new Discord.RichEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setDescription(`Informação do servidor **${message.guild.name}**:`)
            .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
            .setFooter("© Kally")
            .addField(":crown: Dono:", message.guild.owner.user.tag)
            .addField(":busts_in_silhouette: Quantidade de membros:", `${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size} - ${message.guild.members.filter(m=>m.user.bot).size} bot(s)`)

        message.channel.send(infoserv)



    }else {
        let guild = client.guilds.find("name", servidornome);
        if(!guild)
            return message.reply("por favor, o servidor que você digitou não existe!")
        const infoserv = new Discord.RichEmbed()
            .setAuthor(guild.name, guild.iconURL)
            .setDescription(`Informação do servidor **${guild.name}**:`)
            .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
            .setFooter("© Kally")
            .addField(":crown: Dono:", guild.owner.user.tag)
            .addField(":busts_in_silhouette: Quantidade de membros:", `${guild.memberCount - guild.members.filter(m=>m.user.bot).size} - ${guild.members.filter(m=>m.user.bot).size} bot(s)`)

        message.channel.send(infoserv)

        }
    }
}

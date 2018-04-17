const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   if(message.member.id == "244537374258888725") {
   
      let nome = args.slice(0).join(' ');
      if(!nome)
        return message.reply("por favor, digite o nome do servidor!");
   
      let link = args.slice(1).join(' ');
      if(!link)
        return message.reply("por favor, coloque o link do convite do servidor!");
        
      const parceiro = new Discord.RichEmbed()
        .setAuthor("NOVO PARCEIRO: " + nome)
        .setDescription(`Olá, agora temos um novo parceiro, heeeyyy :tada: entra ai para dar uma ajuda! hehe`)
        .setColor("ff0000")

        .setTimestamp()
        .setFooter("© Kally")
        
      client.channels.get("435911894830678016").send("@everyone ")
      client.channels.get("435911894830678016").send(parceiro)
      client.channels.get("435911894830678016").send("Link: " + link)

   }   
}

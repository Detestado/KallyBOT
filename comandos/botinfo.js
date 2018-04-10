const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (client, message, args) =>{
   
   const dono = message.guild.members.get("244537374258888725");
   
    var date = new Date(client.uptime);
    var uptime = '';
   
   const d = uptime += date.getUTCDate() - 1 + 'd, ';
   const h = uptime += date.getUTCHours() + 'h, ';
   const m = uptime += date.getUTCMinutes() + 'm, ';
   const s = uptime += date.getUTCSeconds() + 's';
   
   const info = new Discord.RichEmbed()
      .setColor("#0092ca")
      .setAuthor(client.user.username, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)

   
      .setDescription(`Olá, me chamo Kally, sou focado na moderação dos servidores do discord, entre no meu servidor [aqui](https://discord.gg/nbEqSrv), 
lá o meu dono pode te ajuda e você vai receber atualizações e também entre no meu [site](https://kally.glitch.me/)!\n
Estou em **${client.guilds.size}** servidores do discord. \nSou feito em **JS** (Node.js/JavaScript) e em **Python** :robot: 
\nFazem **` + s + `** que eu estou acordado (ou seja, meu uptime atual) :zzz:\n \nUse **k!ajuda** para saber meus comandos!`)
   
      .addField(":heart: Melhores pessoas:", ` **LockDzn#8368** Foi ele que me criou! :grin:\n**${message.author.username}#${message.author.discriminator}** Por estar falando comigo! :smile: `)
      .setFooter("Kally foi criado por LockDzn - Site: bit.ly/LockDzn", dono.user.avatarURL)
   
   message.channel.send(info)
   
}

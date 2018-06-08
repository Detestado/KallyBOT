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

   const emojijs = client.guilds.get("420316735149965322").emojis.find("name", "javascript");
   const emojidiscordjs = client.guilds.get("420316735149965322").emojis.find("name", "discordjs");
   const emojipython = client.guilds.get("420316735149965322").emojis.find("name", "python");
   const info = new Discord.RichEmbed()
      .setColor("#0092ca")
      .setAuthor(client.user.username, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)

   
      .setDescription(`Olá, me chamo Kally, sou um :mens: **menino**, sou focado na moderação dos servidores do discord.\n\nEstou em **${client.guilds.size} servidores** do discord. \nFui feito em ${emojijs} [**JavaScript**](https://www.javascript.com/) usando ${emojidiscordjs} [**Discord.js**](https://discord.js.org/) e em ${emojipython} [**Python**](https://python.org.br/).
\nFazem **` + s + `** que eu estou acordado (ou seja, meu uptime atual) :zzz:\n \nUse **k!ajuda** para saber meus comandos!`)
   
      .addField(":question: Suporte", `https://discord.gg/fsSNJJH`)
      .addField(":computer: Site", `https://kally.glitch.me`)
      .addField(":heart: Melhores pessoas:", `**${dono}** Foi ele que me criou! :grin:\n**${message.author}** Por estar falando comigo! :smile: `)
      .setFooter("Kally foi criado por LockDzn - Site: bit.ly/LockDzn", dono.user.avatarURL)
   
   message.channel.send(info)
   
}

const Discord = require("discord.js");
const configP = require('./../config.json');
const prefix = configP.prefix;

module.exports.run = async (client, message, args) =>{

   message.react("🤖")
   message.channel.send(`${message.author}, irei mandar a lista de comandos no seu privado! :)`)
   const ajuda1 = new Discord.RichEmbed()
      .setAuthor(`Ajudinha do Kally`)
      .setDescription(`Olá, ${message.author}, aqui esta todos meus comandos!`)
      .setThumbnail(client.user.avatarURL)
      .setColor("#00a4ce")
      .setFooter("© Kallyᴮᴱᵀᴬ - bit.ly/LockDzn")

   const ajuda2 = new Discord.RichEmbed()
      .setAuthor(`Moderação`)
      .setDescription(`*Comandos que vão ajudar a administrar servidores!* 
\n**${prefix}mute** @usuário motivo - Ira mutar o usuário mencionado.
**${prefix}unmute** @usuário - Ira desmutar o usuário mencionado.
**${prefix}ban** @usuário motivo - Ira banir o usuário mencionado do seu servidor do discord.
**${prefix}anuncio** mensagem do anuncio - Ira mandar um anuncio no chat que o comandos foi executado.
**${prefix}limpar** número de mensagens - Ira limpar o número de mensagens escolhido.
**${prefix}kick** @usuário motivo - Ira kickar o usuário mencionado.
**${prefix}aviso** @usuário motivo - Ira avisar o usuário mencionado.`)
      .setThumbnail("https://i.imgur.com/ZmWM1UT.png")
      .setColor("#ff0000")
      .setFooter("© Kallyᴮᴱᵀᴬ Moderação")
      
   const ajuda3 = new Discord.RichEmbed()
      .setAuthor(`Outros`)
      .setDescription(`*Comandos que são "aleatorios" que podem te ajudar ou não. Comandos que não se encaixam nas outras categorias!* \n
\n**${prefix}ajuda** - Ira te mandar a lista de comandos.
**${prefix}botinfo** - Ira mostrar as informaçoes de min. 
**${prefix}avatar** @usuário - Ira mostrar o avatar de um usuário.
**${prefix}uptime** - Ira mostrar o tempo que o bot esta online.
**${prefix}convite** - Ira mostrar o convite do servidor para suporte e invite do bot.
**${prefix}serverinfo** - Ira mostrar as informações do servidor que o comando foi executado.
**${prefix}vote** mensagem da votação - Ira abrir uma votação no canal que o comando foi executado.`)
      .setThumbnail("https://i.imgur.com/lEI7Gm6.gif")
      .setColor("#00f782")
      .setFooter("© Kallyᴮᴱᵀᴬ Outros")
   
      message.author.send(ajuda1)
      message.author.send(ajuda2)
      message.author.send(ajuda3)
   
   
}

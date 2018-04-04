const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.author.react("🤖")
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
\n**k!mute** @usuário motivo - Ira mutar o usuário mencionado.
**k!unmute** @usuário - Ira desmutar o usuário mencionado.
**k!ban** @usuário motivo - Ira banir o usuário mencionado do seu servidor do discord.
**k!anuncio** mensagem do anuncio - Ira mandar um anuncio no chat que o comandos foi executado.`)
      .setThumbnail("https://i.imgur.com/ZmWM1UT.png")
      .setColor("#ff0000")
      .setFooter("© Kallyᴮᴱᵀᴬ Moderação")
      
   const ajuda3 = new Discord.RichEmbed()
      .setAuthor(`Outros`)
      .setDescription(`*Comandos que são "aleatorios" que podem te ajudar ou não. Comandos que não se encaixam nas outras categorias!* \n
\n**k!ajuda** - Ira te mandar a lista de comandos.
**k!botinfo** - Ira mostrar as informaçoes de min. \n**!avatar** @usuário - Ira mostrar o avatar de um usuário.`)
      .setThumbnail("https://i.imgur.com/lEI7Gm6.gif")
      .setColor("#00f782")
      .setFooter("© Kallyᴮᴱᵀᴬ Outros")
   
      message.author.send(ajuda1)
      message.author.send(ajuda2)
      message.author.send(ajuda3)
   
   
}

const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});
   const ajuda1 = new Discord.RichEmbed()
      .setAuthor(":question: Ajuda do Kally")
      .setDescription(`Olá, ${message.author.tag}, aqui esta todos meus comandos!`)
      .setThumbnail(client.user.avatarURL)
      .setColor("#00a4ce")
      .setFooter("© Kallyᴮᴱᵀᴬ - bit.ly/LockDzn")

   const ajuda2 = new Discord.RichEmbed()
      .setAuthor(":cop: Moderação")
      .setDescription(`*Comandos que vão ajudar a administrar servidores!* 
\n**!mute** @usuário motivo - Ira mutar o usuário mencionado.
**!unmute** @usuário - Ira desmutar o usuário mencionado.
**!ban** @usuáriomotivo - Ira banir o usuário mencionado do seu servidor do discord.`)
      .setThumbnail("https://i.imgur.com/ZmWM1UT.png")
      .setColor("#ff0000")
      .setFooter("© Kallyᴮᴱᵀᴬ Moderação")
      
   const ajuda3 = new Discord.RichEmbed()
      .setAuthor(":card_box: Outros")
      .setDescription(`*Comandos que "aleatorios" que podem te ajudar ou não. Comandos que não se encaixam nas outras categorias!* \n
\n**!ajuda** - Ira te mandar a lista de comandos.
**!botinfo** - Ira mostrar as informaçoes de min. \n**!avatar** ``@usuário`` - Ira mostrar o avatar de um usuário.`)
      .setThumbnail("https://i.imgur.com/lEI7Gm6.gif")
      .setColor("#00f782")
      .setFooter("© Kallyᴮᴱᵀᴬ Outros")
   
      message.author.send(ajuda1)
      message.author.send(ajuda2)
      message.author.send(ajuda3)
   
   
}

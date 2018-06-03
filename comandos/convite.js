const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{
      
      const emojicarregando = client.guilds.get("420316735149965322").emojis.find("name", "KallyCarregando");
      message.channel.send(`${message.author}, irei mandar os convites no seu privado! ${emojicarregando}`).then(msg => msg.delete(6000));
      const convite = new Discord.RichEmbed()
        .setColor("#1297f0")
        .setAuthor("Convite", client.user.avatarURL)
        
        .setDescription(`Convite para servidor de suporte do Kally: https://discord.gg/fsSNJJH \n\nInvite para colocar o Kally no seu servidor: https://kally.glitch.me/invite.html`)

      message.author.send(convite)
  

   
}

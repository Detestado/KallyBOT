const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});
   if (message.member.hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) {
    const comousar = new Discord.RichEmbed()
       .setAuthor("Kally", client.user.avatarURL)
       .setTitle("k!setcargo")
       .setDescription(`Ira adicionar o cargo ao usuário mencionado.`)
       .setColor("#60d1f6")
       .setFooter("© Kally - kally.glitch.me")
       .addField("Como usar", "`k!setcargo @usuário <nome do cargo>`")
       .addField("Permissão", "O staff que for adicinar o cargo tem que está em um cargo com a permissão `Gerenciar cargos`")
       .addField("Info", "A **minha** permissão tem que está **acima dos cargos** que eu vou adicionar!")
   let member = message.mentions.members.first();
   if(!member)
    return message.channel.send(comousar).then(msg => msg.delete(10000));
   let rolename = args.slice(1).join(' ');
   if(!rolename)
    return message.channel.send("por favor, digite o cargo para adicionar! (**OBS:** Digite sem o @ e se tiver emojis, digite com emojis! :)").then(msg => msg.delete(10000));
   
    if (!message.guild.roles.find("name", rolename)) {
      
        const norole = new Discord.RichEmbed()
           .setColor("ff0000")
           .setAuthor('Deu um erro', client.user.avatarURL)
           
           .setDescription(`${message.author}, o cargo **${rolename}** não existe (**OBS:** Coloque o nome do cargo certo, emojis, minúsculo e maiúsculo nos lugares certos.)`)
        
        
           .setTimestamp()
           .setFooter("© Kally ERRO", message.author.avatarURL)
        
        message.channel.send(norole)
        return;
        
       } else {
          let role = message.guild.roles.find("name", rolename);
          member.addRole(role)
          message.reply(`cargo `+ "`" +rolename + "`" + ` setado com sucesso em ${member}! :white_check_mark:`).then(msg => msg.delete(5000));
        
    }
   let role = message.guild.roles.find("name", rolename);
   if(message.guild.channels.find("name", "changelog")){
      let guild = message.guild.channels.find("name", "changelog");
      const changelog = new Discord.RichEmbed()
        .setTitle("🔧 CHANGELOG")
        .setDescription(member+ " adicionado como " +role+"!")
        .setColor(role.color)
        .setFooter(`Por: ${member.user.tag} - © Kally 🔧 Change-log`)   
      guild.send(changelog) 
   }
   if(message.guild.channels.find("name", "change-log")){
    let guild = message.guild.channels.find("name", "change-log");
    const changelog = new Discord.RichEmbed()
      .setTitle("🔧 CHANGE-LOG")
      .setDescription(member+ " adicionado como " +role+"!")
      .setColor(role.color)
      .setFooter(`Por: ${member.user.tag} - © Kally 🔧 Change-log`)    
    guild.send(changelog) 
   }
   if(message.guild.channels.find("name", "🔧change-log")){
    let guild = message.guild.channels.find("name", "🔧change-log");
    const changelog = new Discord.RichEmbed()
      .setTitle(":wrench: CHANGE-LOG")
      .setDescription(member+ " adicionado como " +role+"!")
      .setColor(role.color)
      .setFooter(`Por: ${member.user.tag} - © Kally 🔧 Change-log`)  
    guild.send(changelog) 
   }
   if(message.guild.channels.find("name", "🔧changelog")){
    let guild = message.guild.channels.find("name", "🔧changelog");
    const changelog = new Discord.RichEmbed()
      .setTitle(":wrench: CHANGELOG")
      .setDescription(member+ " adicionado como "+role+"!")
      .setColor(role.color)
      .setFooter(`Por: ${member.user.tag} - © Kally 🔧 Change-log`)  
    guild.send(changelog) 
   }
   }else {
        const emojinop = client.guilds.get("420316735149965322").emojis.find("name", "KallyNop");
        message.reply("você não tem permissão! " + emojinop).then(msg => msg.delete(5000));
   }
}

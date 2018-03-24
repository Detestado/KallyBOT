const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});
   
     let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Ninguem foi especificado.")
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Não posso mutalo");
  let muterole = message.guild.roles.find(`name`, "mute")
  //CRIACAO DE ROLE C
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "mute",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //CRIACAO DE ROLE F
  let mutetime = args[1];
  if(!mutetime) return message.reply("Não especificaste um tempo");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> foi mutado por ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> foi desmutado`)
  }, ms(mutetime));


  //FINAL DO MODULE
}   
}

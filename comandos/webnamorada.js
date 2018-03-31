const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});
   let msg = args.slice(1).join(' ');
   
   if(message.channel.id = "429489240808751115"){
     const webn = new Discord.WebhookClient('429490324105199616', 'tjjIxpzILLTQwXfA1wUwBfwNMr8VEuGSS1I-DFzmeA-GSXiRryvoB-JjixU5KwjhAGND');
     
     if(msg = "Oi amor"){
        if(message.author.id = "244537374258888725"){
           webn.send('<@244537374258888725> Oi amorzinho! <3');
        } else {
           webn.send(`${message.author} ??? quem é você??`);
   }}}// FIM
     if(msg = "é você na foto?"){
        if(message.author.id = "244537374258888725"){
           webn.send(`${message.author} Sim, sou eu.`);
        } else {
           webn.send(`${message.author} não, essa foto foi para inganar o Lock.`);
   }}} // FIM

}

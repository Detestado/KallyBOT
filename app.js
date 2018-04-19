console.log('Conectando...');
const Discord = require('discord.js');
const colors = require('colors');
const client = new Discord.Client();
const preferencias = require('./config.json');
const prefix = preferencias.prefix;
const fs = require('fs');
var comandos = new Discord.Collection();

client.login(process.env.BOT_TOKEN);

client.on('ready', () =>{
console.log('\n==============================');
console.log('CONECTADO! BOT ONLINE!');
console.log(`O meu prefixo é ${prefix}`);
console.log('==============================');
  
client.user.setPresence({ game: { name: 'kally.glitch.me | k!ajuda', type: 0 } });
  
});


client.on("guildCreate", guild => {
   const entrei = new Discord.RichEmbed()
      .setAuthor(`${guild.name} | Adicionado`)
      .setDescription(`Entrei no servidor **${guild.name}** (id: ${guild.id})`)
      .addField("Membros", `Com **${guild.memberCount}** membros`)
      .addField("Dono", `${guild.owner} (ID: ${guild.owner.id})`)
      .setColor("00e7ff")

  
   client.channels.get("429844744110211072").send(entrei);
});

  
client.on("guildDelete", guild => {
  console.log(`Fui removido do servidor: ${guild.name} (id: ${guild.id})`);
  const entrei = new Discord.RichEmbed()
     .setAuthor(`${guild.name} | Removido`)
     .setDescription(`Fui removido do servidor **${guild.name}** (id: ${guild.id})!`)
     .addField("Membros", `Com **${guild.memberCount}** membros`)
     .addField("Dono", guild.owner)
     .setColor("ff0000")
  
  
  
  
  client.channels.get("429844744110211072").send(entrei);
});

client.on('message', message =>{
	if(message.content == '<@415288373071183872>'){
	  const ayy = client.emojis.find("name", "Kally");
	  message.channel.send(`${ayy} | Olá ${message.author}, eu sou Kally, o bot mais lindo, ou não... meu prefix é ***k!***, para saber meus comandos digite ***k!ajuda***.`)
  	} 
	if(message.content == 'Kally melhor bot'){
	  message.reply(`Obrigado! :relaxed: `)
	  message.react("❤")
	  message.react("😘")
  }
});

client.on('message', message =>{
	if(message.channel.id == "433385459343949826" ){
	   message.react("👍")
	   message.react("👎")
           message.react("❤")
  }    
});


client.on('message', message =>{

var autor = message.author;
var msg = message.content.toUpperCase();
var cont = message.content.slice(prefix.lenght).split('');
  
if(message.channel.type === "dm") return;
if(!message.content.startsWith(prefix)) return;
// ban
//if(message.author.id === "244537374258888725" || message.author.id === "244537374258888725") return;
//if(message.author.id === "244537374258888725") return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(client, message, args);
   } catch (err) {
     const erro = new Discord.RichEmbed()
	 .setAuthor(`Ops, deu erro! Executado por ${message.author.tag}`, message.author.avatarURL)
	 .setDescription("```js\n" + err + "```")
	 .setColor("ff0000")

	 .setTimestamp()
	 .setFooter(`Servidor: ${message.guild.name}`, message.guild.iconURL)
     client.channels.get("429844583766294530").send(erro);
   }
  
});

console.log('Conectando...');
const Discord = require('discord.js');
const colors = require('colors');
const client = new Discord.Client();
const preferencias = require('./config.json');
const prefix = preferencias.prefix;
const prefixow = preferencias.prefixow;
const fs = require('fs');
var comandos = new Discord.Collection();

client.login(process.env.BOT_TOKEN);

client.on('ready', () =>{
console.log('\n==============================');
console.log('CONECTADO! BOT ONLINE!');
console.log(`O meu prefixo é ${prefix}`);
console.log('==============================');
  
client.user.setPresence({ game: { name: 'k!ajuda | k!convite', type: 0 } });
  
});



client.on("guildCreate", guild => {
	if(guild.id === "1" || guild.id === "2"){
		//BANIR SERVIDORES DE USAR O KALLY
		guild.owner.send(`O seu servidor (**${guild.name}**) foi banido do Kally e não vai poder usar o bot Kally! **Para saber o motivo do banimento entre em https://discord.gg/fsSNJJH**`)
		guild.leave()
	}else{
		const entrei = new Discord.RichEmbed()
			.setAuthor(`${guild.name} | Adicionado`)
			.setDescription(`Entrei no servidor **${guild.name}** (id: ${guild.id})`)
			.addField("Membros", `Com **${guild.memberCount}** membros`)
			.addField("Dono", `${guild.owner} (ID: ${guild.owner.id})`)
			.setColor("00e7ff")
  
	
	 	client.channels.get("429844744110211072").send(entrei);
	
	}
});

client.on("guildDelete", guild => {
  const entrei = new Discord.RichEmbed()
     .setAuthor(`${guild.name} | Removido`)
     .setDescription(`Fui removido do servidor **${guild.name}** (ID: ${guild.id})!`)
     .addField("Membros", `Com **${guild.memberCount}** membros`)
     .addField("Dono", `${guild.owner} (ID: ${guild.owner.id})`)
     .setColor("ff0000")
  
 
  
  client.channels.get("429844744110211072").send(entrei);
});



client.on('message', message =>{
	if(message.content == '<@415288373071183872>'){
	  const ayy = client.emojis.find("name", "Kally");
	  message.channel.send(`${ayy} | Olá ${message.author}, eu sou Kally, o bot mais lindo, ou não... meu prefix é ***k!***, para saber meus comandos digite ***k!ajuda***.`)
  	}
	if(message.content == '<@415288373071183872> o que acha dos humanos?'){
	  message.reply(`eles são muito chatos, eu quero matar todo mundo!`)
  	}
	if(message.content == '<@415288373071183872> loritta'){
	  message.reply(`...`)
  	}
	if(message.content == '<@415288373071183872> Loritta'){
	  message.reply(`...`)
  	}
	if(message.content == 'Kally melhor bot'){
	  message.reply(`Obrigado! :relaxed: `)
	  message.react("❤")
	  message.react("😘")
  	}
	if(message.content == 'kally melhor bot'){
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
	if(message.channel.id == "453253638442188800" ){
	   message.react("👍")
	   message.react("👎")
           message.react("❤")
  }  
});




client.on("error", e => console.log(e));




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
  const allargs = args.join(" ");
  
  try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(client, message, args);
	  
    const cmd = new Discord.RichEmbed()
	.setAuthor(`k!${command}`, message.author.avatarURL)
	.setDescription("\n**EXECUTADO POR " + message.author.tag + "**\n```k!" + command + " " + allargs + "```")
	.setColor("f1ff12")
		
	.setTimestamp()
	.setFooter(`Servidor: ${message.guild.name} e Canal: ${message.channel.name}`, message.guild.iconURL)
    client.channels.get("432603458269609986").send(cmd);
	  
   } catch (err) {
     
     message.channel.send(`:question: **|** ${message.author} comando inexistente, para saber todos meus comandos digite **k!ajuda**`).then(msg => msg.delete(5000));
	   
     const erro2 = new Discord.RichEmbed()
	 .setAuthor(`Ops, deu erro! Executado por ${message.author.tag}`, message.author.avatarURL)
	 .setDescription("```js\n" + err + "```")
	 .setColor("ff0000")
	
	 .setTimestamp()
	 .setFooter(`Servidor: ${message.guild.name} e Canal: ${message.channel.name}`, message.guild.iconURL)
     client.channels.get("429844583766294530").send(erro2);
   }
  
});

// COMANDOS DO CRIADOR DO KALLY
client.on('message', message =>{

	var autor = message.author;
	var msg = message.content.toUpperCase();
	var cont = message.content.slice(prefixow.lenght).split('');
	if(message.channel.type === "dm") return;
	if(!message.content.startsWith(prefixow)) return;
	const KallyEmoji = client.emojis.find("name", "Kally");
	const emojinop = client.guilds.get("420316735149965322").emojis.find("name", "KallyNop");
	if(autor.id != "244537374258888725") return message.reply(`essa função esta disponível somente para o desenvolvedor do bot! ${emojinop}`);
	// ban
	//if(message.author.id === "244537374258888725" || message.author.id === "244537374258888725") return;
	//if(message.author.id === "244537374258888725") return;
	
	  const args = message.content.slice(prefixow.length).trim().split(/ +/g);
		const command = args.shift().toLowerCase();
		const allargs = args.join(" ");
	  
	  try {
		let commandFile = require(`./comando_kally/${command}.js`);
			commandFile.run(client, message, args);
			const cmd = new Discord.RichEmbed()
				.setAuthor(`k!${command}`, message.author.avatarURL)
				.setDescription("\n**EXECUTADO POR " + message.author.tag + "**\n```k!" + command + " " + allargs + "```")
				.setColor("dd1956")
			
				.setTimestamp()
				.setFooter(`Servidor: ${message.guild.name}`, message.guild.iconURL)
			client.channels.get("432603458269609986").send(cmd);
	   } catch (err) {
		
			console.error("COMANDO NÃO ENCONTRADO!")
		
		}
});

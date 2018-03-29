const Discord = require('discord.js');
const colors = require('colors');
const client = new Discord.Client();
const preferencias = require('./config.json');
const prefix = preferencias.prefix;
const fs = require('fs');
var comandos = new Discord.Collection();

client.login(process.env.BOT_TOKEN);

client.on('ready', () =>{

console.log('O Bot foi iniciado com sucesso.'.green);
console.log(`O meu prefixo é ${prefix}`);
  
client.user.setPresence({ game: { name: 'minha criação', type: 3 } });
  
  
});

fs.readdir("/eventos/", (err, files) => {
    if (err) return console.error("ERRO: " + err);
    files.forEach(file => {
        let eventFunction = require(`/eventos/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});

client.on('message', message =>{

var autor = message.author;
var msg = message.content.toUpperCase();
var cont = message.content.slice(prefix.lenght).split('');
  
if(message.channel.type === "dm") return;
if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(client, message, args);
   } catch (err) {
    console.log(`[ERRO] ${message.author.tag} digitou um comando que não esta no meu banco de dado.`);
   }
});

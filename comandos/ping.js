const Discord = require("discord.js");

const sleep = time => new Promise(resolve => {
    setTimeout(resolve, time)
})

module.exports.run = async (client, message, args) =>{

    message.delete().catch(O_o=>{});
    const emojicarregando = client.guilds.get("420316735149965322").emojis.find("name", "KallyCarregando");
    const m = await message.channel.send(`:ping_pong: Pong! ${emojicarregando}`);
    if(args[0] == "-api"){
        const ping_API = async() => {
            await sleep(5000)
    
            if(Math.round(client.ping) <= 50){
                const pingbom = new Discord.RichEmbed()
                    .setColor("0cff00")
    
                    .setDescription(`:ping_pong: Pong | Latência da API: ${Math.round(client.ping)}ms. (MUITO BOM)`)
                    .setTimestamp()
    
    
                message.channel.send(message.author, pingbom);
                m.delete();
                return;
            }
            if(Math.round(client.ping) <= 120){
                const pingbom = new Discord.RichEmbed()
                    .setColor("4faa17")
    
                    .setDescription(`:ping_pong: Pong | Latência da API: ${Math.round(client.ping)}ms. (BOM)`)
                    .setTimestamp()
    
    
                message.channel.send(message.author, pingbom);
                m.delete();
                return;
            }
            if(Math.round(client.ping) - message.createdTimestamp <= 450){
                const pingruim = new Discord.RichEmbed()
                    .setColor("ffb000")
    
                    .setDescription(`:ping_pong: Pong | Latência da API: ${Math.round(client.ping)}ms. (RUIM)`)
                    .setTimestamp()
    
                message.channel.send(message.author, pingruim);
                m.delete();
                return;
            }
            if(Math.round(client.ping) - message.createdTimestamp >= 451){
                const pingruim = new Discord.RichEmbed()
                    .setColor("be2727")
    
                    .setDescription(`:ping_pong: Pong | Latência da API: ${Math.round(client.ping)}ms. (MUITO RUIM)`)
                    .setTimestamp()
    
                message.channel.send(message.author, pingruim);
                m.delete();
                return;
            }
        }
        ping_API()
        return;
    }
    const ping_ping = async() => {
        await sleep(5000)

        if(m.createdTimestamp - message.createdTimestamp <= 50){
            const pingbom = new Discord.RichEmbed()
                .setColor("0cff00")

                .setDescription(`:ping_pong: Pong | Latência de: ${m.createdTimestamp - message.createdTimestamp}ms. (MUITO BOM)`)
                .setTimestamp()


            message.channel.send(message.author, pingbom);
            m.delete();
            return;
        }
        if(m.createdTimestamp - message.createdTimestamp <= 120){
            const pingbom = new Discord.RichEmbed()
                .setColor("4faa17")

                .setDescription(`:ping_pong: Pong | Latência de: ${m.createdTimestamp - message.createdTimestamp}ms. (BOM)`)
                .setTimestamp()


            message.channel.send(message.author, pingbom);
            m.delete();
            return;
        }
        if(m.createdTimestamp - message.createdTimestamp <= 450){
            const pingruim = new Discord.RichEmbed()
                .setColor("ffb000")

                .setDescription(`:ping_pong: Pong | Latência de: ${m.createdTimestamp - message.createdTimestamp}ms. (RUIM)`)
                .setTimestamp()

            message.channel.send(message.author, pingruim);
            m.delete();
            return;
        }
        if(m.createdTimestamp - message.createdTimestamp >= 451){
            const pingruim = new Discord.RichEmbed()
                .setColor("be2727")

                .setDescription(`:ping_pong: Pong | Latência de: ${m.createdTimestamp - message.createdTimestamp}ms. (MUITO RUIM)`)
                .setTimestamp()

            message.channel.send(message.author, pingruim);
            m.delete();
            return;
        }
    }
    ping_ping()
    return;
}

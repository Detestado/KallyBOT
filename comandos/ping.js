module.exports.run = async (client, message, args) =>{

    message.delete().catch(O_o=>{});
    const m = await message.channel.send(":ping_pong: Pong!");
    m.edit(`:ping_pong: Pong | Latência de: ${m.createdTimestamp - message.createdTimestamp}ms.`);
}

exports.run = (client, member) => {
    console.log('Entrada funfando!')
    if(member.guild.id === "420316735149965322")
        return console.log('Entrada funfando so que n foi no servidor do kally!')
    const defaultChannel = member.guild.channels.find(c=> c.permissionsFor(guild.me).has("SEND_MESSAGES"));
    defaultChannel.send(`Bem-vindo ${member.user}!`).catch(console.error);
    console.log('Entrada funfando foi no servidor do kally!')
}



exports.run = (client, member) => {

  const channel = member.guild.channels.get("430142996051263490");

  channel.send(`📥 ${member.user.tag} (${member.user.id}) joined.`);
};

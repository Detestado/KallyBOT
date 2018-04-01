const moment = require("moment");

exports.run = (client, member) => {
  const { schemaManager } = client.settingGateway;
  if (!schemaManager.schema["rawLogs"]) {
    schemaManager.add("rawLogs", {type: "String", array: true, default: []}, true);
    schemaManager.add("rawLogChannel", {type: "String"});
  }

  if(!member || !member.id || !member.guild) return;
  const conf = member.guild.settings;
  if(!conf.rawLogs.includes("all") && !conf.rawLogs.includes("messageUpdate") || !conf.rawLogChannel) return;
  const channel = member.guild.channels.get(conf.rawLogChannel);
  if(!channel) return;
  const fromNow = moment(member.user.createdTimestamp).fromNow();
  const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? "🆕" : "";
  channel.send(`📥 ${member.user.tag} (${member.user.id}) joined. Created: ${fromNow} ${isNew}`);
};

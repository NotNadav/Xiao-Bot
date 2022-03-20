const Discord = require("discord.js");

module.exports = {
  name: "removerole",
  description: "Give roles to users",
  userPerms: ["MANAGE_ROLES"],
  botPerms: ["EMBED_LINKS", "MANAGE_ROLES"],
  execute: async (client, message, args) => {
    const user = message.mentions.members.first();
    if (!user)
      return message.channel.send(
        "Please mention a user you want to remove the role from"
      );
    const name = args.slice(1).join(" ");
    if (!name) return message.channel.send("Please type the name of the role");
    const role = message.mentions.roles.first();
    if (!role) return message.channel.send("Couldn't find the Provided Role");
    await user.roles.remove(role),
      message.channel.send(`${user} now doesn't have the ${role} role`);
  },
};
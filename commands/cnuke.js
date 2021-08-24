const Discord = require('discord.js');

module.exports = {
    name: 'cnuke',
    aliases: ['nukes'],
    description: 'Nuke A Channel qq',
    category: '⚙️| Moderation',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    async execute(client, message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")){
            return message.channel.send("חוקים וזה...")
        }
        let reason = args.join(" ") || "No Reason :/"
        if(!message.channel.deletable) {
            return message.reply("פוניקס המלך")
        }
        let newchannel = await message.channel.clone()
        await message.channel.delete()
    }
}
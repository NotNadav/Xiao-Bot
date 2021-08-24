const Discord = require('discord.js')
module.exports = {
    name: 'poll',
    permissions: ['ADMINISTRATOR'],
    description: 'poll command',
    execute(client, message, args){
        let channel = message.guild.channels.cache.find(c => c.id === '879101132604076072');
        const pollembed = new Discord.MessageEmbed()
        .setColor('#b9f2ff')
        .setTitle(args[0])
        .setTimestamp()
        .setAuthor("Xiao",'https://images-ext-1.discordapp.net/external/Iyoz9SUonX3IUms5TS8ariXkxaKB89HTw_WYFuZYa6I/https/cdn.discordapp.com/avatars/813016141860831272/2ed30614f9cf2d6dce047a6fefb0d4b3.webp')
        .setDescription(args.slice(1).join(" "))
        channel.send(pollembed).then((msg) => {
            msg.react('👍');
            msg.react('👎');
        message.delete();
        });
    }
}
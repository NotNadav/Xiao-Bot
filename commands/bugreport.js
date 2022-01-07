module.exports = {
    name: "bugreport",
    aliases: ['bug', 'reportbug'],
    description: 'let users report bugs',
    async execute(message, args, client, Discord){
        //the channel you want the bug-reports to be send to
        const channel = client.channels.cache.get('PUT THE CHANNEL ID HERE')

         //look if there is a bug specified
        const query = args.join(' ');
        if(!query) return message.reply('בבקשה תציין את הבאג')
        
         //create an embed for the bug report
        const reportEmbed = new Discord.MessageEmbed()
        .setTitle('באג חדש')
        .addField('Author', message.author.toString(), true)
        .addField('Server', message.guild.name, true)
        .addField('Report', query)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        channel.send(reportEmbed);
        //send the embed to the channel
        message.channel.send("**נשלחה הודעה על הבאג לצוות!**")
    }
}

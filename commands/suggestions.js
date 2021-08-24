module.exports = {
    name: "suggest",
    description: 'let users suggest things',
    async execute(message, args, client, Discord){
        //the channel you want the bug-reports to be send to
        const channel = client.channels.cache.get('869640531557376073')

         //look if there is a bug specified
        const query = args.join(' ');
        if(!query) return message.reply('בבקשה ציין את ההצעה')
        
         //create an embed for the bug report
        const reportEmbed = new Discord.MessageEmbed()
        .setTitle('הצעה חדשה')
        .addField('Author', message.author.toString(), true)
        .addField('Server', message.guild.name, true)
        .addField('Suggestion', query)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        channel.send(reportEmbed);
        //send the embed to the channel
        message.channel.send("**נשלחה ההצעה לצוות!**")
    }
}
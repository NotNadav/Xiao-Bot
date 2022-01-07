module.exports = {
    name: 'owner',
    description: "who created me",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#759194')
        .setTitle('**The Owner**')
        .setTimestamp()
        .setDescription('```PUT YOUR NAME AND TAG HERE```')
        .setFooter('הוא מוסר לכם לראות גוגו👀');
        message.channel.send(newEmbed);
    }

    
}

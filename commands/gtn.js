const { MessageCollector, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'gtn',
    aliases: ['gg'],
    description: 'Play guess the number',
    
    // u can change here the range of the numbers
    execute : async(client, message, args, Discord) => {
        let number = Math.ceil(Math.random() * 100);
        let finished = false;

        message.channel.send(
            new MessageEmbed()
            .setTitle(`נחש את המספר`)
            .setDescription(` נחש את המספר (1-100) יש לך \`דקה אחת\``)
            .setColor('RANDOM')
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        )

        let collector = new MessageCollector(message.channel, msg => msg.author.id == message.author.id, {
            time: 60000,
        });

        let tries = 0;

        collector.on('collect', async(msg) => {
            if(finished == false) {
                let split = msg.content.split(/ +/);
                let attempt = split.shift();

                if(isNaN(attempt)) return message.reply(`אחי...`);

                tries++;
    
                if(parseInt(attempt) !== number) return message.reply(`המספר שבחרתי ${parseInt(msg) < number ? 'גבוה' : 'נמוך'} מ ${parseInt(msg)}`)
    
                finished = true;
    
                message.channel.send(
                    new MessageEmbed()
                    .setTitle(`תשובה נכונה!`)
                    .setDescription(`${parseInt(msg)} זה המספר שבחרתי`)
                    .setFooter(`It took you ${tries} times to get it`)
                    .setTimestamp()
                    .setColor('GREEN')
                )
            }
        });
        
        collector.on('end', async(collected) => {
            if(finished == false) return message.reply(`נגמר לך הזמן!`);
        });
    }
}
const { Client, Message, MessageEmbed } = require('discord.js');
require('discord-reply')
const ms = require("ms")
module.exports = {
    name: 'reminder',
  aliases: ["remindme", "remind"],
    execute: async(client, message, args) => {
        let time = args[0]
        if(!time) {
          var embed = new MessageEmbed()
   
        .setDescription("❌ **שימוש לא נכון** ❌ \n לכמה זמן לשים את התזכורת? ")
        .setColor("RANDOM")
        return message.channel.send(embed);
        }
        if(ms(time) > ms("1w")){

         var embed = new MessageEmbed()
           
         .setDescription(`:x: **שימוש לא נכון** :x: \n ${message.author.tag} אתה לא יכול לשים תזכורת ליותר משבוע אחי...`)
          .setColor("RANDOM")
         return message.channel.send(embed);
        }
        let alert = args.slice(1).join(" ")
        if(!alert) {
          var embed = new MessageEmbed()
            
         .setDescription(`:x: **שימוש לא נכון** :x: \n בשביל מה התזכורת?`)
          .setColor("RANDOM")
         return message.channel.send(embed);
          
        }
       var embed = new MessageEmbed()
         .setDescription(`✔️ **התזכורת נקלטה בהצלחה!** ✔️`)   
        .setColor("RANDOM")
        .addField(`Time:`, `\`${time}\``, true)
        .addField(`For:`, `\`${alert}\``, true)
        message.lineReply(embed)
        setTimeout(() => {
            let DP = new MessageEmbed()
            .setAuthor(`Your reminder is Done`)
            .setColor("RANDOM")
            .addField("Duration", `\`${time}\``, true)
            .addField(`Reason:`, `\`${alert}\``, true)
            message.author.send(DP)
        }, ms(time))
    }
}
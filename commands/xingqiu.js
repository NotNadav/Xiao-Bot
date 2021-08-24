module.exports = {
    name: 'xingqiu',
    description: "xingqiu build",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#386B88')
        .setTitle('There u go bbg, a xingqiu build (credit to GOBELYN)')
        .setTimestamp()
        .setAuthor("Xiao",'https://images-ext-1.discordapp.net/external/Iyoz9SUonX3IUms5TS8ariXkxaKB89HTw_WYFuZYa6I/https/cdn.discordapp.com/avatars/813016141860831272/2ed30614f9cf2d6dce047a6fefb0d4b3.webp')
        .setDescription('**Just a reminder this is a recommendation.\nU CAN BUILD HOWEVER U WANT!!**')
        .addFields(
          {name: '``Artifacts sets``', value: '2p Noblesse Oblige, 2p Heart of Depth'},
          {name: '``Talents prioritize ``', value: 'Q > E > na'},
          {name: '``Rarity``', value: '⭐⭐⭐⭐'},
          {name: '``My opinion``', value: '**One of the best dps in the entire game, and is really fun to play.\nIf we r talking bout personality, A usual anemo boy.\nbtw he kinda hot ngl.**'},
      )
        .setImage('https://pbs.twimg.com/media/EveqXA5XEAgJW5Y.jpg')
        .setFooter('Made by Nadav.#2783');
        
        message.channel.send(newEmbed);
    }
  
    
  }
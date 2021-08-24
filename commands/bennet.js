module.exports = {
    name: 'bennet',
    description: "bennet build",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#C22328')
        .setTitle('There u go bbg, a bennet build (credit to GOBELYN)')
        .setTimestamp()
        .setAuthor("Xiao",'https://images-ext-1.discordapp.net/external/Iyoz9SUonX3IUms5TS8ariXkxaKB89HTw_WYFuZYa6I/https/cdn.discordapp.com/avatars/813016141860831272/2ed30614f9cf2d6dce047a6fefb0d4b3.webp')
        .setDescription('**Just a reminder this is a recommendation.\nU CAN BUILD HOWEVER U WANT!!**')
        .addFields(
          {name: '``Artifacts sets``', value: '4p Noblesse Oblige'},
          {name: '``Talents prioritize ``', value: 'Q > E > na'},
          {name: '``Rarity``', value: '⭐⭐⭐⭐'},
          {name: '``My opinion``', value: '**One of the best supports in the game, and also pretty ez to play.\nhis personality is fucking amazing, his backstory just improves it.\nbtw he kinda cute uwu ngl.**'},
      )
        .setImage('https://pbs.twimg.com/media/Eq6swdPW8AAOok_.jpg')
        .setFooter('Made by Nadav.#2783');
        
        message.channel.send(newEmbed);
    }
  
    
  }
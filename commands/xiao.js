module.exports = {
  name: 'xiao',
  description: "xiao build",
  execute(client, message, args, Discord){
      const newEmbed = new Discord.MessageEmbed()
      .setColor('#45A798')
      .setTitle('There u go bbg, a xiao build (credit to GOBELYN)')
      .setTimestamp()
      .setAuthor("Xiao",'https://images-ext-1.discordapp.net/external/Iyoz9SUonX3IUms5TS8ariXkxaKB89HTw_WYFuZYa6I/https/cdn.discordapp.com/avatars/813016141860831272/2ed30614f9cf2d6dce047a6fefb0d4b3.webp')
      .setDescription('**Just a reminder this is a recommendation for most dmg output\nU CAN BUILD HOWEVER U WANT!!**')
      .addFields(
        {name: '``Artifacts sets``', value: '2p vv 2p gladiator'},
        {name: '``Talents prioritize ``', value: 'Q > na > E'},
        {name: '``Rarity``', value: '⭐⭐⭐⭐⭐'},
        {name: '``My opinion``', value: '**One of the best dps in the entire game, and is really fun to play.\nIf we r talking bout personality, A usual anemo boy.\nbtw he kinda hot ngl.**'},
    )
      .setImage('https://pbs.twimg.com/media/EtUpocpWgAov3gN.jpg')
      .setFooter('Made by Nadav.#2783');
      
      message.channel.send(newEmbed);
  }

  
}
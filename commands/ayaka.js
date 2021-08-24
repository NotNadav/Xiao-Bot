module.exports = {
    name: 'ayaka',
    description: "ayaka build",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#D5E3EC')
        .setTitle('There u go bbg, an ayaka build (credit to GOBELYN)')
        .setTimestamp()
        .setAuthor("Xiao",'https://images-ext-1.discordapp.net/external/Iyoz9SUonX3IUms5TS8ariXkxaKB89HTw_WYFuZYa6I/https/cdn.discordapp.com/avatars/813016141860831272/2ed30614f9cf2d6dce047a6fefb0d4b3.webp')
        .setDescription('**Just a reminder this is a recommendation for most dmg output\nU CAN BUILD HOWEVER U WANT!!**')
        .addFields(
          {name: '``Artifacts sets``', value: '4p Blizzard Strayer'},
          {name: '``Talents prioritize ``', value: 'Q > na > E'},
          {name: '``Rarity``', value: '⭐⭐⭐⭐⭐'},
          {name: '``My opinion``', value: '**One of the best dps in the entire game, she\'s really fun to play.\nOne thing i have to say is about her dash.\nHer dash in terms of exploration is insane, BUT, in combat its fucking disgusting.\n Her design tho, fucking great, she is beautiful.**'},
      )
        .setImage('https://upload-os-bbs.hoyolab.com/upload/2021/08/14/63355475/d49d1eeb5ae08b3667819d53702b9781_1473394413208543267.png?x-oss-process=image/resize,s_740/quality,q_80/auto-orient,0/interlace,1/format,jpg')
        .setFooter('Made by Nadav.#2783');
        
        message.channel.send(newEmbed);
    }
  
    
  }
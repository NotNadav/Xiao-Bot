module.exports = {
    name: 'help',
    cooldown: 10,
    description: "just giving help lol",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#45A798')
        .setTitle('הפקודות שלי(:')
        .setTimestamp()
        .setAuthor("Xiao",'https://images-ext-1.discordapp.net/external/Iyoz9SUonX3IUms5TS8ariXkxaKB89HTw_WYFuZYa6I/https/cdn.discordapp.com/avatars/813016141860831272/2ed30614f9cf2d6dce047a6fefb0d4b3.webp')
        .setDescription('**אם תצטרכו עזרה, אלו הן הפקודות שלי, כרגע הם מתעדכנות כי הבוט עדיין בפיתוח ⚙️**')
        .addFields(
            {name: '``*info``', value: 'מידע בקצרה על השרת ℹ️'},
            {name: '``*invite``', value: 'קישור תמידי לשרת 🖥️'},
            {name: '``*owner``', value: 'מציג את היוצר (הגיי) שלי 🏳️‍🌈'},
            {name: '``*bugreport``', value: 'דיווח על באג בבוט/שרת'},
            {name: '``*avatar``', value: 'מציג את תמונת הפרופיל'},
            {name: '``*spotify "song/artist/album name"``', value: 'שולח קישור לאותו שיר/אלבום/יוצר בספוטיפיי'},
        )
        .setImage('https://i.imgur.com/bhm6rFx.gif')
        .setFooter('Made by Nadav.#2783');
        
        message.channel.send(newEmbed);
    }

    
}
const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client();

const prefix = (process.env.DISCORD_PREFIX);
//Create an env. file and put your token there, u can watch guides on yt

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('poggers')
    client.user.setActivity('*help', { type: 'PLAYING' })
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix)|| message.author.bot)return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'bugreport'){
        client.commands.get('bugreport').execute(message, args, client, Discord);
    }else if (command == 'owner'){
        client.commands.get('owner').execute(message, args, Discord);
    }else if (command == 'invite'){
        client.commands.get('invite').execute(message, args);
    }else if (command == 'help'){
        client.commands.get('help').execute(client, message, args, Discord);
    }else if (command == 'avatar'){
        client.commands.get('avatar').execute(client, message, args);
    }else if (command == 'spotify'){
        client.commands.get('spotify').execute(client, message, args);
    }else if (command == 'suggest'){
        client.commands.get('suggest').execute(message, args, client, Discord);
    }else if (command == 'cnuke'){
        client.commands.get('cnuke').execute(client, message, args);
    }else if (command == 'gtn'){
        client.commands.get('gtn').execute(client, message, args, Discord);
    }else if (command == 'emojify'){
        client.commands.get('emojify').execute(client, message, args, Discord);
    }else if (command == 'xiao'){
        client.commands.get('xiao').execute(client, message, args, Discord);
    }else if (command == 'bennet'){
        client.commands.get('bennet').execute(client, message, args, Discord);
    }else if (command == 'xingqiu'){
        client.commands.get('xingqiu').execute(client, message, args, Discord);
    }else if (command == 'ayaka'){
        client.commands.get('ayaka').execute(client, message, args, Discord);
    }else if (command == 'poll'){
        client.commands.get('poll').execute(client, message, args);
    }else if (command == 'sm'){
        client.commands.get('sm').execute(client, message, args);
    }else if (command == 'lock'){
        client.commands.get('lock').execute(client, message, args);
    }else if (command == 'unlock'){
        client.commands.get('unlock').execute(client, message, args);
    }else if (command == 'serverav'){
        client.commands.get('serverav').execute(client, message, args);
    }else if (command == 'serverlist'){
        client.commands.get('serverlist').execute(client, message, args);
    }else if (command == 'reminder'){
        client.commands.get('reminder').execute(client, message, args);
    }else if (command == 'gif'){
        client.commands.get('gif').execute(client, message, args, Discord);
    }else if (command == 'StartGiveaway'){
        client.commands.get('StartGiveaway').execute(client, message, args);
    }else if (command == 'EndGiveaway'){
        client.commands.get('EndGiveaway').execute(client, message, args)
    }else if (command == 'RerollGiveaway'){
        client.commands.get('RerollGiveaway').execute(client, message, args)
    }
});    


client.login(process.env.DISCORD_TOKEN);

const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzExNTEwMzc5MjA0NzA2MzM2.XsOsFw.hkiEw-T98N50djB0g1NgkCEGS00';

const PREFIX = '!';

bot.on('ready', () => {
    console.log('This bot is online!');
})

bot.on('message', message=> {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'hi':
            message.reply('Hii, Welcome to PMLCO OFFICIAL Server!')
            break;
        case 'youtube':
            message.reply('https://www.youtube.com/channel/UCQCOsrIfle70JFVzf9cKpFw')
         break;
        
    }
})

bot.login(token);

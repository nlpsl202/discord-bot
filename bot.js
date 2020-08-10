const Discord = require('discord.js');
const client = new Discord.Client();
var number = null;
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.channel.id === '742069493945335921') {
        if (msg.content.toLowerCase() === 'number') {
            if (number === null) {
                number = Math.floor(Math.random() * Math.floor(101));
                console.log(number);
                msg.reply('pick a number between 0-100');
                client.users.cache.get('610074593490894849').send(number);
            } else {
                msg.reply('you can\'t start a new round until you pick the right number');
            }
            //client.users.get("nlpsl202-Erenyega#1124").send(number);
        }

        if (Number.isInteger(number)) {
            if (parseInt(msg.content) === parseInt(number)) {
                msg.reply('fuck you win!!');
                number = null;
            } else if (parseInt(msg.content) >= 0 && parseInt(msg.content) <= 100) {
                msg.reply('you are wrong idiot!!');
            } else if (Number.isInteger(parseInt(msg.content))) {
                msg.reply('type 0-100 you idiot!!');
            }
        }
    }
});

client.login('NzQyMDE0MzA4MDg2NzEwMjc0.Xy_8rQ.HABkzMaiCPGJPrfApLycuUGCsow');
const { Command } = require('discord.js-commando');
const { MessageAttachment } = require('discord.js');
const Discord = require('discord.js');
module.exports = class test extends Command {
	constructor(client) {
		super(client, {
			name: 'start2',
			group: 'simple',
			memberName: 'start2',
			description: 'begins the game.',
		});
    }
run(message) {
    const embed = new Discord.MessageEmbed()
    .setColor('#FF00FF')
    .setImage('https://media.discordapp.net/attachments/688427230015127742/690326586314326046/1.png?width=883&height=497')
    message.channel.send(embed)
    
    .then(msg =>{
        msg.react('▶️')
        
        const filter = (reaction, user) => {
            return reaction.emoji.name === '▶️' && user.id === message.author.id;
        };
        
        const collector = msg.createReactionCollector(filter, { time: 1800000 });
        let i = 0

        collector.on('collect', (reaction, reactionCollector) => {
            console.log(i)
            if(i <= 2){
                const embed = new Discord.MessageEmbed()
                .setImage('https://drive.google.com/uc?export=view&id=1GXnOGt8fV7k-P597jFNy1AT1soSj96yl')
                msg.edit(embed)
            }
            else{
                
            }
            console.log(`Collected ${reaction.emoji.name}`);
            i++
        });

        collector.on('end', collected => {
            console.log(`Collected ${collected.size} items`);
        });


    })
}
}
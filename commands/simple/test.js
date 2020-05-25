const { Command } = require('discord.js-commando');
const { MessageAttachment } = require('discord.js');
module.exports = class test extends Command {
	constructor(client) {
		super(client, {
			name: 'rockefeller',
			group: 'simple',
			memberName: 'rockefeller',
			description: 'this meme is mad funny.',
		});
    }
run(message) {
    message.channel.send('1273').then(msg =>{
        msg.react('▶️')
        
        const filter = (reaction, user) => {
            return reaction.emoji.name === '▶️' && user.id === message.author.id;
        };
        
        const collector = msg.createReactionCollector(filter, { time: 1800000 });
        let i = 0

        collector.on('collect', (reaction, reactionCollector) => {
            console.log(i)
            if (i == 0){
             msg.edit('down to rockefeller street')   
            }
            else if(i == 1){
                msg.edit('life is marching on do you feel that?')  
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
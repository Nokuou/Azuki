const { Command } = require('discord.js-commando');
const {MessageAttachment} = require('discord.js');

module.exports = class Start extends Command {
	constructor(client) {
		super(client, {
			name: 'serfergedgbdgd',
			group: 'simple',
			memberName: 'dfgdfgfdgfdgdcv',
			description: 'Begins the game.',
		});
	}

	run(message) {
	   // const a = new MessageAttachment('./images/1.jpg');
		// Send the attachment in the message channel with a content
		
			message.channel.send(new MessageAttachment(`./images/1.jpg`)).then(msg =>{

				setTimeout(t =>{msg.edit(new MessageAttachment(`./images/2.jpg`))},1000)

			})
		
    	
	}
};

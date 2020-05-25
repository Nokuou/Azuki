const { Command } = require('discord.js-commando');

module.exports = class reactionscommand extends Command {
	constructor(client) {
		super(client, {
			name: 'bruh',
			group: 'simple',
			memberName: 'bruh',
			description: 'u get reactions gg',
		});
	}
	run(message){
    message.react('🐒')
	}
}


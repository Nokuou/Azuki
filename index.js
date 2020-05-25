const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: '?',
    owner: '303710498464202762',
    invite: 'https://discord.gg/QeThvVE',
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
            ['simple']
        ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));
    

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
    client.user.setActivity('with coconut');
});

client.on('error', console.error);

client.login('Njg4NDI3NzIzMDMwNjU5MTQ4.Xm0yxQ.dS0jyPHPJMOux-l-gbY0HjsVLXM');
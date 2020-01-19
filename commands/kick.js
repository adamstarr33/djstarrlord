module.exports = {
	name: 'kick',
	description: 'Kicks the mentioned user',
	execute(message, args) {
		if(!message.mentions.users.size)
		{
			return message.reply('you need to tag a user in order to use the kick command bro')
		}
	
		const kickTarget = message.mentions.users.first();
		message.channel.send('You wanted to kick: ' + kickTarget.username);
	},
};
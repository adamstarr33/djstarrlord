module.exports = {
	name: 'user-info',
	description: 'Returns info about the user',
	execute(message, args) {
		message.channel.send('Your username is: ' + message.author.username + ' and your user ID is ' + message.author.id);
	},
};
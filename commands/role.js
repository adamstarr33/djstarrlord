module.exports = {
	name: 'role',
	description: 'assigns a user to a role',
	args: true,
	usage: '<user> <role>',
	execute(message, args) {
		message.channel.send('Boop');
	},
};
module.exports = {
	name: 'server',
	description: 'Gives server info',
	execute(message, args) {
		message.channel.send('you are currently in: ' + message.guild.name +'\nTotal members: ' + message.guild.memberCount +'\nThis server was founded by our glorious leader Starr Lord on ' + message.guild.createdAt + ' in ' + message.guild.region);
	},
};
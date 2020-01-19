module.exports = {
	name: 'avatar',
	description: 'Shows mentioned users avatar',
	execute(message, args) 
	{
		if(args[0])
		{
			const user = getUserFromMention(args[0]);
			if(!user)
			{
				return message.reply('You gotta use a proper mention if you wanna see someone else\'s avatar');
			}
			return message.channel.send(user.username + '\'s avatar: ' + user.displayAvatarURL)
		}
		
		return message.channel.send(message.author.username + ', your avatar sir: ' + message.author.displayAvatarURL);

	function getUserFromMention(mention)
	{
		const matches = mention.match(/^<@!?(\d+)>$/);

		if(!matches) return;
		
		const id = matches[1];

		return message.client.users.get(id);
	}
	},

};
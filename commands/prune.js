module.exports = {
	name: 'prune',
	description: 'Deletes the entered number of messages, between 2 and 100',
	execute(message, args) {
		const amount = parseInt(args[0]) + 1;

		if(isNaN(amount))
		{
			return message.reply('that doesn\'t seem to be a valid number my man');
		}
		else if(amount < 1 || amount > 100)
		{
			return message.reply('you\'ve gotta input a number bigger than two and smaller than one hundred if you want me to do anything');
		}
		else
		{
			message.channel.bulkDelete(amount, true).catch(err => 
				{
					console.error(err);
					message.channel.send('Yea so I ran into an error trying to blast the messages in this channel');
				}
		);
		}
	},
};
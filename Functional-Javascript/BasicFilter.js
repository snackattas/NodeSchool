function getShortMessages(messages) {
	//return messages.map(currentValue => currentValue.filter( currentValue => currentValue.message.length < 50 ));
	return messages.filter(currentValue => currentValue.message.length < 50)
	.map(currentValue => currentValue.message);
};

module.exports = getShortMessages;

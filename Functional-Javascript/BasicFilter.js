function getShortMessages(messages) {
	return messages.filter(currentValue => currentValue.message.length < 50)
	.map(currentValue => currentValue.message);
};

module.exports = getShortMessages;

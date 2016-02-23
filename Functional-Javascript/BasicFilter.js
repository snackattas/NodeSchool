function concatenator (value) {
	return value.message.slice(0,50);
};

function getShortMessages(messages) {
	return messages.filter(value => value.message.slice(0,50));
};

module.exports = getShortMessages;

obby = [{message: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbbbbbbbb ccccccccccccccdsafdsafadsfdsafdsafsaccccccccccccccdddddddddddddddddd'},
{message:'ddddddddddddddddeeeeeeeeeeeeeeeefffffffffffffffggggasdfdasfadsfsdafadsfdasfdsggggggggggssssssssssss'}];
console.log(getShortMessages(obby));

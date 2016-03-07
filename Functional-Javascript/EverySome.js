function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
		return submittedUsers.every(everyCurrentValue => goodUsers.some(currentValue => currentValue === everyCurrentValue));
	};
};

module.exports = checkUsersValid;

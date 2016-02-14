// getting rid of the "node location" and the calling javascript file (spots 0 and 1 in the process.argv array), just because I feel like it
var command_line_numbers = process.argv.slice(2);
var total = 0
for (var i = 0; i < command_line_numbers.length ; i++) {
	// this if statement prevents non-numeric strings from making the whole sum NaN
	if (isNaN(+command_line_numbers[i]) === false) {
		total += +command_line_numbers[i];
	};
};

console.log(total);

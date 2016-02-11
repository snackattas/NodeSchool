var systemarray = process.argv.slice(2);
console.log(systemarray);

var array = process.argv;
var total = 0
for (var i = 2; i < array.length ; i++) {
	total += +array[i];
}
console.log(total);

var inputs = process.argv.slice(2);
var results = inputs.map(currentValue => currentValue.slice(0,1))
										.reduce((prev, curr) => prev + curr);

console.log(`[${inputs}] becomes "${results}"`);

var fs = require('fs');
// grab file
var file = process.argv[2];
if (file === undefined) {
    throw Error('File must exist and be specified as a command line argument');
};
var Buffer = fs.readFileSync(file);
var file_content = Buffer.toString();
var split_content = file_content.split('\n');
console.log(split_content.length-1);
// make sure the filepath passed in via command line args is safe and an actual filepath

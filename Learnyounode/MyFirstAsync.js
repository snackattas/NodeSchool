var fs = require('fs');

var file = process.argv[2];
if (file === undefined) {
    throw Error('File must exist and be specified as a command line argument');
};

function callback(error, data) {
  if (error) return console.log(error);
  var file_content = data.toString();
  var split_content = file_content.split('\n');
  console.log(split_content.length-1);
};

fs.readFile(file, 'utf8', callback);

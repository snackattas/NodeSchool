var mymodule = require('./MakeItModularModule.js');

var dir = process.argv[2];
var file_extension = process.argv[3];

function print(error, files) {
  if (error) return console.log(error);
  files.forEach(function(file) {
    console.log(file);
  });
};

mymodule(dir, file_extension, print);

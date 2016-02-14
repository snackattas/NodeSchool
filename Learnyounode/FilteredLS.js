var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var file_extension = '.' + process.argv[3];

function filterByExtension(error, files) {
  if (error) return console.log(error);
  files.forEach(function(file) {
    if (path.extname(file) === file_extension) {
      console.log(file);
    };
  });
};

fs.readdir(dir, filterByExtension);

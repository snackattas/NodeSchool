var fs = require('fs');
var path = require('path');

module.exports = function mymodule(dir, file_extension, callback) {
  file_extension = '.' + file_extension
  fs.readdir(dir, function filterByExtension(error, files) {
    if (error) return callback(error);
    var list = [];
    files.forEach(function(file) {
      if (path.extname(file) === file_extension) {
        list.push(file);
      };
    });
    callback(null, list);
  });
};

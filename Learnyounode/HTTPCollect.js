var http = require('http'),
    bl = require('bl');

function content(err, data) {
    if (err) return console.error(err);
    dataAsString = data.toString()
  	console.log(dataAsString.length);
    console.log(dataAsString);
};

function print_error(error) {
  console.log(error.message);
};

function callback(response) {
  response.setEncoding('utf8');
  response.on('error', print_error);
  response.pipe(bl(content));
};

http.get(process.argv[2], callback);

var http = require('http');

function content(data) {
  	console.log(data);
};

function print_error(error) {
  console.log(error.message);
};

function callback(response) {
  response.setEncoding('utf8');
  response.on('error', print_error);
  response.on('data', content);
};

http.get(process.argv[2], callback);

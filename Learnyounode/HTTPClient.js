http = require('http');
util = require('util');
var URL = process.argv[2];

http.get(process.argv[2], (res) => {
  console.log('Got response: '+ util.inspect(res));
  // consume response body
  res.resume();
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});

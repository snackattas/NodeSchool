var http = require('http'),
    bl = require('bl');

var total_string = [];
var count = -1;

function content(err, data) {
    if (err) return console.error(err);
    bl.append(count);
    dataAsString = data.toString()
    console.log(count);
    total_string[count] = dataAsString;
};

function print_error(error) {
  console.log(error.message);
};

function callback(response) {
  response.setEncoding('utf8');
  response.on('error', print_error);
  count ++;
  response.pipe(bl(content));
};

for (var i = 2; i < 5; i++) {
  http.get(process.argv[i], callback);
};

function print_results(total_string) {
  if (total_string.length == 3) {
    for (var i = 0; i < 3; i++) {
      //console.log(total_string[i]);
    };
  } else {
    setTimeout(function() {
      print_results(total_string);
    }, 1000);
  };
};

print_results(total_string);
// node JugglingAsyncWithoutLibrary.js 'http://stackoverflow.com/questions/1190642/how-can-i-pass-a-parameter-to-a-settimeout-callback' 'http://www.w3schools.com/jsref/met_win_setinterval.asp' 'http://www.w3schools.com/js/js_timing.asp'

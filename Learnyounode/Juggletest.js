var http = require('http'),
    BufferList = require('bl');
var bl = new BufferList();

function print_results(bl) {
  if (bl._bufs.length == 3) {
    //console.log(bl.toString('utf8'));
    console.log(bl);
  } else {
    setTimeout(function() {
      print_results(bl);
    }, 1000);
  };
};

function content(err, data) {
    if (err) return console.error(err);
    bl.append(new Buffer(data.toString()));
};

function print_error(error) {
  console.log(error.message);
};

function callback(response) {
  response.setEncoding('utf8');
  response.on('error', print_error);
  response.pipe(BufferList(content));
};

for (var i = 2; i < 5; i++) {
  http.get(process.argv[i], callback);
};

print_results(bl);

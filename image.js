var fs = require('fs'),
  request = require('request');

var download = function (uri, filename, callback) {
  request.head(uri, function (err, res, body) {
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

download(
  'https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg',
  'google.png',
  function () {
    console.log('done');
  }
);

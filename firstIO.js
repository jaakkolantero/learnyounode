
var i = 0;
var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var bufferString = buffer.toString();
var lines = bufferString.split(/\r\n|\r|\n/);

console.log(lines.length-1);


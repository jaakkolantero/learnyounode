
var net = require('net');
var moment = require('moment');

var port = process.argv[2];


function createData() {
date = moment(new Date());
return date.format('YYYY-MM-DD HH:mm');
}

var server = net.createServer(function(socket) {

	var myData = createData();

	socket.end(myData + "\n");

});

server.listen(port);
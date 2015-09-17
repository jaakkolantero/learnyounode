var url = require('url');

var http = require('http');

var dispatcher = require('httpdispatcher');

const port = 8080;  

function handleRequest(request, response){

}

var server = http.createServer(handleRequest);

server.listen(port, function(){

});
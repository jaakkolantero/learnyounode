var http = require('http');
var bl = require('bl');

const args = process.argv.slice(2);

var myResult = [];

var count = 0;

function printMyResult() {
	for (var i = 0; i < myResult.length; i++)
		console.log(myResult[i]);
}

function getResults(args, i) {
	http.get(args[i], function(response) {

		response.pipe(bl(function(error,data) {
			if (error)
				console.error(error);
			myResult[i] = data.toString();
			if (++count == args.length)
				printMyResult();
		}))

	});

}




for (var i = 0; i < args.length; i++) 
	getResults(args, i);

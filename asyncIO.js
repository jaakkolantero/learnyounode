

var fs = require('fs');
fs.readFile(process.argv[2], function (error, data) {
	if (error)
		throw error;

	//Print number of lines
	console.log(data.toString().split(/\r\n|\r|\n/).length -1);
});

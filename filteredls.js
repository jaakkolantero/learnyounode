

var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2],function readDirectory(err, data){
	if (err)
		throw err;

	for(var i = 0; i < data.length; i++) {
		if (path.extname(data[i]).slice(1) == process.argv[3])
			console.log(data[i]);	
	}
});

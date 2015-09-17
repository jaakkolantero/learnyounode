

var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {

	fs.readdir(dir,function(error,data) {
			if (error) {
				callback(error,null);
			} else {
				var lines = [];
				data.forEach( function(line) {
					if (path.extname(line).slice(1) == ext && path.extname(line).length > 1)
						lines.push(line);	
				});
				if (callback)
					callback(null,lines);
			}
	});

}

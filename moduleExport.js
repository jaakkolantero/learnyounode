

var readdirModule = require('./filteredlsmodule.js');

readdirModule(process.argv[2],process.argv[3],function (error, data){
	if(error)
		throw error;
	for ( var i = 0; i < data.length; i++) 
		console.log(data[i]);

});

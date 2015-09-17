

const 	hyperquest = require('hyperquest')
, 	bl = require('bl')
,	url = (process.argv[2]);

hyperquest(url).pipe( bl(function(err,data) {
	if (err)
		return console.error(err);

	console.log(data.length);
	console.log(data.toString());
}))

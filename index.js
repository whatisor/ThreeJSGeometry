var express = require('express');
var app = express();
var temp = 0;
app.use('/', express.static('.'));
var server = app.listen(8000, "", function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Listening at http://%s:%s.\n', host, port);
});

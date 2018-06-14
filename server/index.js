var http = require('http');
//var dt = require('./myFirstModule');   non serve -prova-


var express = require('express');
var cors = require('cors')

var app = express();
app.use(cors({credentials: true, origin: true}))

/*															 non serve -prova-
http.createServer(function (req, res) {  
    res.writeHead(200, {'Content-Type': 'text/html'});
	 res.write("Hello World! The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8080); 
*/
app.get('/provaGet', function(req, res) {
	console.log("prova get");
	res.end();
});

app.post('/provaPost', function(req, res) {
	console.log("prova post");
	res.end();
});

app.get('/', function(req, res) {
	console.log("index");
	res.end();
});

/* indirizzo della wifi. altrimenti da nexus 5x non riuscivo a connettermi al pc(server) 
tramite ionic3 native http */
app.listen(3000, '192.168.1.129', function() {
    console.log('Express server listening on port 3000');
});
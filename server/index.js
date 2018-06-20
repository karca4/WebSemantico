var http = require('http');

var express = require('express');
var cors = require('cors')
var request = require('request');
var app = express();
app.use(cors({ credentials: true, origin: true }))

//server che invia le richieste fatte dall'app a jena


var prefix = 'prefix :      <http://www.semanticweb.org/carmi/ontologies/2018/5/esameWS#> \n\
prefix owl:   <http://www.w3.org/2002/07/owl#>\n\
prefix rdf:   <http://www.w3.org/1999/02/22-rdf-syntax-ns#> \n\
prefix xsd:   <http://www.w3.org/2001/XMLSchema#> \n\
prefix rdfs:  <http://www.w3.org/2000/01/rdf-schema#>\n';

var urlServer = 'http://localhost:3030/WebSemantico/query';

app.get('/getArchitettura', function (req, res) {
	var query = prefix + 'SELECT ?subject WHERE { ?subject a :pdi_architettonico}';
	request(urlServer,
		{
			qs: {
				query: query
			}
		}, (err, result, body) => {
			res.send(body)
		})

});

app.get('/getArcheologia', function (req, res) {
	var query = prefix + 'SELECT ?subject WHERE { ?subject a :pdi_archeologico}';
	request(urlServer,
		{
			qs: {
				query: query
			}
		}, (err, result, body) => {
			res.send(body)
		})

});

app.get('/getMusei', function (req, res) {
	var query = prefix + 'SELECT ?subject WHERE { ?subject a :pdi_museo}';
	request(urlServer,
		{
			qs: {
				query: query
			}
		}, (err, result, body) => {
			res.send(body)
		})

});

app.get('/getChiese', function (req, res) {
	var query = prefix + 'SELECT ?subject WHERE { ?subject a :chiesa}';
	request(urlServer,
		{
			qs: {
				query: query
			}
		}, (err, result, body) => {
			res.send(body)
		})

});

app.get('/getMonumenti', function (req, res) {
	var query = prefix + 'SELECT ?subject WHERE { ?subject a :monumento}';
	request(urlServer,
		{
			qs: {
				query: query
			}
		}, (err, result, body) => {
			res.send(body)
		})

});

app.get('/getCoordinate', function (req, res) {
	var query = prefix + 'SELECT Distinct ?subject ?coords WHERE { \n\
		{?subject a :monumento.\n\
		  ?subject :hasCoords ?coords}\n\
	  Union\n\
		  {?subject a :chiesa.\n\
		  ?subject :hasCoords ?coords}\n\
	  Union\n\
		  {?subject a :pdi_archeologico.\n\
		  ?subject :hasCoords ?coords}\n\
	  Union\n\
		  {?subject a :pdi_architettonico.\n\
		  ?subject :hasCoords ?coords}\n\
	  Union\n\
		  {?subject a :pdi_museo.\n\
		  ?subject :hasCoords ?coords}}';
	request(urlServer,
		{
			qs: {
				query: query
			}
		}, (err, result, body) => {
			res.send(body)
		})

});


app.get('/search', function (req, res) {
	var query = prefix + 'SELECT Distinct ?subject WHERE { \n\
		{?subject a :monumento.}\n\
	  Union\n\
		  {?subject a :chiesa.}\n\
	  Union\n\
		  {?subject a :pdi_archeologico.}\n\
	  Union\n\
		  {?subject a :pdi_architettonico.}\n\
	  Union\n\
		  {?subject a :pdi_museo.}}';
	request(urlServer,
		{
			qs: {
				query: query
			}
		}, (err, result, body) => {
			res.send(body)
		})

});

// app.post('/provaPost', function (req, res) {
// 	console.log("prova post");
// 	res.end();
// });

// app.get('/', function (req, res) {
// 	console.log("index");
// 	res.end();
// });


var server = app.listen(3000, function () {
    console.log("express server running on port ", server.address().port);
});
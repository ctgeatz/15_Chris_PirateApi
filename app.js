/*
	Node Server

	This server dudette sends static files at localhost:8080/ and acts as an API
	at localhost:8080/piratespeak
*/

var dictionary = require("./pirate-dictionary.js");
var express = require("express");
var app = express();
var endpoint = "/piratespeak";
var path = require("path");
var publicPath = (__dirname,"public")
var staticHandler = express.static(publicPath)

app.use(staticHandler);


app.get(endpoint, function (req, res) {
	var qs = req.query
	var response = {
		"status": {
			"version": 1,
			"message": ""
		},
		"translation": ""
	}

	if (qs.text === undefined) {
		response.status.message = "Put in some text, matey."
		res.status(400)
		res.send(response);
		return
	}

	response.status.message = "Tharr be valid text!"
	response.translation = dictionary.translate(qs.text);
	res.send(response)
})



var envPort = process.env.PORT
if (envPort !== undefined) app.listen(envPort);
else app.listen(8080);




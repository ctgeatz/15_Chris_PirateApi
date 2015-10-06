/*
	Pirate Translation API: The Client

	Client-Side Cheatsheet
	======================
	document.getElementById("id")
	form.elements["name"]
	form.onsumbit = ...
	event.preventDefault()
	inputElement.value
*/


// _____________________________________________________________________________
// Setting up API requests
var form = document.getElementById("translate-form")
var textField = form.elements["english-text"];
var pirateTextDiv = document.getElementById("pirate-text")

var endpoint = "http://localhost:8080/piratespeak"
var parameters = {
	"text": "text"
}



//event - onsubmit//
form.onsubmit = function (event) {
	event.preventDefault();
	parameters.text = textField.value;
	var apiCaller = new ApiCaller(endpoint, parameters);
	apiCaller.getJson(printTranslation)
}

function printTranslation(jsonResponse) {
	var translatedText = jsonResponse.translation
	for (i = 0; i < translatedText.length; i ++) {
		pirateTextDiv.textContent = jsonResponse.translation;		
	}
}




// _____________________________________________________________________________
// Getting elements from the DOM


// _____________________________________________________________________________
// Setting up the events so that the APIs are called when a query is submitted 
// with the form

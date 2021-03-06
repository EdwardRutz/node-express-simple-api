const express = require('express');   //Import Express
const app = express();  //Create an Express App


//An Express GET route handler
//The Express function adds a bunch of methods to Nodes HTTP server to make
//  it easier to respond to requests
//GET methods responds to requests through the route called /greetings
//GET arguments are (route, call back function/how we want to respond)

//View, send a GET request to /quotes to READ a list of quotes
app.get('/quotes', (req, res) => {

});

//View, send a GET request to /quotes/:id to READ one quote
//A colon (:) indicates a URL parameter which is a value added in the URL and passed to the route
app.get('/quotes/:id', (req, res) => {

});

//Create, Send a POST request to /quotes to CREATE a new quote
//Edit, send a PUT request to /quotes/:id to UPDATE a quote
//Delete, send a DELETE request to /quotes/:id to DELETE a quote
//View, send a GET request to /quotes/quotes/random to READ a random quote



//Listen on port 3000
app.listen(3000, () => console.log('Quote API listening on port 3000'));

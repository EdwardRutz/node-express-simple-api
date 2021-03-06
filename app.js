const express = require('express');   //Import Express
const app = express();  //Create an Express App

const records = require('./records');

//An Express GET route handler
//The Express function adds a bunch of methods to Nodes HTTP server to make
//  it easier to respond to requests
//GET methods responds to requests through the route called /greetings
//GET arguments are (route, call back function/how we want to respond)

app.get('/', (req, res) => {
  res.json({welcome: "Welcome to the Simple API Tutorial"});
});

app.get('/greetings', (req, res) => {
  res.json({greeting: "Hello World!"});
});

//View, send a GET request to /quotes to READ a list of quotes
app.get('/quotes', async (req, res) => {
  const quotes = await records.getQuotes();  //await pauses until line is completed before moving on to avoid getting an empty json object
  res.json(quotes);
});

//View, send a GET request to /quotes/:id to READ one quote
//A colon (:) indicates a URL parameter which is a value added in the URL and passed to the route
app.get('/quotes/:id', async (req, res) => {
  const quote = await records.getQuote(req.params.id);
  res.json({quote});
});

// Send a POST request to /quotes to CREATE a new quote





// Send a PUT request to /quotes/:id to UPDATE a quote
// Send a DELETE request to /quotes/:id to DELETE a quote
// Send a GET request to /quotes/quotes/random to READ a random quote



//Listen on port 3000+
app.listen(3002, () => console.log('Quote API listening on port 3002'));

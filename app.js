const express = require('express');   //Import Express
const app = express();  //Create an Express App


//An Express GET route handler
//The Express function adds a bunch of methods to Nodes HTTP server to make
//  it easier to respond to requests
//GET methods responds to requests through the route called /greetings
//GET arguements are (route, call back function/how we want to respond)
app.get('/greetings', (req, res) => {
  res.json({ greeting: "Hello World!" })
});


//Listen on port 3000
app.listen(3000, () => console.log('Quote API listening on port 3000'));

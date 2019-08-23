// Dependencies 
var express = require("express");
var bodyParser = require("body-parser");

// Set up express configuration 
var app = express();

// Create initial port 
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up routes 
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Create listener 

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

//Setup Express
var app = express();

var PORT = process.env.PORT || 3000;

//setup Express data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Form Data
var scores = [];

//Routes
var apiRoutes = require("./app/routing/apiRoutes")(app);
var htmlRoutes = require("./app/routing/htmlRoutes")(app);


//Start server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");



var path=require("path");



// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3005;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

// var dbProduction= "heroku url goes here";
var dbDev = 'mongodb://localhost/dbpeak'

var dbProduction = 'mongodb://heroku_6vnrcjp2:m83sarcldfgtchij05klbq89e@ds139791.mlab.com:39791/heroku_6vnrcjp2'

mongoose.connect(dbProduction, function(err){
  if (err){
    console.log("ERROR: Did not connect to MongoDB.");
  } else {
    console.log("Successfully connected to MongoDB");
  }
});

var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

require("./routes/api-routes.js")(app);


// -------------------------------------------------

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
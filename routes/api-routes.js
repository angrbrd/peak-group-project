//this is the file for the express routes

var path=require("path");

var Article = require("../models/article");

module.exports = function(app) {


// Main "/" Route. This will redirect the user to our rendered React application
// app.get("/", function(req, res) {
//   res.sendFile("../public/index.html");
// });
//changed for test
app.get("/", function(req, res) {
  res.sendFile("./public/index.html");
});

// This is the route we will send GET requests to retrieve our saved articles.
// We will call this route the moment our page gets rendered
app.get("/api", function(req, res) {

  // We will find all the records, sort it in descending order, then limit the records to 5
  Article.find({}).sort([
    ["date", -1]
  ]).limit(10).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// This is the route we will send POST requests to save each search.
app.post("/api", function(req, res) {
  
  console.log("req.body");
  console.log(req.body.title);
  // Here we'll save the location based on the JSON input.
 
  Article.create({
    title: req.body.title,
    url: req.body.url,
    date: req.body.date
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {

      res.redirect("/api");

      
    }
  });
});


  // delete an article from database
  app.post('/api/delete', function(req, res){
    console.log(req.body);
    Article.findOneAndRemove({'title': req.body.title}, function(err){
      if(err){
        console.log("DELETE ERROR", err)
      } else{
        res.redirect("/api");

      }
    });

  });

};  //end of export

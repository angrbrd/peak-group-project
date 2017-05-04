//this is the file for the express routes

var path=require("path");
var School = require("../models/School");
var Student = require("../models/Student");
var Goal = require("../models/Goal");
var Objective = require("../models/Objective");
var Student_Objective = require("../models/Student_Objective");
var Task = require("../models/Task");

module.exports = function(app) {

// Main "/" Route. This will redirect the user to our rendered React application

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


app.get("/api/schoolnames", function(req, res) {

  // We will find all the records, sort it in descending order, then limit the records to 5
  School.find({})
    .sort([["name", 1]])
    .select('name _id')
    .exec(function(err, doc) {
      console.log(doc);
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
  });  

app.get("/api/studentnames/:schoolname", function(req, res) {

  // We will find all the records, sort it in descending order, then limit the records to 5
  School.find({'name': req.params.schoolname})
    .populate("students")
    .exec(function(err, doc) {
      console.log(doc);
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
  });  


// You can create school documents by editing here - just uncode the call in SchoolContainer componentWillMount and
// save and refresh to browser for each school you want to add
app.post("/api/school", function() {
   
 School.create({
    name: "Enloe High School",
    school_system: "Wake",
    school_id: "5",
    address: "",

    latitude: 5,
    longitude: 5
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("added");

      // res.redirect("/api");

      
    }
  });
});

// // This is the route we will send POST requests to save each search.
// app.post("/api", function(req, res) {
  
//   console.log("req.body");
//   console.log(req.body.title);
//   // Here we'll save the location based on the JSON input.
 
//  School.create({
//     title: req.body.title,
//     url: req.body.url,
//     date: req.body.date
//   }, function(err) {
//     if (err) {
//       console.log(err);
//     }
//     else {

//       res.redirect("/api");

      
//     }
//   });
// });




//   // delete an article from database
//   app.post('/api/delete', function(req, res){
//     console.log(req.body);
//     Article.findOneAndRemove({'title': req.body.title}, function(err){
//       if(err){
//         console.log("DELETE ERROR", err)
//       } else{
//         res.redirect("/api");

//       }
//     });

//   });

};  //end of export

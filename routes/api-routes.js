//this is the file for the express routes
var path=require("path");
var School = require("../models/School");
var Student = require("../models/Student");
var Goal = require("../models/Goal");
var Objective = require("../models/Objective");
var Student_Objective = require("../models/Student_Objective");
var Task = require("../models/Task");

module.exports = function(app) {

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


app.get("/api/schoolnames", function(req, res) {
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


app.get("/api/student/:studentId", function(req, res) {
  // We will find all the records, sort it in descending order, then limit the records to 5
  Student.find({'_id': req.params.studentId})
    .populate( "goals.goal")
    .populate( "goals.student_objectives")
    .deepPopulate( 'goals.student_objectives.objective goals.student_objectives.tasks')
    .exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      console.log(doc);
      res.send(doc);
    }
  }); 
});


app.post("/api/school", function(req,res) {

  //   // Create a new note using the note text passed in during the ajax call
  var newSchool = new School(req.body);

  //   // And save the new school the db
   newSchool.save(function(error, doc) {
  //     // Log any errors
      if (error) {
        console.log(error);
      }
        res.send(doc);
    });
  });      


  // // Create a new note and a reference to that note in the article - the id in req.params.id is the id of the article to which the note is attached

  // app.post("/note/:id", function(req, res) {
  //   // Create a new note using the note text passed in during the ajax call
  //   var newNote = new Note(req.body);

  //   // And save the new note the db
  //   newNote.save(function(error, doc) {
  //     // Log any errors
  //     if (error) {
  //       console.log(error);
  //     }
  //     // Otherwise
  //     else {
  //       // Use the article id to find and update it's notes array using the _id of the note that you just added to the db
  //       // That _id was just passed back to you after the save in doc._id

  //       Article.findOneAndUpdate({ "_id": req.params.id }, { $push: {"notes": doc._id }}, {new: true}, function(err,doc){
  //         // Log any errors
  //         if (err) {
  //           console.log("there was an error");
  //           res.send(err);
  //         }
  //         else {

  //           // Or send the document to the browser 
  //           res.send(doc);  

  //           //if I don't send anything back, the .done in the ajax call will not trigger
  //           //for some reason, if I do not send anything back, the page refreshes anyway and dipslays the updated notes.
  //         }
          
  //       });//end findOneAndUpdate
        
  //     } //end else
     
  //   }); //end newNote.save
    
  // }); //end app.post


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

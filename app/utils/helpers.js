// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");


// Helper functions for making API Calls
var helpers = {

  getSchoolNames: function() {
    return axios.get("/api/schoolnames")
                .then(function(res){
                  return res
                })
  },

  addSchool: function(){
    return axios.post("/api/school")
    .then(function(res){
      console.log(res);
    });
  },

  getStudentNames: function(name) {
    return axios.get("/api/studentnames/" + name)
                .then(function(res){

                  return res
                })
  },

  getStudent: function(studentId) {
    console.log("beginning of getStudent");
    console.log(studentId);
    return axios.get("/api/student/" + studentId)
                .then(function(res){
                  console.log("inside getStudent");
                  console.log(res);
                  return res;
                })
  }

  // // This function posts new searches to our database.
  // postSavedArticle: function(article) {
  //   return axios.post("/api", article);
  // },

  //   // This function posts new searches to our database.
  // deleteArticle: function(article) {
  //   return axios.post("/api/delete", article);
  // }

};

// We export the API helper
module.exports = helpers;
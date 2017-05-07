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


  getStudentNames: function(name) {
    return axios.get("/api/studentnames/" + name)
                .then(function(res){

                  return res
                })
  },

  getStudent: function(studentId) {

    return axios.get("/api/student/" + studentId)
                .then(function(res){
                  return res;
                })
  },

  // This function posts new searches to our database.
  addSchool: function(school) {
    return axios.post("/api/school", school).then(function(res){
        return res;
    });
  }

  //   // This function posts new searches to our database.
  // deleteArticle: function(article) {
  //   return axios.post("/api/delete", article);
  // }

};

// We export the API helper
module.exports = helpers;
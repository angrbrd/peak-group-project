// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");


// Helper functions for making API Calls
var helpers = {

  // This function serves our purpose of running the query (this was against the nyt api, stuff has been deleted)
  runQuery: function(endQueryURL) {


    return axios.get(endQueryURL).then(function(response) {


      if (response.data.response.docs) {

        return response.data.response.docs;

      }
      // If we don't get any results, return an empty string
      console.log("error")
      return "";
    });
  },

  // The following functions are used to interact with our mongo database 
  getSavedArticles: function() {
    return axios.get("/api")
                .then(function(res){
                  return res
                })
  },

  
  postSavedArticle: function(article) {

    return axios.post("/api", article);
  },

  deleteArticle: function(article) {

    return axios.post("/api/delete", article);
  }

};

// We export the API helper
module.exports = helpers;

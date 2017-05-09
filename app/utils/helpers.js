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

  getGoals: function() {
    return axios.get("/api/goals")
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

  getObjectives: function(goalId) {
    return axios.get("/api/objectives/" + goalId)
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

  getGoal: function(goalId) {
    console.log("inside getGoal");
    console.log(goalId);

    return axios.get("/api/goal/" + goalId)
                .then(function(res){
                  return res;
                })
  },

  // This function posts new searches to our database.
  addSchool: function(school) {
    return axios.post("/api/school", school).then(function(res){
        return res;
    });
  },

  addPEAKGoal: function(goal) {
    return axios.post("/api/goal", goal).then(function(res){
        return res;
    });
  },


  addStudent: function(student,school) {
    return axios.post("/api/student/" + school, student).then(function(res){
        return res;
    });
  },

  addStudentGoal: function(stuff) {
    return axios.post("/api/studentgoal", stuff).then(function(res){
        return res;
    });
  },

    addStudentObjective: function(stuff) {
    return axios.post("/api/studentobjective", stuff).then(function(res){
        return res;
    });
  },

  addStudentObjective: function(stuff) {
    return axios.post("/api/studentobjective", stuff).then(function(res){
        return res;
    });
  },

  addStudentTask: function(task) {
    return axios.post("/api/studenttask", task).then(function(res){
        return res;
    });
  },

  addPEAKObjective: function(objective,goal_id) {
    return axios.post("/api/objective/" + goal_id, objective).then(function(res){
        return res;
    });
  },

  addStudentEvaluation: function(evaluation,task_id) {
    return axios.post("/api/studentevaluation/" + task_id, evaluation).then(function(res){
        return res;
    });
  }

  // deleteArticle: function(article) {
  //   return axios.post("/api/delete", article);
  // }

};

// We export the API helper
module.exports = helpers;
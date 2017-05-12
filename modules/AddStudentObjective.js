import React from 'react'
import { Link, hashHistory} from 'react-router'
var helpers = require("../app/utils/helpers");



export default React.createClass({

  getInitialState: function() {
    return { 
      goal_results: [],
      objectives: [],
      student_id: this.props.params.studentId,
      student_name: this.props.params.studentName,
      value: ""
    };
  },

  componentWillMount: function(){
    // get all of the schools from the schools table
    console.log("inside addStudentObjectives componentWillMount");
    console.log(this.props.params.goalId);

    helpers.getObjectives(this.props.params.goalId).then(function(data) {

        console.log(data.data);

        // if (data.data !== this.state.results) {
          this.setState({ goal_results: data.data });
          this.setState({objectives: data.data[0].objectives});
          this.setState({value: data.data[0].objectives[0]._id});                
        
        // This code is necessary to bind the keyword "this" when we say this.setState
        // to actually mean the component itself and not the runQuery function.
      }.bind(this));  


  },

    handleChange: function(event){

    this.setState({value: event.target.value});

  },

      // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    console.log("in handleSubmit");
    console.log(this.state.student_id);


     console.log(this.state.value);

     var addObject = {
      studentId: this.state.student_id,
      goalId: this.props.params.goalId,
      objectiveId: this.state.value
     };

    helpers.addStudentObjective(addObject).then(function(data) {
        hashHistory.goBack();
    }.bind(this));


        // This code is necessary to bind the keyword "this" when we say this.setState
        // to actually mean the component itself and not the runQuery function.
      
  },



  render() {
    return (
      <div>
      <h1>Add Objectives for {this.state.student_name}</h1>

      <h2>Select an Objective</h2>
      <form id="studentForm" onSubmit={this.handleSubmit}>
        <select value={this.state.value} onChange={this.handleChange} >
          {this.state.objectives.map(function(obj,i){
            return (               
                <option key={i} value={obj._id}>{obj.code} - {obj.description}</option>              
            );
          })}
        </select>
        <br></br>
        <br></br>
        <br></br>

        <button type="submit" id="saveGoal">Save</button>
        <button type="cancel" id="cancelGoal"><Link to={"/" + this.state.school_name +"/" + this.state.student_id + "/" + this.state.student_name}>Cancel</Link></button>


      </form>

    
      </div>
    )
  }
})
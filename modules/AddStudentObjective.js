import React from 'react'
import { Link, hashHistory} from 'react-router'
var helpers = require("../app/utils/helpers");



export default React.createClass({

  getInitialState: function() {
    return { 
      goal_results: [],
      student_results: [],
      objectives: [],
      student_id: this.props.params.studentId,
      student_name: this.props.params.studentName,
      value: ""
    };
  },


  componentDidMount: function(){
    // get all of the schools from the schools table
    console.log("inside componentDidMount");


    helpers.getStudent(this.state.student_id).then(function(data) {
      console.log("after helpers.getStudent");
      console.log(data.data);
        if (data.data !== this.state.student_results) {
          this.setState({ student_results: data.data}); 
          console.log("student_results in AddObjectives");
          console.log(this.state.student_results);
        }
   


        helpers.getObjectives(this.props.params.goalId).then(function(data) {

          console.log(data.data);

        // if (data.data !== this.state.results) {
          this.setState({ goal_results: data.data });
          this.setState({objectives: data.data[0].objectives});
          this.setState({value: data.data[0].objectives[0]._id});                
        
        // This code is necessary to bind the keyword "this" when we say this.setState
        // to actually mean the component itself and not the runQuery function.
          console.log("after we got the objectives");
        // console.log(this.state.student_results[0].goals[0].goal.description);
        // console.log(this.state.goal_results[0].description);
        // console.log(this.state.goal_results.length);

        // console.log(this.state.student_results[0].goals.length);
            
          for (var i=0;i<this.state.student_results[0].goals.length;i++){

            for(var j=0; j<this.state.student_results[0].goals[i].student_objectives.length;j++){

                var tempObjectiveArr = this.state.objectives;

                for (var k=0;k<tempObjectiveArr.length;k++){
                  if (this.state.student_results[0].goals[i].student_objectives[j].objective.description == tempObjectiveArr[k].description){
                    console.log(this.state.student_results[0].goals[i].student_objectives[j].objective.description);
                    console.log(tempObjectiveArr[k].description);

                      tempObjectiveArr.splice(k,1);
                    break;           
                  }

                }// end k loop looking for a match in all of the objectives in the array of objectives for the given goal
            this.setState({objectives: tempObjectiveArr});
            } //end j loop for all of the objectives for the given goal already assigned to the student
          } //end i loop for all of the goals assigned to the student
  
        // This code is necessary to bind the keyword "this" when we say this.setState
        // to actually mean the component itself and not the runQuery function.
        }.bind(this));  

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
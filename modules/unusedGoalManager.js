import React from 'react'
import { Link } from 'react-router'
var helpers = require("../app/utils/helpers");

/* This component will:
	*Be displayed onclick of AddGoal (from student page) or AddStudentGoal (from student form)
	*Make ajax post UNLESS cancel is clicked.
		**'Save' (onclick) {makes the ajax post} routes to GoalContainer (state changed)
		**'Cancel' (onclick) returns to GoalContainer (state not changed)
		**'Add Objective' (onclick) will:
			***display another box to add an objective
		**'Add Task' (onclick) will:
			***display more data entry for including more tasks for the clicked objective
*/

export default React.createClass({



  getInitialState: function() {
    return { 
      goal_results: [],
      objective_results: [],
      student_results: [],
      student_id: this.props.params.studentId,
      school_name: this.props.params.schoolName,
      goal_id: ""
    };
  },

  componentWillMount: function(){
    // get all of the schools from the schools table
    console.log("inside Goal Manager componentWillMount");


    helpers.getGoals().then(function(data) {

        if (data.data !== this.state.results) {
          this.setState({ goal_results: data.data });              
        }
        // This code is necessary to bind the keyword "this" when we say this.setState
        // to actually mean the component itself and not the runQuery function.
      }.bind(this));


    helpers.getStudent(this.state.student_id).then(function(data) {
    	if (data.data !== this.state.results) {
          this.setState({ student_results: data.data });              
        }
        // This code is necessary to bind the keyword "this" when we say this.setState
        // to actually mean the component itself and not the runQuery function.
      }.bind(this));


    

  },

    handleChange: function(event){
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

      // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    console.log("in handleSubmit");
    console.log(this.state.student_id);
    // this.setState({goal_id: select_goal_id});

	console.log(this.state.goal_id);


    // var goal_record = {
    // 	code: this.state.code,
    // 	goal_type: this.state.goal_type,
    // 	description: this.state.description
    // }


    // helpers.addPEAKGoal(goal_record).then(function(data){;
    // 	console.log(data);
    // 	hashHistory.push('/goals');
    // }.bind(this));

  },



	render() {
		return (
		  <div>
			<h1>Add Goals to Student Record</h1>
import React from 'react'
import { Link } from 'react-router'


/* This component will:
	*Be displayed onclick of AddGoal (from student page) or AddStudentGoal (from student form)
	*Make ajax post UNLESS cancel is clicked.
		**'Save' (onclick) {makes the ajax post} routes to GoalContainer (state changed)
		**'Cancel' (onclick) returns to GoalContainer (state not changed)
		**'Add Objective' (onclick) will:
			***display another box to add an objective
		**'Add Task' (onclick) will:
			***display more data entry for including more tasks for the clicked objective
*/

export default React.createClass({
	render() {
		return (
		  <div>
			<h1>manage goal</h1>
			<h2>Students name here</h2>
			<p>icon and form to add goal will be here</p>

			<form id="studentForm">
				<button id="addObjective">Add Objective</button>
			     {/*inside specific objective container..*/}
				<button id="addTask">Add Task</button>
				<button id="saveGoal"><Link to='/schoolName/studentId'>Save</Link></button>				
				<button id="cancelGoal"><Link to='/schoolName/studentId'>Cancel</Link></button>
			</form>
		  </div>
		)
	}
})
			{this.state.student_results.map(function(student,i){
	 			  return (	 			  	 		  		
	 			  	 	 <h2 key={i}>{student.student_name} </h2>	 		
	 			  		);
	 		})}

			<h2>{this.state.student_results.student_name}</h2>
			<h3>{this.state.school_name}</h3>
			<form id="studentForm" onSubmit={this.handleSubmit}>
				<select name="goal_id" >
	 			  	{this.state.goal_results.map(function(goal,i){
	 			  	 	return (	 			  	 		  		
	 			  	 		<option key={i} value={goal._id}>{goal.code} - {goal.description}</option> 			  	 		
	 			  		);
	 			  	})}
 			  	</select>
 			  	<br></br>
 			  	<br></br>
 			  	<br></br>


 			  	<button type="submit" id="saveGoal">Save</button>
				<button type="cancel" id="cancelGoal"><Link to='/goals'>Cancel</Link></button>

				{/*<button id="addObjective">Add Objective</button>
			     {/*inside specific objective container.
				<button id="addTask">Add Task</button>
				<button id="saveGoal"><Link to='/schoolName/studentId'>Save</Link></button>				
				<button id="cancelGoal"><Link to='/schoolName/studentId'>Cancel</Link></button> */}
			</form>

		
		  </div>
		)
	}
})

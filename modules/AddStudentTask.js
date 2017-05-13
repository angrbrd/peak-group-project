import React from 'react'
import { Link } from 'react-router'
var helpers = require("../app/utils/helpers");
import {hashHistory} from 'react-router';

/* This component will:
	*Make ajax post UNLESS cancel is clicked.
		**'Save' (onclick) {makes the ajax post} 
		**'Cancel'  


*/

export default React.createClass({

  getInitialState: function() {
    return { 
   	  description: "",
      results: []
    };
  },





	componentWillMount: function(){
  	//get the students at the school that has been selected by the user

  },


  handleChange: function(event){
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },
  
    // When a user submits...
  handleSubmit: function(event) {

    event.preventDefault();
     var task = {
      studentId: this.props.params.studentId,
      studentObjectiveId: this.props.params.studentObjectiveId,
      description: this.state.description
    }

    helpers.addStudentTask(task).then(function(data){
    	console.log(data);
    	// hashHistory.push('/goals/' + this.state.goal_id);
    }.bind(this));

  },


	render() {
		return (
		  <div id="addTaskCont">
		  	<h2 id="manageTasksFor">{this.props.params.studentName}</h2>

			<form id="" onSubmit={this.handleSubmit}>

	            <div className="form-group">
	            	<div className="row">
	              		<div className="col-md-6">
	                 		<h4 id="taskDescription">Task Description</h4>
	                    	<input
	                      		onChange={this.handleChange}
	                      		type="text"
	                      		className="form-control text-left"
	                      		id="description"
	                      		required
	                    	/>
	               		</div> 
	               	</div>

	               	
	              </div>  
	              <br />
	            
				{/*<button type="cancel" id="cancel"><Link to='/goals'>Cancel</Link></button>*/}
				<button type="cancel" id="cancelTask">Cancel</button>
				<button type="submit" id="saveTask">Save</button>
			</form>

		  </div>
		)
	}
})

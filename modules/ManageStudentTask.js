import React from 'react'
import { Link } from 'react-router'
var helpers = require("../app/utils/helpers");
import { hashHistory } from 'react-router';

/* This component will:
	*Make ajax post UNLESS cancel is clicked.
		**'Save' (onclick) {makes the ajax post} 
		**'Cancel'  


*/

class ManageStudentTask extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			value: 'test'
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value:event.target.value})
	}
  


  // handleChange: function(event){
  //   var newState = {};
  //   console.log(event.target.value)
  //   newState[event.target.id] = event.target.value;
  //   console.log(this);
  //   this.setState({value: event.target.value});
 
  // },
  
    // When a user submits...
  handleSubmit(event) {

    event.preventDefault();
     var task = {
      studentId: this.props.params.studentId,
      studentObjectiveId: this.props.params.studentObjectiveId,
      description: this.state.value
    }

    helpers.addStudentTask(task).then(function(data){
    	console.log(data);
    	hashHistory.goBack();
    }.bind(this));

  }

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
	                    		value={this.state.value}
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
				{/*<button type="cancel" id="cancelTask" onClick={hashHistory.goBack}>Cancel</button>*/}
				<button type="submit" id="saveTask">Save</button>
			</form>

			<img id="deleteTask" src="/images/deletered.png"/>

		  </div>
		)
	}
}

export default ManageStudentTask;
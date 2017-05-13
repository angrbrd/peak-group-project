import React from 'react'
import { Link } from 'react-router'
var helpers = require("../app/utils/helpers");
import {hashHistory} from 'react-router';

/* This component will:
	*Make ajax post UNLESS cancel is clicked.
		**'Save' (onclick) {makes the ajax post} routes to GoalContainer
		**'Cancel' (onclick) returns to StudentContainer
		maybe   **'Add Goal' (onclick) will:
			***{makes ajax post} to create the student (link to /:schoolName/studentId)
			***Then route to AddGoal for that student
*/

export default React.createClass({

  getInitialState: function() {
    return { 
      student_name: "",
      birthdate: "2010-02-03",
      last_IEP_date: "2017-07-01",
      setting:"?",
      active: true,
      parent_email: "",
      eligibility: "?",
      school_name: this.props.params.schoolName,
    };
  },

  handleChange: function(event){
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },
  
    // When a user submits...
  handleSubmit: function(event) {

    event.preventDefault();
    var student_record = {
      student_name: this.state.student_name,
      birthdate: this.state.birthdate,
      last_IEP_date: this.state.last_IEP_date,
      setting: this.state.setting,
      active: this.state.active,
      parent_email: this.state.parent_email,
      eligibility: this.state.eligibility
    }
    console.log("student_record before addStudent");
    console.log(student_record);

    helpers.addStudent(student_record, this.state.school_name).then(function(data){
    	console.log("after helpers.addStudent");
    	console.log(data);
    	hashHistory.push('/schools/' + this.state.school_name);
    }.bind(this));

  },





	render() {
		return (
		  <div>

		  	<h1>Add Student at {this.state.school_name} </h1>

			<form id="schoolForm" onSubmit={this.handleSubmit}>

	            <div className="form-group">
	            	<div className="row">
	              		<div className="col-md-6">
	                 		<h4><strong>Student Name:</strong></h4>
	                    	<input
	                      		onChange={this.handleChange}
	                      		type="text"
	                      		className="form-control text-left"
	                      		id="student_name"
	                      		required
	                    	/>
	               		</div> 
	               	</div>
	            	<div className="row">
	              		<div className="col-md-6">
	                 		<h4><strong>Birth Date:</strong></h4>
	                    	<input
	                    		value={this.state.birthdate}
	                      		onChange={this.handleChange}
	                      		type="date"
	                      		className="form-control text-left"
	                      		id="birthdate"
	                    	/>
	               		</div> 
	               	</div>
	               	<div className="row">	
	               		<div className="col-md-6">     
	                		<h4 className=""><strong>Last IEP Date</strong></h4>
	                		<input
	                  			value={this.state.last_IEP_date}
	                  			onChange={this.handleChange}
	                  			type="date"
	                  			className="form-control text-left"
	                  			id="last_IEP_date"
	                		/>  
	                	</div> 
	                </div>
	                <div className="row">	
	               		<div className="col-md-6">     
	                		<h4 className=""><strong>Setting</strong></h4>
	                		<input
	                  			value={this.state.setting}
	                  			onChange={this.handleChange}
	                  			type="text"
	                  			className="form-control text-left"
	                  			id="setting"
	                		/>  
	                	</div>
	                </div>	

	                <div className="row">	
	               		<div className="col-md-6">     
	                		<h4 className=""><strong>Active</strong></h4>
	                		{/* Chloe - leaving this one for you - maybe radio buttons? Default is true*/}
	                		{/* <input
	                  			value={this.state.setting}
	                  			onChange={this.handleChange}
	                  			type="text"
	                  			className="form-control text-left"
	                  			id="setting"
	                		/>  */}
	                	</div>
	                </div>
	                <div className="row">	
	               		<div className="col-md-6">     
	                		<h4 className=""><strong>Parent Email</strong></h4>
	                		<input
	                  			value={this.state.parent_email}
	                  			onChange={this.handleChange}
	                  			type="email"
	                  			className="form-control text-left"
	                  			id="parent_email"
	                		/>  
	                	</div>
	                </div>	
		                <div className="row">	
	               		<div className="col-md-6">     
	                		<h4 className=""><strong>Eligibility</strong></h4>
	                		<input
	                  			value={this.state.eligibility}
	                  			onChange={this.handleChange}
	                  			type="text"
	                  			className="form-control text-left"
	                  			id="eligibility"
	                		/>  
	                	</div>
	                </div>	                


	              </div>  
	              <br />
	            
				<button type="submit" id="saveSchool">Save</button>
				<button type="cancel" id="cancelSchool"><Link to='/schools'>Cancel</Link></button>
			</form>

		  </div>
		)
	}
})

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
   	  code: "",
      description: "",
      goal_id: "",
      results: []
    };
  },





	componentWillMount: function(){
  	//get the students at the school that has been selected by the user
    var goal_id = this.props.params.goal_id;
    this.setState({goal_id: goal_id});
  
    console.log("at beginning of componentWillMount goal_id");
    console.log(goal_id);

    helpers.getGoal(goal_id).then(function(data) {
          this.setState({ results: data.data}); 
          // console.log(data.data);
      	// }
      }.bind(this));
  },


  handleChange: function(event){
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },
  
    // When a user submits...
  handleSubmit: function(event) {

    event.preventDefault();
    var objective_record = {
      code: this.state.code,
      description: this.state.description
    }

    helpers.addPEAKObjective(objective_record, this.state.goal_id).then(function(data){
    	console.log(data);
    	hashHistory.push('/goals/' + this.state.goal_id);
    }.bind(this));

  },


	render() {
		return (
		  <div>
		  	<div>

 			  	{this.state.results.map(function(goal,i){
 			  	 	return (
 			  	 		<div key={i}>	
 			  	 			<h1>Add an Objective for {goal.code} </h1>  		
 			  	 		</div>
 			  		);
 			  	})}
 			</div>

		 

			<form id="" onSubmit={this.handleSubmit}>

	            <div className="form-group">
	            	<div className="row">
	              		<div className="col-md-6">
	                 		<h4><strong>Objective Code: e.g. PE.K.MS.1.1</strong></h4>
	                    	<input
	                      		onChange={this.handleChange}
	                      		type="text"
	                      		className="form-control text-left"
	                      		id="code"
	                      		required
	                    	/>
	               		</div> 
	               	</div>
	            	<div className="row">
	              		<div className="col-md-6">
	                 		<h4><strong>Description:</strong></h4>
	                    	<input
	                      		onChange={this.handleChange}
	                      		type="text"
	                      		className="form-control text-left"
	                      		id="description"
	                    	/>
	               		</div> 
	               	</div>
	               	
	              </div>  
	              <br />
	            
				<button type="submit" id="saveObjective">Save</button>
				<button type="cancel" id="cancelObjective"><Link to='/goals'>Cancel</Link></button>
			</form>

		  </div>
		)
	}
})

import React from 'react'
import { Link } from 'react-router'
import {hashHistory} from 'react-router';
var helpers = require("../app/utils/helpers");

/* This component will:
	*Make ajax post UNLESS cancel is clicked.
		**'Save' (onclick) {makes the axios post} routes back to School Container
		**'Cancel' (onclick) returns to SchoolContainer
*/

export default React.createClass({

  getInitialState: function() {
    return { 
      code: "",
      goal_type: "",
      description: "",
    };
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
    var goal_record = {
    	code: this.state.code,
    	goal_type: this.state.goal_type,
    	description: this.state.description
    }


    helpers.addPEAKGoal(goal_record).then(function(data){;
    	console.log(data);
    	hashHistory.push('/goals');
    }.bind(this));

  },




	render() {
		return (
		  <div>
		  	<h1>Add Goal</h1>
			<form id="" onSubmit={this.handleSubmit}>

	            <div className="form-group">
	            	<div className="row">
	              		<div className="col-md-6">
	                 		<h4><strong>Goal Code: e.g. K.MS.1</strong></h4>
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
	                 		<h4><strong>Goal Type: e.g. MS, MC, HF, PR</strong></h4>
	                    	<input
	                      		onChange={this.handleChange}
	                      		type="text"
	                      		className="form-control text-left"
	                      		id="goal_type"
	                    	/>
	               		</div> 
	               	</div>
	               	<div className="row">	
	               		<div className="col-md-6">     
	                		<h4 className=""><strong>Description</strong></h4>
	                		<input
	                  			// value={this.state.end}
	                  			onChange={this.handleChange}
	                  			type="text"
	                  			className="form-control text-left"
	                  			id="description"
	                		/>  
	                	</div> 
	                </div>

	              <br />
	            
				<button type="submit" id="saveGoal">Save</button>
				<button type="cancel" id="cancelGoal"><Link to='/goals'>Cancel</Link></button>
			</div>	
			</form>
		  </div>
		)
	}
})
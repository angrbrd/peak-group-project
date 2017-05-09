import React from 'react'
import { Link } from 'react-router'
var helpers = require("../app/utils/helpers");
import {hashHistory} from 'react-router';


export default React.createClass({

  getInitialState: function() {
    return { 
   	  comment: "",
      date: "",
      score: "",
    };
  },

	componentWillMount: function(){

  },


  handleChange: function(event){
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },
  
    // When a user submits...
  handleSubmit: function(event) {

    event.preventDefault();
    var evaluation_record = {
      comment: this.state.comment,
      date: this.state.date,
      score: this.state.score
    }
    console.log("here in handleSubmit in AddStudentEvaluation");
    console.log(evaluation_record);
    console.log(this.props.params.taskId);

    helpers.addStudentEvaluation(evaluation_record, this.props.params.taskId).then(function(data){
    	console.log(data);
    	// hashHistory.push('/goals/' + this.state.goal_id);
    }.bind(this));

  },


	render() {
		return (
		  <div>
		 	<h1>Add an Evaluation </h1>  		
 		
			<form id="" onSubmit={this.handleSubmit}>

	            <div className="form-group">
	            	<div className="row">
	              		<div className="col-md-6">
	                 		<h4><strong>Comment</strong></h4>
	                    	<input
	                      		onChange={this.handleChange}
	                      		type="text"
	                      		className="form-control text-left"
	                      		id="comment"
	                      		required
	                    	/>
	               		</div> 
	               	</div>
	            	<div className="row">
	              		<div className="col-md-6">
	                 		<h4><strong>Date:</strong></h4>
	                    	<input
	                      		onChange={this.handleChange}
	                      		type="date"
	                      		className="form-control text-left"
	                      		id="date"
	                    	/>
	               		</div> 
	               	</div>
	               	<div className="row">
	              		<div className="col-md-6">
	                 		<h4><strong>Score:</strong></h4>
	                    	<input
	                      		onChange={this.handleChange}
	                      		type="text"
	                      		className="form-control text-left"
	                      		id="score"
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
import React from 'react'
import { Link } from 'react-router'
var helpers = require("../app/utils/helpers");
import { hashHistory } from 'react-router';


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
    	hashHistory.goBack();
    }.bind(this));

  },


	render() {
		return (
		  <div id="addEvalCont">
		 	<h1 id="manageEval"> Evaluation </h1>  		
 		
			<form id="evalForm" onSubmit={this.handleSubmit}>

	            <div className="form-group">
	            	<div className="row">
	              		<div className="col-md-6">
	                 		<h4 id="addEvalComment">Comment</h4>
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
	                 		<h4 id="addEvalDate">Date</h4>
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
	                 		<h4 id="addEvalScore">Score</h4>
	                    	<select
	                      		onChange={this.handleChange}
	                      		type="text"
	                      		className="form-control text-left"
	                      		id="score"
	                    	>
	                    {/*'select score' must be here due to first option not being registered as a 'change'*/}
	                    	<option value="select">select score</option>
	                    	<option value="1 PC 60%">1 PC 60%</option>
	                    	<option value="2 C 70%">2 C 70%</option>
	                    	<option value="3 U 80%">3 U 80%</option>
	                    	<option value="4 P 90%">4 P 90%</option>
	                    	</select>
	               		</div> 
	               	</div>
	               	
	              </div>  
	              <br />
	            
				<button type="cancel" id="cancelObjective"><Link to='/goals' id="cancelLink">Cancel</Link></button>
				<button type="submit" id="saveObjective">Save</button>		
			</form>

			<img id="deleteEvaluation" src="/images/deletered.png"/>

		  </div>
		)
	}
})
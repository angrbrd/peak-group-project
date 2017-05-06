import React from 'react'
import { Link } from 'react-router'

/*This child of GoalTile (gc of GoalContainer) will:
	*Be representational ONLY (no ajax)
	*Receive an array of tasks as the parameter >>??
	*display the tasks of the objectives from GoalTile when they are selected
*/


export default React.createClass({
	render() {
		return (
			<div>
				<div id="selectedSchool">
 			  
 			  	{this.props.tasks.map(function(task,i){
 			  		return (
 			  			<div key={i}>
 			  			<p>{task.description}</p>
 			  			<ul >
 			  			{task.evaluations.map(function(evals,j){
 			  				return (

 			  					<li key={j}>

 			  					<p>{evals.date} {evals.comment} {evals.score}</p>
 			  										{/*
 			  										<Link to={schl.name + "/" + stds._id + "/" + stds.student_name}>
 			  										<h2 className="studentName">{stds.student_name}</h2>
 			  										</Link>
 			  										<button className="studentInfo">info</button>
 			  										<br/>
 			  									*/}
 			  					</li>
 			  				);
 			  			})}
 			  			</ul>
 			  			</div>
 			  		);
 			  	})}		

			  </div>

			</div>
		)

	}
})
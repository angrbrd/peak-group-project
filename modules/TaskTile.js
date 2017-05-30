import React from 'react'
import { Link } from 'react-router'
import ManageStudentTask from './ManageStudentTask'

/*This child of GoalTile (gc of GoalContainer) will:
	*Be representational ONLY (no ajax)
	*Receive an array of tasks as the parameter >>??
	*display the tasks of the objectives from GoalTile when they are selected
*/


export default React.createClass({
	render() {
		var taskS = this.props.tasks
		var studentNAME = this.props.studentName
		var studentID = this.props.studentId 
		var sOBJID = this.props.sObjId 

		return (
			<div>
				<div id="tasks">


 			  
 			  	{this.props.tasks.map(function(task,i){
 			  		return (
 			  			<div key={i} id="individualTasks">

 			  			{/*Link to add a new evaluation to a task- each task gets one of these links*/}
 			  				<Link to={"/studentTask/" + studentID + "/" + studentNAME + "/" + sOBJID}><p id="taskDesc">{task.description}</p></Link>
		 			  			<ul >
		 			  			{task.evaluations.map(function(evals,j){
		 			  				return (

		 			  					<Link to={"/studentEvaluation/" + task._id} id="manageEvaluation"><li key={j} id="evaluation">

		 			  					<p id="evalDate">{evals.date}</p> 
		 			  					<p id="evalComment"> {evals.comment}</p>
		 			  					 <p id="evalScore">{evals.score}</p>


		 			  										{/*
		 			  										<Link to={schl.name + "/" + stds._id + "/" + stds.student_name}>
		 			  										<h2 className="studentName">{stds.student_name}</h2>
		 			  										</Link>
		 			  										<button className="studentInfo">info</button>
		 			  										<br/>
		 			  									*/}
		 			  					</li>
		 			  					 </Link>
		 			  				);
		 			  			})}
		 			  			</ul>
		 			  			<Link to={"/studentEvaluation/" + task._id} id="addEval">add evaluation</Link>

		 			  				
 			  			</div>
 			  			


 			  		);
 			  		<ManageStudentTask taskInput={task.description}/>

 			  	})}	

			  </div>

			</div>

		)

	}
})
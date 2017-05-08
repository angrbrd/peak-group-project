import React from 'react'
import { Link } from 'react-router'
import TaskTile from './TaskTile'

/*This child of GoalContainer will:
	*Be representational ONLY (no ajax)
	*Receive an array of objectives
	*will store all objectives in the state and displays
*/

/*BIG NOTE:
	**ALL LINK TOS WILL BE MODIFIED TO INCLUDE PROPER IDs AND NAMES.
	The current state of link tos below are for reference to where these parameters will go.*/


export default React.createClass({
	render() {
		return (
			<div>

 			  	{this.props.student.map(function(stdnt,i){
 			  		return (
 			  			<div key={i}>
 			 
 			  			<ul >
 			  			{stdnt.goals.map(function(goals,j){
 			  				return (

 			  					<li key={j}>
 			  						<p><Link to={"/studentObjective/" + stdnt._id + "/" + stdnt.student_name + "/" + goals.goal._id}>+objective</Link>

 			  						 &nbsp;&nbsp;Goal: {goals.goal.code} {goals.goal.description}</p>
 			  						<ul>
 			  							{goals.student_objectives.map(function(s_obj,k){
 			  							return (
 			  								<li key={k}>
 			  									<p>Objective: {s_obj.objective.code } - {s_obj.objective.description}</p>
 			  		 			  {/*Tasks will show when objectives are tapped/clicked on
 			   		TaskTile is a grandchild of GoalContainer
 			   		*should be passed task info for objective*/}
 			  									<TaskTile tasks={s_obj.tasks}/>							

 			  								</li>
 			  								);
 			  							})}

 			  						</ul>


 			  					</li>

 			  				);
 			  			})}
 			  			</ul>
 			  			</div>
 			  		);
 			  	})}		

















			</div>
		)
	}
})
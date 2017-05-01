import React from 'react'
import { Link } from 'react-router'
import { TaskTile } from './TaskTile'

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
			<h2>Each individual goal will go under the students name here</h2>
			<p>Will have objectives that can be clicked on and these will show info in TaskTile.js for that objective</p>

			  			{/*Goals to be listed here (under title of Student name)*/}
 			<ul>
 			  <li><Link to="/schoolName/studentId/updateGoal">Goal Type and Description (clickable to edit)</Link></li>
 			</ul>

		    <ul>
		    	<li>Objective here>will show task to right when tapped/clicked</li>
		    </ul>

 			  {/*Tasks will show when objectives are tapped/clicked on
 			   		TaskTile is a grandchild of GoalContainer
 			   		*should be passed task info for objective*/}
 			  <TaskTile />
			</div>
		)
	}
})
import React from 'react'
import { GoalTile } from './GoalTile'
import { Link } from 'react-router'

/* This component will:
	*Take studentName & schoolName
	*Make ajax request
	*Retrieve list of goals for target student
	*Render goalTile for each goal ..
	*...passing in an array of objectives as the parameter
*/

export default React.createClass({
	render() {
		return (
		  <div>
			<h1>Student Name</h1>
			<p>Goal data will be below (rendered from GoalTile.js)</p>
			<button id="addGoal"><Link to="/schoolName/studentId/manageGoal">+goal</Link></button>

		    {/*  GoalTile child for list of students to be clicked on then taken to the add-goal page to edit that goal.  Alternatively, user can click on the objective of the goal to display tasks of the objectives.  
		    	**passing any stored goals and their objs and tasks to these tiles..  */}

			<GoalTile />
		  </div>
		)
	}
})
import React from 'react'
import { Link } from 'react-router'


/* This component will:
	*Be displayed onclick of AddGoal (from student page) or AddStudentGoal (from student form)
	*Make ajax post UNLESS cancel is clicked.
		**'Save' (onclick) {makes the ajax post} routes to GoalContainer (state changed)
		**'Cancel' (onclick) returns to GoalContainer (state not changed)
		**'Add Objective' (onclick) will:
			***display another box to add an objective
		**'Add Task' (onclick) will:
			***display more data entry for including more tasks for the clicked objective
*/

export default React.createClass({
	render() {
		return (
		  <div>
			<h1>manage goal</h1>
			<h2>Students name here</h2>
			<p>icon and form to add goal will be here</p>

			<form id="studentForm">
				<button id="addObjective">Add Objective</button>
			     {/*inside specific objective container..*/}
				<button id="addTask">Add Task</button>
				<button id="saveGoal"><Link to='/schoolName/studentId'>Save</Link></button>				
				<button id="cancelGoal"><Link to='/schoolName/studentId'>Cancel</Link></button>
			</form>
		  </div>
		)
	}
})

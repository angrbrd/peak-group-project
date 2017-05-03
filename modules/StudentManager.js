import React from 'react'
import { Link } from 'react-router'


/* This component will:
	*Make ajax post UNLESS cancel is clicked.
		**'Save' (onclick) {makes the ajax post} routes to GoalContainer
		**'Cancel' (onclick) returns to StudentContainer
		**'Add Goal' (onclick) will:
			***{makes ajax post} to create the student (link to /:schoolName/studentId)
			***Then route to AddGoal for that student
*/

export default React.createClass({
	render() {
		return (
		  <div>
		  	<h1>manage student</h1>
			<p>icon and form to add student will be here</p>

			<form id="studentForm">
				<button id="addStudentGoal"><Link to='/schoolName/studentId/manageGoal'>Add Goal</Link></button>
				<button id="saveStudent"><Link to='/schoolName/studentId'>Save</Link></button>
				<button id="cancelStudent"><Link to='/schoolName/students'>Cancel</Link></button>
			</form>
		  </div>
		)
	}
})

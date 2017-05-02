import React from 'react'
import { StudentTile } from './StudentTile'
import { Link } from 'react-router'

/* This component will:
	*Make ajax call
	*Retrieve list of students
	*Render studenttile for each data response..
	*...passing in studentName as a parameter.
*/

export default React.createClass({
	render() {
		return (
		  <div>

		   	<container id="selectedSchool">

	            <h1 id="schoolHeader">Selected School Name</h1>
				<button id="add-student">+student</button><br/><br/>
				
			  </container>
			  
			<h1>Student data will be below (rendered from StudentTile.js)</h1>
			<button id="addStudent"><Link to="/schoolName/studentId/manageStudent">+student</Link></button>

		    {/*  StudentTile child for list of students to be clicked on then taken to individual student page.  
		    	**passing student info to these student tiles..  */}
			<StudentTile />
		  </div>
		)
	}
})
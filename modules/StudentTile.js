import React from 'react'
import { Link } from 'react-router'

/*This child of SchoolContainer will:
	*Be representational ONLY (no ajax)
	*Receive name as the parameter
	*Each student will be linked to their profile (as written below)
*/

/*BIG NOTE:
	**ALL LINK TOS WILL BE MODIFIED TO INCLUDE PROPER IDs AND NAMES.
	The current state of link tos below are for reference to where these parameters will go.*/

export default React.createClass({
	render() {
		return (
			<div>
			 <h2>Student List will go here (child of StudentContainer)</h2>
			 <p>Html for student's name, an icon, and info icon..</p>

			  			{/*Students to be listed here (under title of School name)*/}
 			  <ul>
 			    <li><Link to="/schoolName/studentId">Student Name</Link></li>
 			  </ul>
			</div>
		)
	}
})
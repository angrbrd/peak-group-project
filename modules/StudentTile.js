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
				<container id="">
					<img class="studentIcon" src="http://placehold.it/50x50"/><h2 class="studentName">Student name 1</h2><button class="studentInfo">info</button><br/>
				
			  </container>

			  			{/*Students to be listed here (under title of School name)*/}
 			  <ul>
 			    <li><Link to="/schoolName/studentId">Student Name</Link></li>
 			  </ul>
			</div>
		)
	}
})
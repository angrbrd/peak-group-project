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
				<container id="selectedSchool">
				{/*Students to be listed here (under title of School name)*/}
				  <ul>
					<li><img className="studentIcon" src="http://placehold.it/50x50"/><Link to="/schoolName/studentId"><h2 className="studentName">Student name 1</h2></Link><button className="studentInfo">info</button><br/></li>
				  </ul>
			  </container>

			</div>
		)
	}
})
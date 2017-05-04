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
				<div id="selectedSchool">
				{/*Students to be listed here (under title of School name)*/}
				{/*Note: there will only be one school here, so i=0 always. We use
				.map to gain access to the object in the array, then nest another .map
				to gain access to the students array inside the school object */}
 			  
 			  	{this.props.school_record.map(function(schl,i){
 			  		return (
 			  			<div key={i}>
 			  			<h2 >{schl.name}</h2>
 			  			<ul >
 			  			{schl.students.map(function(stds,j){
 			  				return (

 			  					<li key={j}><img 	className="studentIcon"
 			  										src="http://placehold.it/50x50"/>
 			  										<Link to="/schoolName/studentId">
 			  										<h2 className="studentName">{stds.student_name}</h2>
 			  										</Link>
 			  										<button className="studentInfo">info</button>
 			  										<br/>
 			  										</li>
 			  				);
 			  			})}
 			  			</ul>
 			  			</div>
 			  		);
 			  	})}		

 			  

	{/*}	Chloe - I have some work to do here making the Link work with data, but click a student anyway!
			 */}

			  </div>

			</div>
		)
	}
})
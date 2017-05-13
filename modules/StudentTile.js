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

			<div className="row">
				<div className="col-sm-12">

				{/*Students to be listed here (under title of School name)*/}
				{/*Note: there will only be one school here, so i=0 always. We use
				.map to gain access to the object in the array, then nest another .map
				to gain access to the students array inside the school object */}
	 			    <div id="selectedSchool">
	 			  	{this.props.school_record.map(function(schl,i){
	 			  		return (
	 			  			<div key={i}>
	 			  			<h2 className="schoolNameTitle" >{schl.name}</h2>
	 			  			<Link to={"/"+ schl.name +"/manageStudent"}><button id="addStudent"></button></Link><br/><br/>
	 			  			<ul id="studentList">
	 			  			{schl.students.map(function(stds,j){
	 			  				return (

	 			  					<li key={j}><span><img 	className="studentIcon"
	 			  										src="/images/student.png"/>
	 			  										<img className="studentInfo" src="/images/info.svg"/>
	 			  										{/*<Link to="/schoolName/studentId">*/}
	 			  										<Link to={schl.name + "/" + stds._id + "/" + stds.student_name}>
	 			  										<h2 className="studentName">{stds.student_name}</h2>
	 			  										</Link></span>
	 			  										<br/>
	 			  										</li>
	 			  				);
	 			  			})}
	 			  			</ul>
	 			  			</div>
	 			  		);
	 			  	})}		
	 		          </div>
		        </div>
	    </div>
		)
	}
})
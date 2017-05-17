import React from 'react'
import { Link } from 'react-router'
import Modal from './Modal'

/*This child of SchoolContainer will:
	*Be representational ONLY (no ajax)
	*Receive name as the parameter
	*Each student will be linked to their profile (as written below)
*/

/*BIG NOTE:
	**ALL LINK TOS WILL BE MODIFIED TO INCLUDE PROPER IDs AND NAMES.
	The current state of link tos below are for reference to where these parameters will go.*/

export default React.createClass({
	// Set modal state to isOpen: false
	getInitialState() {
    	return {
    		isOpen: false
    	};
  	},

  	openModal(student) {
  		console.log('openModal');
		this.setState({
			isOpen: true,
			student: student
		});
  	},

  	closeModal() {
  		console.log('closeModal');
		this.setState({
			isOpen: false
		});
  	},

	render() {
		return (
			<div className="row">
				<div className="col-sm-12">

				{/*Students to be listed here (under title of School name)*/}
				{/*Note: there will only be one school here, so i=0 always. We use
				.map to gain access to the object in the array, then nest another .map
				to gain access to the students array inside the school object */}
	 			    <div id="selectedSchool">
	 			  	{
	 			  		this.props.school_record.map((schl,i) => {
	 			  			return (
		 			  			<div key={i}>
			 			  			<h2 className="schoolNameTitle" >{schl.name}</h2>
			 			  			<Link to={"/"+ schl.name +"/manageStudent"}><button id="addStudent"></button></Link><br/><br/>
			 			  			<ul id="studentList">
				 			  			{
				 			  				schl.students.map((stds,j) => {
					 			  				return (
					 			  					<li key={j}>
					 			  						<span>
					 			  							<img className="studentIcon" src="/images/student.png"/>
					 			  							<button className="studentInfo" onClick={() => {this.openModal(stds)}} />

					 			  							{/*<Link to="/schoolName/studentId">*/}
					 			  							<Link to={schl.name + "/" + stds._id + "/" + stds.student_name}>
					 			  								<h2 className="studentName">{stds.student_name}</h2>
					 			  							</Link>
					 			  						</span>
					 			  						<br/>				
					 			  					</li>
					 			  				); // end return()
				 			  				}) // end map for students
				 			  			}
			 			  			</ul>


	 			  					<Modal show={this.state.isOpen} onClose={this.closeModal} stds={this.state.student}>
									</Modal>
		 			  			</div> // end <div> for schoolTile
	 			  			); // end return()
	 			  		}) // end map for school_record
	 			  	}
	 		        </div>
		        </div>
	    	</div>
		)
	}
})

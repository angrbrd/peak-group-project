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
 			  
 			  	{this.props.goal_record.map(function(goal,i){
 			  		return (
 			  			<div key={i}>
 			  			<h2 >Objective for Goal: {goal.code} {goal.goal_type} {goal.description}</h2>
 			  				
 			  			<ul >
 			  			{goal.objectives.map(function(objs,j){
 			  				return (

 			  					<li key={j}><h2 className="">{objs.code} {objs.description}</h2>
 			  									
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
		)
	}
})
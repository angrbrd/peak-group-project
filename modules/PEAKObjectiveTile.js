import React from 'react'
import { Link } from 'react-router'


export default React.createClass({



	render() {
		return (
			<div>
				<div id="selectedSchool">

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
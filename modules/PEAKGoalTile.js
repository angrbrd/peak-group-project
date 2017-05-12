import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'




export default React.createClass({
	componentWillMount: function(){
    	console.log("mounting PEAKGoalTile component");
    	console.log(this.props.results);
	},

	render() {
		return (
			<div id="listOfSchools">


			  {/*Schools to be listed here (under search bar)*/}
 			  <ul>
 			  	{this.props.results.map(function(goal,i){
 			  	 	return (
 			  	 		<div key={i}>	  		
 			  	 			<li className=""><Link to={"/goals/" + goal._id}>{goal.description}</Link></li>
 			  	 		</div>
 			  		);
 			  	})}
 			  </ul>
 			  	
			</div>
		);
	}
});
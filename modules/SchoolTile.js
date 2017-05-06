import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

/*This child of SchoolContainer will:
	*Be representational ONLY (no ajax)
	*Receive name as the parameter
	*Each tile will be linked (as written below)
*/

/*BIG NOTE:
	**ALL LINK TOS WILL BE MODIFIED TO INCLUDE PROPER IDs AND NAMES.
	The current state of link tos below are for reference to where these parameters will go.*/



export default React.createClass({
	// componentWillMount: function(){
 //    	console.log("mounting SchoolTile component");
 //    	console.log(this.props.results);
	// },

	render() {
		return (
			<div id="listOfSchools">


			  {/*Schools to be listed here (under search bar)*/}
 			  <ul>
 			  	{this.props.results.map(function(search,i){
 			  	 			  		return (
 			  	 			  		
 			  	 			    	<li key={i} data_id={search._id} className="school"><Link to={"/schools/" + search.name}>{search.name}</Link></li>
 			  		);
 			  	})}
 			  </ul>
 			  	
			</div>
		);
	}
});
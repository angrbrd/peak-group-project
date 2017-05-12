import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'




export default React.createClass({
	componentWillMount: function(){
    	console.log("mounting SchoolTile component");
    	console.log(this.props.results);
	},

	render() {
		return (
			<div className="row" id="listOfSchools">
			
			  <div className="col-sm-8 col-sm-offset-2" id="schoolList">

				  {/*Schools to be listed here (under search bar)*/}
				 
		 			  <ul>
		 			  	{this.props.results.map(function(search,i){

		 			  	 	return (
		 			  	 		<div key={i}>	  		
		 			  	 			<NavLink to={"/schools/" + search.name}><li className="school">{search.name}</li></NavLink>
		 			  	 		</div>
		 			  		);
		 			  	})}
		 			  </ul>
	 			 
	 			  
 			  </div>
 			  <div className="col-sm-2">&nbsp;</div>
 			  </div>
 			  
		);
	}
});
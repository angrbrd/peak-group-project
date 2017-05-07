import React from 'react'
import PEAKGoalTile from './PEAKGoalTile'
import { Link } from 'react-router'
var helpers = require("../app/utils/helpers");

/* This component will:
	*Make ajax call
	*Receive school data
	*Render schooltile for each data response..
	*...passing in schoolName as a parameter.
*/

export default React.createClass({
    getInitialState: function() {
    return { 
      results: []
    };
  },

  componentWillMount: function(){

    //!!!! You can uncomment this and add new schools by editing the api-route and running the app again and again
    // helpers.addSchool().then(function(data){
    //   console.log(data);
    //});


    // get all of the schools from the schools table

    helpers.getGoals().then(function(data) {
        if (data.data !== this.state.results) {
          this.setState({ results: data.data });              
        }
        // This code is necessary to bind the keyword "this" when we say this.setState
        // to actually mean the component itself and not the runQuery function.
      }.bind(this));

  },

	render() {
		return (
		  <div>

  						<button id="addGoal"><Link to='/managePEAKGoal'>+PEAK Goals</Link></button>
       <div>      
           <PEAKGoalTile results={this.state.results} />
       </div>  
      {this.props.children}
		  </div>
		)
	}
})
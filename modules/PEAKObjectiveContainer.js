import React from 'react'
import { Link } from 'react-router'
import PEAKObjectiveTile from './PEAKObjectiveTile'
var helpers = require("../app/utils/helpers");



export default React.createClass({

  getInitialState: function() {
    return {
   
      goal_id: "",	
      results: []
    };
  },

  componentWillMount: function(){
  	//get the students at the school that has been selected by the user
    var goal_id = this.props.params.goalId;
    this.setState({goal_id: goal_id});

    helpers.getObjectives(goal_id).then(function(data) {
          this.setState({ results: data.data});     
      }.bind(this));
  },

  componentWillReceiveProps: function(nextProps){  	
  	var goal_id = nextProps.params.goalId;
    this.setState({goal_id: goal_id});

    helpers.getObjectives(goal_id).then(function(data) {
     //    if (data.data !== this.state.results) {
          this.setState({ results: data.data}); 
      	// }
      }.bind(this));

  },


	render() {
		return (
		  <div>

		

				<button id=""><Link to={"/"+ this.state.goal_id  + "/managePEAKObjectives"}>+PEAK objectives</Link></button><br/><br/>


		    {/*  StudentTile child for list of students to be clicked on then taken to individual student page.  
		    	**passing student info to these student tiles..  */}
		    <div>	
			     <PEAKObjectiveTile goal_record={this.state.results} />
			 </div> 
			
		  </div>
		)
	}
});
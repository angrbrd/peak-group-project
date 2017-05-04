import React from 'react'
import StudentTile from './StudentTile'
import { Link } from 'react-router'
var helpers = require("../app/utils/helpers");

/* This component will:
	*Make ajax call
	*Retrieve list of students
	*Render studenttile for each data response..
	*...passing in studentName as a parameter.
*/

export default React.createClass({

  getInitialState: function() {
    return { 
      results: []
    };
  },

  componentWillMount: function(){
  	//get the students at the school that has been selected by the user
    var schoolName = this.props.params.schoolName;
    console.log(schoolName);

    helpers.getStudentNames(schoolName).then(function(data) {
    	console.log("after helpers.getStudentNames");
    	console.log(data.data);
        if (data.data !== this.state.results) {
          this.setState({ results: data.data }); 
      	}
      }.bind(this));
  },



	render() {
		return (
		  <div>

		   	<container id="selectedSchool">

				<button id="addStudent"><Link to="/schoolName/studentId/manageStudent">+student</Link></button><br/><br/>
				
			</container>

		    {/*  StudentTile child for list of students to be clicked on then taken to individual student page.  
		    	**passing student info to these student tiles..  */}
		    <div>	
			<StudentTile record={this.state.results} />
			</div>
		  </div>
		)
	}
})
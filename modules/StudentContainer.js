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
      	
      school_name: "",	
      results: []
    };
  },

  componentWillMount: function(){
  	//get the students at the school that has been selected by the user
    var sName = this.props.params.schoolName;
    console.log("this.props.params.schoolName " + sName);
    this.setState({school_name: sName});
  

    helpers.getStudentNames(sName).then(function(data) {
    	// console.log("after helpers.getStudentNames");
    	// console.log(data.data);
     //    if (data.data !== this.state.results) {
          this.setState({ results: data.data}); 
      	// }
      }.bind(this));
  },

  componentWillReceiveProps: function(nextProps){
  	
  	console.log("nextProps");
  	console.log(nextProps);
  	var sName = nextProps.params.schoolName;
    console.log("nextProps.params.schoolName " + sName);
    this.setState({school_name: sName});

    helpers.getStudentNames(sName).then(function(data) {
    	// console.log("after helpers.getStudentNames");
    	// console.log(data.data);
     //    if (data.data !== this.state.results) {
          this.setState({ results: data.data}); 
      	// }
      }.bind(this));
	

  },


	render() {
		return (
		  <div className="row">

		    {/*  StudentTile child for list of students to be clicked on then taken to individual student page.  
		    	**passing student info to these student tiles..  */}
		    <div>	
			<StudentTile school_record={this.state.results} />
			</div>
			
		  </div>
		)
	}
});
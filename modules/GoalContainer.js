import React from 'react'
import GoalTile from './GoalTile'
import { Link } from 'react-router'
var helpers = require("../app/utils/helpers");
/* This component will:
  *Take studentName & schoolName
  *Make ajax request
  *Retrieve list of goals for target student
  *Render goalTile for each goal ..
  *...passing in an array of objectives as the parameter
*/

export default React.createClass({

  getInitialState: function() {
    return { 
      school_name: "",
      student_id: "",
      student_name: "", 
      results: []
    };
  },

  componentWillMount: function(){
    //get the students at the school that has been selected by the user
    var schoolName = this.props.params.schoolName;
    var studentId =  this.props.params.studentId;
    var studentName = this.props.params.studentName;

    this.setState({school_name: schoolName});
    this.setState({student_id: studentId});
    this.setState({student_name: studentName});

    console.log(studentId);

    helpers.getStudent(studentId).then(function(data) {
      console.log("after helpers.getStudent");
      console.log(data.data);
        if (data.data !== this.state.results) {
          this.setState({ results: data.data}); 
          console.log("results in Goal Tile");
          console.log(this.state.results);
        }
      }.bind(this));
  },

	render() {
		return (
		  <div>

        {/*Student's name & info/add goal buttons are here*/}
  			<div className="row">
          <div id="studentHeader" className="col-sm-12">
    				<h1 id="studentNameTitle">{this.state.student_name}</h1>

    						<Link to={"/studentGoal/" + this.state.school_name + "/" + this.state.student_id+ "/" + this.state.student_name}>+goal</Link>

                <button id="studentInfo">sI</button>
          </div>
        </div>

						<GoalTile student={this.state.results} school={this.state.school_name}/>

		  	</div>	
		)
	}
})
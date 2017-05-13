import React from 'react'
import { Link, hashHistory} from 'react-router'
var helpers = require("../app/utils/helpers");



export default React.createClass({

  getInitialState: function() {
    return { 
      goal_results: [],
      student_results: [],
      student_id: this.props.params.studentId,
      school_name: this.props.params.schoolName,
      student_name: this.props.params.studentName,
      value: ""
    };
  },

  componentDidMount: function(){
    // get all of the schools from the schools table
    console.log("inside Goal Manager componentWillMount");


    helpers.getStudent(this.state.student_id).then(function(data) {
      console.log("after helpers.getStudent");
      console.log(data.data);
        if (data.data !== this.state.student_results) {
          this.setState({ student_results: data.data}); 
          console.log("student_results in AddStudentGoal");
          console.log(this.state.student_results);
        }
   


        helpers.getGoals().then(function(data) {

        if (data.data !== this.state.goal_results) {
          this.setState({ goal_results: data.data });
          console.log("goal_results in helpers.getGoals ")
          this.setState({value: data.data[0]._id})
        }


        console.log("after we got the goals");
        // console.log(this.state.student_results[0].goals[0].goal.description);
        // console.log(this.state.goal_results[0].description);
        // console.log(this.state.goal_results.length);

        // console.log(this.state.student_results[0].goals.length);
            
          for (var i=0;i<this.state.student_results[0].goals.length;i++){
            var tempGoalArr = this.state.goal_results;

            for (var j=0;j<tempGoalArr.length;j++){
              if (this.state.student_results[0].goals[i].goal.description == tempGoalArr[j].description){
                console.log(this.state.student_results[0].goals[i].goal.description);
                console.log(tempGoalArr[j].description);

                tempGoalArr.splice(j,1);
                break;
                
              }

            }
            this.setState({goal_results: tempGoalArr});
          }
  
        // This code is necessary to bind the keyword "this" when we say this.setState
        // to actually mean the component itself and not the runQuery function.
      }.bind(this));  

       }.bind(this));

        // console.log("after we got the goals");
        // console.log(this.state.student_results[0].goals[0].goal.description);
        // console.log(this.state.goal_results[0].description);
        // console.log(this.state.goal_results.length);

        // console.log(this.state.student_results[0].goals.length);

  },

  // componentDidMount: function(){



  // },

    handleChange: function(event){

    this.setState({value: event.target.value});

  },

      // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    console.log("in handleSubmit");
    console.log(this.state.student_id);


     console.log(this.state.value);

     var addObject = {
      studentId: this.state.student_id,
      goalId: this.state.value
     };

    helpers.addStudentGoal(addObject).then(function(data) {
        hashHistory.goBack();
    }.bind(this));


        // This code is necessary to bind the keyword "this" when we say this.setState
        // to actually mean the component itself and not the runQuery function.
      


  },


	render() {
		return (
		  <div id="addGoalCont">
			<h1 id="manageGoalFor"> {this.state.student_name} {/*at {this.state.school_name}*/}</h1>

      <h2 id="selectGoal">Select Goal</h2>
			<form id="studentForm" onSubmit={this.handleSubmit}>
				<select value={this.state.value} onChange={this.handleChange} >
	 			  	{this.state.goal_results.map(function(goal,i){
	 			  	 	return (	 			  	 		  		
	 			  	 		<option key={i} value={goal._id}>{goal.code} - {goal.description}</option> 			  	 		
	 			  		);
	 			  	})}
 			  	</select>
 			  	<br></br>
 			  	<br></br>
 			  	<br></br>

 			  
        <button type="cancel" id="cancelGoal"><Link to={"/" + this.state.school_name +"/" + this.state.student_id + "/" + this.state.student_name}>Cancel</Link></button>
        <button type="submit" id="saveGoal">Save</button>

			</form>

		
		  </div>
		)
	}
})
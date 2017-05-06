import React from 'react'
import { Link } from 'react-router'
var helpers = require("../app/utils/helpers");

/* This component will:
	*Make ajax post UNLESS cancel is clicked.
		**'Save' (onclick) {makes the axios post} routes back to School Container
		**'Cancel' (onclick) returns to SchoolContainer
*/

export default React.createClass({

  getInitialState: function() {
    return { 
      name: "",
      school_system: "",
      address: "",
      phone:"",
    };
  },

  handleChange: function(event){
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },
  
    // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();
    var school_record = {
    	name: this.state.name,
    	school_system: this.state.school_system,
    	address: this.state.address,
    	phone: this.state.phone
    }
    console.log("school_record before addSchool");
    console.log(school_record);

    helpers.addSchool(school_record).then(function(data){
    	console.log("done with helpers.addSchool");
    }.bind(this));

  },




	render() {
		return (
		  <div>
		  	<h1>Add School</h1>
			<form id="schoolForm" onSubmit={this.handleSubmit}>

	            <div className="form-group">
	              <h4>
	                <strong>School name:</strong>
	              </h4>
	              <input
	                type="text"
	                onChange={this.handleChange}
	                className="form-control text-left"
	                id="name"
	                required
	              />
	            <div className="row">
	              <div className="col-md-12">
	                 <h4>
	                      <strong>School System:</strong>
	                    </h4>
	                    <input
	                      // value={this.state.begin}
	                      onChange={this.handleChange}
	                      type="text"
	                      className="form-control text-left"
	                      id="school_system"
	                      
	                    />
	               </div> 
	               <div className="col-md-12">     
	                <h4 className="">
	                  <strong>Address</strong>
	                </h4>
	                <input
	                  // value={this.state.end}
	                  onChange={this.handleChange}
	                  type="text"
	                  className="form-control text-left"
	                  id="address"
	                />  
	                </div> 

	               <div className="col-md-12">     
	                <h4 className="">
	                  <strong>Phone</strong>
	                </h4>
	                <input
	                  // value={this.state.end}
	                  onChange={this.handleChange}
	                  type="text"
	                  className="form-control text-left"
	                  id="phone"
	                />  
	                </div> 
	              </div>  
	              <br />
	            </div>
				<button type="submit" id="saveSchool">Save</button>
				<button type="cancel" id="cancelSchool"><Link to='/schools'>Cancel</Link></button>
			</form>
		  </div>
		)
	}
})

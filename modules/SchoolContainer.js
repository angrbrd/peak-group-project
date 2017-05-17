import React from 'react'
import SchoolTile from './SchoolTile'
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


    // get all of the schools from the schools table

    helpers.getSchoolNames().then(function(data) {
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
      <div className="row" id="userNav">

    {/*This can either link to SchoolManager where SchoolManager will be modified to include a list of schools in addition to being able to add one -- OR an entirely different page with the abilty to edit/delete schools only*/}
        <div className="col-sm-3" id="manageSchoolsCol">
          <Link to="/goals"><button id="manageSchools">Manage Schools</button></Link>
        </div>

          <div className="col-sm-4 col-sm-offset-5">
          <p id="usernameDisplay">Kathleen McPeak</p>
          <Link to="/" id="logout">logout</Link>
          </div>
      </div>


      <div className="row" id="schoolSearchRow">

        <div className="col-sm-8 col-sm-offset-2">

    			<form id="schoolSearchForm">
      				<label htmlFor="schoolSearch" 
      						id="schoolNameLabel">SCHOOL NAME</label>
      				<input type="search" 
      						id="schoolSearch" 
      						name="schoolSearch"/>
    			</form>
          </div> {/*end col*/}
     
        <div className="col-sm-2" id="addSchoolCol">
          <Link to='/manageSchool' id="addSchoolLink"><button id="addSchool">+</button></Link>
        </div>
      </div> {/*end row*/}

              {/*  SchoolTile child for list of schools to be clicked on.
          **Should be passing schoolName as a parameter.. to be used as props in params   */}
       <div>      
           <SchoolTile results={this.state.results} />
       </div>  
      {this.props.children}
		  </div>
		)
	}
})
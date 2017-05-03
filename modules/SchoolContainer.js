import React from 'react'
import { SchoolTile } from './SchoolTile'


/* This component will:
	*Make ajax call
	*Receive school data
	*Render schooltile for each data response..
	*...passing in schoolName as a parameter.
*/

export default React.createClass({
	getInitialState: function(){
		return {
			// state variables here
		};
	},

	render() {
		return (
		  <div>


			<button id="addSchool">+school</button>

			<form id="schoolSearchForm">
  				<label id="schoolNameLabel">SCHOOL NAME</label>
  				<input type="search" 
  						id="schoolSearch" 
  						name="school-search"
  						/>
  				<button id="addSchoolInit">+school</button>
			</form>

		    {/*  SchoolTile child for list of schools to be clicked on.
		    	**Should be passing schoolName to School  maybe not   */}
			<SchoolTile />
		  </div>
		)
	}
})
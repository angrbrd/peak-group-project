import React from 'react'
import { SchoolTile } from './SchoolTile'

/* This component will:
	*Make ajax call
	*Receive school data
	*Render schooltile for each data response..
	*...passing in schoolName as a parameter.
*/

export default React.createClass({
	render() {
		return (
		  <div>

			<form id="schoolSearchForm">
  				<label htmlFor="schoolSearch" id="schoolNameLabel">SCHOOL NAME</label>
  				<input type="search" id="schoolSearch" name="school-search"/><button id="addSchool">+school</button>
			</form>

		    {/*  SchoolTile child for list of schools to be clicked on.
		    	**Should be passing name and students/info to this child..   */}
			<SchoolTile />
		  </div>
		)
	}
})
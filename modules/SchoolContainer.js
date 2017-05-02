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
  				<input type="search" id="schoolSearch" name="schoolSearch"/><button id="addSchool">+school</button>
			</form>

		    {/*  SchoolTile child for list of schools to be clicked on.
		    	**Should be passing schoolName as a parameter.. to be used as props in params   */}
			<SchoolTile />
		  </div>
		)
	}
})
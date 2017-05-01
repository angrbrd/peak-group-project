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
			<h1>Html for school search bar and drop down list here.</h1>
			<button id="addSchool">+school</button>

		    {/*  SchoolTile child for list of schools to be clicked on.
		    	**Should be passing name and students/info to this child..   */}
			<SchoolTile />
		  </div>
		)
	}
})
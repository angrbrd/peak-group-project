import React from 'react'
import { Link } from 'react-router'

/*This child of SchoolContainer will:
	*Be representational ONLY (no ajax)
	*Receive name as the parameter
	*Each tile will be linked (as written below)
*/

/*BIG NOTE:
	**ALL LINK TOS WILL BE MODIFIED TO INCLUDE PROPER IDs AND NAMES.
	The current state of link tos below are for reference to where these parameters will go.*/


export default React.createClass({
	render() {
		return (
			<div>
				{/*Login form*/}
				<form id="loginForm">
				<button id="login"><Link to="/schools">Login</Link></button>
				</form>

			</div>
		)
	}
})
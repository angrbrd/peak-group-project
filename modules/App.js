import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
	render() {
		return (
		  <div>
			<h1>Html for Welcome/login page will go here.</h1>
			<h2><Link to="/select">Login test</Link></h2>
		  </div>
		)
	}
})
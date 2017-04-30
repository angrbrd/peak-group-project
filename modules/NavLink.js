import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
	render() {
		//this replaces the need to put active class name on each individual link in app.js
		return <Link {...this.props} activeClassName="active"/>
	}
});
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

//files that will be our routes..
import App from './modules/App'
import Select from './modules/Select'

render((

<Router history={hashHistory}>
	{/*these are our routes*/}
	<Route path="/" component={App}/>
	<Route path="/select" component={Select}/>
	

</Router>
), document.getElementById('app'));
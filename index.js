import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

//files that will be our routes..
import App from './modules/App'
import Select from './modules/Select'

render((

<Router history={hashHistory}>
	{/*these are our routes*/}
<Route path="/schools" component={SchoolContainer}/>
<Route path="/:schoolName/students" component={StudentContainer}/>
<Route path="/:schoolName/:studentId" component={GoalContainer}/>
<Route path="/:schoolName/updateStudent" component={UpdateStudent}/>
<Route path="/:schoolName/:studentId/updateGoal" component={UpdateGoal}/>
	

</Router>
), document.getElementById('app'));
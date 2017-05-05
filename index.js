import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

//files that will be our routes..
import SchoolContainer from './modules/SchoolContainer'
import SchoolTile from './modules/SchoolTile'
import StudentContainer from './modules/StudentContainer'
import GoalContainer from './modules/GoalContainer'
import StudentManager from './modules/StudentManager'
import GoalManager from './modules/GoalManager'
import LogIn from './modules/LogIn'

render((

	<Router history={hashHistory}>

		<Route path="/" component={LogIn}/>
		<Route path="/schools" component={SchoolContainer}>
		  <Route path="/schools/:schoolName" component={StudentContainer}/>
		</Route>
		<Route path="/:schoolName/:studentId" component={GoalContainer}/>
		<Route path="/:schoolName/manageStudent" component={StudentManager}/>
		<Route path="/:schoolName/:studentId/manageGoal" component={GoalManager}/>
	
	</Router>
), document.getElementById('app'));
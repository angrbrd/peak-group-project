import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

//files that will be our routes..
import SchoolContainer from './modules/SchoolContainer'
import SchoolTile from './modules/SchoolTile'
import StudentContainer from './modules/StudentContainer'
import GoalContainer from './modules/GoalContainer'
import StudentManager from './modules/StudentManager'
import AddStudentGoal from './modules/AddStudentGoal'
import AddStudentObjective from './modules/AddStudentObjective'

// import GoalManager from './modules/GoalManager'

import SchoolManager from './modules/SchoolManager'
import LogIn from './modules/LogIn'
import PEAKGoalContainer from './modules/PEAKGoalContainer'
import PEAKObjectiveContainer from './modules/PEAKObjectiveContainer'
import PEAKGoalManager from './modules/PEAKGoalManager'
import PEAKObjectiveManager from './modules/PEAKObjectiveManager'

render((

	<Router history={hashHistory}>

		<Route path="/studentGoal/:schoolName/:studentId/:studentName" component={AddStudentGoal}/>
		<Route path="/studentObjective/:studentId/:studentName/:goalId" component={AddStudentObjective}/>
		<Route path="/" component={LogIn}/>
		<Route path="/schools" component={SchoolContainer}>
			<Route path="/schools/:schoolName" component={StudentContainer}/>
		</Route>	
		
		<Route path="/:schoolName/:studentId/:studentName" component={GoalContainer}/>
		<Route path="/:schoolName/manageStudent" component={StudentManager}/>
		<Route path="/manageSchool" component={SchoolManager}/>


		<Route path="/goals" component={PEAKGoalContainer}>
			<Route path="/goals/:goalId" component={PEAKObjectiveContainer} />
		</Route>

		<Route path="/managePEAKGoal" component={PEAKGoalManager} />
		<Route path="/:goal_id/managePEAKObjectives" component={PEAKObjectiveManager} />
	</Router>
), document.getElementById('app'));
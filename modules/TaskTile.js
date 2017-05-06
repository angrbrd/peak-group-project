import React from 'react'
import { Link } from 'react-router'

/*This child of GoalTile (gc of GoalContainer) will:
	*Be representational ONLY (no ajax)
	*Receive an array of tasks as the parameter >>??
	*display the tasks of the objectives from GoalTile when they are selected
*/


export default React.createClass({
	render() {
		return (
			<div>

			 {/*Tasks will be here on the right side of objectives*/}
		    <ul>
		    	<li>Task here</li>
		    </ul>

 			  {/*Tasks will show when objectives are tapped/clicked on
 			   		TaskTile is a grandchild of GoalContainer
 			   		*should be passed task info for objective*/}
			</div>
		)
	}
})
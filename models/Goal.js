var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GoalSchema = new Schema({
	code: { // e.g. K.MS.1
		//not sure if this is necessary?
		type: String
	},
	goal_type: {//MS, MC, HF, PR
		type: String
	},
	description: {
		type: String
	},
	objectives: [{
		type: Schema.Types.ObjectId,
		ref: "Objective"
	}]
});

var Goal = mongoose.model("Goal", GoalSchema);

module.exports = Goal;
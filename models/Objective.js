var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ObjectiveSchema = new Schema({
	code: { //e.g. PE.K.MS.1.1
		type: String
	},
	goal: {//Each objective is only associated with one goal, right? This is K - I don't think we need this
		type: Schema.Types.ObjectId,
		ref: "Goal"
	},
	description: {
		type: String
	}
});

var Objective = mongoose.model("Objective", ObjectiveSchema);

module.exports = Objective;
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Student_ObjectiveSchema = new Schema({
	student: {
		type: Schema.Types.ObjectId,
		ref: "Student"
	},
	objective: {
		type: Schema.Types.ObjectId,
		ref: "Objective"
	},
	tasks: [{
		type: Schema.Types.ObjectId,
		ref: "Task"
	}]
});

var Student_Objective = mongoose.model("Student_Objective", Student_ObjectiveSchema);
module.exports = Student_Objective;
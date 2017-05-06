var mongoose = require("mongoose");
var deepPopulate = require('mongoose-deep-populate')(mongoose);
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

Student_ObjectiveSchema.plugin(deepPopulate);

var Student_Objective = mongoose.model("Student_Objective", Student_ObjectiveSchema);
module.exports = Student_Objective;
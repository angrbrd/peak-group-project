var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TaskSchema = new Schema({
	student: {
		type: Schema.Types.ObjectId,
		ref: "Student"
	},
	description: {
		type: String
	},
	evaluations: [{
			date: {
				type: Date
			},
			score: {
				type: Number
			},
			comment: {//in case the teacher wants to add a comment in addition to just giving a score
				type: String
			}
		}]
});

var Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
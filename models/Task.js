var mongoose = require("mongoose");
var deepPopulate = require('mongoose-deep-populate')(mongoose);
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
	student: {
		type: Schema.Types.ObjectId,
		ref: "Student"
	},
	description: {
		type: String
	},
	//add 'createdOn' or 'date'**
	evaluations: [{
			date: {
				type: Date
			},
			score: {
				type: String
			},
			comment: {//in case the teacher wants to add a comment in addition to just giving a score
				type: String
			}
		}]
});

TaskSchema.plugin(deepPopulate);
var Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
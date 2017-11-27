var mongoose = require("mongoose");
var deepPopulate = require('mongoose-deep-populate')(mongoose);
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
	student_id:{
		type: String
	},
	student_name: {
		type: String
	},
	birthdate:{
		type: Date
	},
	last_IEP_date:{
		type: Date
	},
	last_eval_date:{
		type: Date
	},
	//This will be changed to lesson plan, which will have a name, date, ID and description.
	goals: [{
		goal:{
			type: Schema.Types.ObjectId,
			ref: "Goal"
			},
		student_objectives:[{
			type: Schema.Types.ObjectId,
			ref: "Student_Objective"
		}]
	}],
	setting: {
		type: String
	},
	active:{ //AKA status. I called it "active" so it would be obvious that true=active and false=inactive
		type: Boolean
	},
	parent_email:{
		type: String
	},
	eligibility:{
		type: String
	},

});
StudentSchema.plugin(deepPopulate);
var Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
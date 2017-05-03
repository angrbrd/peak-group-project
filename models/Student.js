var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var StudentSchema = new Schema({
	student_id:{
		type: String
	},
	name: {
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
	goals: [{
		goal:{
			type: Schema.Types.ObjectId,
			ref: "Goal"
			},
		objectives:[{
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
var Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
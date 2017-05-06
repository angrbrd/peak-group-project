var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SchoolSchema = new Schema({
	school_system:{
		type: String
	},
	school_id: {
		type: String //I don't know how Wake County classifies their schools; this could change to int if they're numbers
	},
	address: {
		type: String
	},
	phone:{
		type: String,
		validate: {
          validator: function(value) {
            return value.match(/\d/g).length===10;
          },
          message: '{VALUE} is not a valid phone number!'
        }
	},
	students:{[
			type: Schema.Types.ObjectId,
			ref: "Student"
		]},
	latitude:{
		type: Number
	},
	longitude:{
		type: Number
	}
});

var School = mongoose.model("School", SchoolSchema);

module.exports= School;
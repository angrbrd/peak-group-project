var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//left this one in here as the example


var UserSchema = new Schema({
	username: {
		type: String
	},
  	
  	password: {
    	type: String
 	}
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
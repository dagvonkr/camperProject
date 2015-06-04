var mongoose = require('mongoose');

var camperSchema = mongoose.Schema({

	login: {
		local: {
			email: String,
			password: String
		}
	},

	camper_info: {
		name: {type: String, required: true},
		email: String,
		phone: String,
		city: String,
		state: String
	},

	school: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'School'
	}], 

	project: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Project'
	}]

});

camperSchema.pre('save', function(next){
	var user = this;

	user.camper_info.email = user.login.local.email;
	next();
})

module.exports = mongoose.model('Camper', camperSchema);
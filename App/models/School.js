var mongoose = require('mongoose');

var schoolSchema = mongoose.Schema({
	school_name: {
		type: String, 
		required: true,
		unique: true
	},

	contact_info: {
		email: {
			type: String
		},
		phone: {
			type: String
		}
	},

	camp_length: {
		type: String
	},

	camp_languages: Array,

	location: {
		Address: {
			type: String,
			required: true
		},
		city: {
			type: String,
			required: true
		},
		zip: {
			type: String,
			required: true
		},
		state: {
			type: String, 
			required: true
		}
	}
	
	
})
module.exports = mongoose.model('School', schoolSchema);
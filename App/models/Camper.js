var mongoose = require('mongoose');

var camperSchema = mongoose.Schema({
	login: {
		local: {
			email: String,
			password: String
		}
	}
});

module.exports = mongoose.model('Camper', camperSchema);
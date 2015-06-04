var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
	name: String
})

module.exports = mongoose.model('Client', clientSchema);
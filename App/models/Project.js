var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({

	description: {

		

		title: {
			type: String,
			required: true
		},

		description: {
			type: String,
			required: true
		},

		expamples: [
			{
				url: String
			}
		],

		start_date: {
			type: Date
		},

		design_provided: {
			type: Boolean
		}
	},

	customer: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Client'
	},

	assigned_to: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Camper'
	}



});

projectSchema.pre('save', function(next){
	
})
module.exports = mongoose.model('Project', projectSchema);
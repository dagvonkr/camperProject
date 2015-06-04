var Camper = require('../models/Camper'); 

module.exports = {

	create: function(req, res){
		var camper = new Camper(req.body);
		camper.save(function(err, saved){
			if(err)res.status(500).send(err);
			res.send(saved);
		})
	},

	readAll: function(req,res){
		Camper.find().exec().then(function(found){
			if(!found) res.status(404).send(err);
			res.send(found);
		})
	}
}
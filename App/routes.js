
//model controllers
var camperCtrl = require('./controllers/camperCtrl');


module.exports = function(app){


//====================================
//		campers
//------------------------------------
	app.get('/api/camper', camperCtrl.readAll);
	app.post('/api/camper', camperCtrl.create);

}
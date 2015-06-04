
//model controllers
var camperCtrl = require('./controllers/camperCtrl');


module.exports = function(app){


//====================================
//		campers
//------------------------------------
	app.post('/api/camper', camperCtrl.create);
	app.get('/api/camper', camperCtrl.readAll);
	app.get('/api/camper/:camperId', camperCtrl.readOne);
	app.put('/api/camper/:camperId', camperCtrl.update);
	app.delete('/api/camper/:camperId', camperCtrl.delete);

//-------------------------------------------------------





}
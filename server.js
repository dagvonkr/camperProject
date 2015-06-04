var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var port = 8881;
var me = '';


//----------------------------------
//		configure mongo / mongoose
//----------------------------------
var configuredb = require('./config/database.js');

mongoose.connect(configuredb.url, function(err){
	if(err){
		console.log('goose missing!!!');
	}
	else{
		console.log('goose = ready ');
	}
})


// ===================================
//		express - middleWare
//------------------------------------

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


//====================================
//		api routes
//-----------------------------------
require('./App/routes.js')(app)


app.listen(port, function(){
	console.log('app = ready', port);
})


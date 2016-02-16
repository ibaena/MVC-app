var express = require('express');
var router = express.Router();
var burger_commands = require('../models/burger.js');


//get route -> index
router.get('/', function(req,res) {
	burger_commands.findAllBurgers(function(burger_data){
		console.log(burger_data);
		res.render('index', {burger_data: burger_data});
	});

});

module.exports = router;

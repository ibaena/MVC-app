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
//post route -> back to index
router.post('/create', function(req, res) {
	console.log(req.body);
	burger_commands.create(req.body.name, function(result){
		res.redirect('/');
	});
});

//put route -> back to index
router.put('/update', function(req,res){
	//console.log(req.body);
	burger_commands.updates(req.body.id, function(result){
		res.redirect('/');
	});
});

//delete route -> back to index
router.delete('/destroy', function(req,res){
	burger_commands.remove(req.body.id, function(result){
		res.redirect('/');
	});
});

module.exports = router;

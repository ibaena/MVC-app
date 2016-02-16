var orm = require('../config/orm.js');

var burger = {
	findAllBurgers: function(cb) {
		orm.show(function(res){
			cb(res);
		});
	},
	create: function(nameInput,cb) {
		orm.insertOne(nameInput, cb);
	},
	update: function(inputId, cb){
		orm.updateOne(inputId, cb);
	},
	delete: function(inputId, cb) {
		orm.deleteOne(inputId, cb);
	}
};

module.exports = burger;

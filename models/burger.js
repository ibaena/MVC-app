var orm = require('../config/orm.js');

var burger = {
	findAllBurgers: function(cb) {
		orm.show(function(res){
			cb(res);
		});
	},
	create: function(name,cb) {
		orm.create(name, cb);
	},
	updates: function(id, cb){
		orm.update(id, cb);
	},
	remove: function(id, cb) {
		orm.delete(id, cb);
	}
};

module.exports = burger;

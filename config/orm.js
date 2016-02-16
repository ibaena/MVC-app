var connection = require('../config/connection.js');

var orm = {
  show: function(cb) {
    var s = 'SELECT * FROM burger;';
    connection.query(s, function(err, result) {
      if (err) throw err;
      //cb(result);
      console.log(result); //note for later result is an array containing the object [{ID:?, name:? ,devoured:?, date:?}]
    });
  },
  create: function(nameInput, cb) { //note for later i will have a button linked to this to post to list
    var s = 'INSERT INTO burger (name) VALUES (?)';
    connection.query(s, [nameInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  update: function(idInput, cb) {
    var s = 'UPDATE burger SET devoured = false WHERE id = ?';
    connection.query(s, '1', function(err, result) {
      if (err) throw err; //Tested and does update devoured field will use this to move from left to right when rendering
      cb(result);
    });
  },
  delete: function(idInput, cb) { 
    var s = 'DELETE FROM burger WHERE ID = ?';
    connection.query(s, '1', function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

};

module.exports = orm;

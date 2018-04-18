var orm = require('../config/orm.js');

//Create User Object
var artist = {
    //Select all burger table entries
    all: function(cb) {
        orm.all("artists", function(res) {
            cb(res);
        });
    },

    // The variable cols and cals are arrays
    create: function(cols, vals, cb) {
        orm.create("artists", cols, vals, function(res) {
            cb(res);
        });
    },

    update: function(objColVals, condition, cb) {
        orm.update("artists", objColVals, condition, function(res) {
          cb(res);
        });
      },

    delete: function(condition, cb) {
        orm.delete("artists", condition, function(res) {
          cb(res);
        });
      }
    };
    

//Export the database functions
module.exports = artist;

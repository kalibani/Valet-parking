'use strict';
module.exports = function(sequelize, DataTypes) {
  var spot = sequelize.define('spot', {
    nama_spot: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  spot.associate = function(models){
    spot.hasMany(models.Parking_spot)
  }
  return spot;
};

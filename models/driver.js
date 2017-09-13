'use strict';
module.exports = function(sequelize, DataTypes) {
  var Driver = sequelize.define('Driver', {
    nama: DataTypes.STRING,
    telp: DataTypes.STRING,
    id_car : DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Driver.associate = function(models){
    Driver.hasMany(models.Car)
  }
  return Driver;
};

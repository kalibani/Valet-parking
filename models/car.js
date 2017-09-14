'use strict';
module.exports = function(sequelize, DataTypes) {
  var Car = sequelize.define('Car', {
    no_plat: DataTypes.STRING,
    merk: DataTypes.STRING,
    warna: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  Car.associate = function(models){
    Car.hasMany(models.Drivers)
  }
  return Car;
};

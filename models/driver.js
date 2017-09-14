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
    // Driver.belongsTo(models.Car)
    Driver.belongsToMany(models.Parking_spot, { through: Transaksi });
    Driver.hasMany(models.Transaksi);
  }
  return Driver;
};

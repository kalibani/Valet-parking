'use strict';
module.exports = function(sequelize, DataTypes) {
  var Parking_spot = sequelize.define('Parking_spot', {
    lantai: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Parking_spot.associate= function (models) {
<<<<<<< HEAD
    Parking_spot.belongsToMany(models.Driver, { through: Transaksi })
    Parking_spot.hasMany(models.Transaksi)
    // Parking_spot.hasMany(models.Spot)
=======
    Parking_spot.belongsToMany(models.Driver, {through:models.Transaksi})
    Parking_spot.hasMany(models.Transaksi)
    Parking_spot.hasMany(models.spot)
>>>>>>> backup
  }
  return Parking_spot;
};

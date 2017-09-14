'use strict';
module.exports = function(sequelize, DataTypes) {
  var Parking_spot = sequelize.define('Parking_spot', {
    lantai: DataTypes.INTEGER,
    spot_name: DataTypes.STRING,
    spot_status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Parking_spot.associate= function (models) {
    Parking_spot.belongsToMany(models.Driver, {through:models.Transaksi})
    Parking_spot.hasMany(models.Transaksi)

  }
  return Parking_spot;
};

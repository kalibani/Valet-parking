'use strict';
module.exports = function(sequelize, DataTypes) {
  var Transaksi = sequelize.define('Transaksi', {
    jam_masuk: DataTypes.DATE,
    jam_keluar: DataTypes.DATE,
    durasi: DataTypes.INTEGER,
    total_harga: DataTypes.INTEGER,
    DriverId: DataTypes.INTEGER,
    ParkingSpotId: DataTypes.INTEGER,
    no_plat: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  Transaksi.associate = function (models) {
    Transaksi.belongsTo(models.Driver)
    Transaksi.belongsTo(models.Parking_spot)
  }
  return Transaksi;
};

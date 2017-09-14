'use strict';
module.exports = function(sequelize, DataTypes) {
  var Transaksi = sequelize.define('Transaksi', {
    jam_masuk: DataTypes.DATE,
    jam_keluar: DataTypes.DATE,
    durasi: DataTypes.INTEGER,
    total_harga: DataTypes.INTEGER,
    id_driver: DataTypes.INTEGER,
    id_spot: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
<<<<<<< HEAD
  Transaksi.associate = function (models){
    Transaksi.belongsTo(models.Driver, {foreignKey : id_driver})
    Transaksi.belongsTo(models.Parking_spot, {foreignKey : id_spot})
=======
  Transaksi.associate = function (models) {
    Transaksi.belongsTo(models.Driver, {foreignKey: 'id_driver'})
    Transaksi.belongsTo(models.Parking_spot, {foreignKey: 'id_spot'})
>>>>>>> backup
  }
  return Transaksi;
};

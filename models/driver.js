'use strict';
module.exports = function(sequelize, DataTypes) {
  var Driver = sequelize.define('Driver', {
    nama: DataTypes.STRING,
    telp: DataTypes.STRING,
    no_plat : DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Driver.associate = function(models){
<<<<<<< HEAD
    // Driver.belongsTo(models.Car)
    Driver.belongsToMany(models.Parking_spot, { through: Transaksi });
    Driver.hasMany(models.Transaksi);
=======
    Driver.belongsToMany(models.Parking_spot, {through:models.Transaksi})
    Driver.hasMany(models.Transaksi)
>>>>>>> backup
  }
  return Driver;
};

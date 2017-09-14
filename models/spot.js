'use strict';
module.exports = function(sequelize, DataTypes) {
  var spot = sequelize.define('spot', {
    nama_spot: DataTypes.STRING,
    status: DataTypes.STRING,
    id_spot: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  spot.associate = function (models) {
    spot.belongsTo(models.Parking_spot, {foreignKey: 'id_spot'})

  }
  return spot;
};

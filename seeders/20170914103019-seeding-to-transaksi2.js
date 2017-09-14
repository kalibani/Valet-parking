'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Transaksis', [{
      no_plat: 'B123KL',
      durasi: 3,
      total_harga: 23456,
      DriverId: 1,
      ParkingSpotId:1,
      jam_masuk: new Date(),
      jam_keluar: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      no_plat: 'B123KL',
      durasi: 3,
      total_harga: 23456,
      DriverId: 1,
      ParkingSpotId:1,
      jam_masuk: new Date(),
      jam_keluar: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};

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
    return queryInterface.bulkInsert('Parking_spots', [{
      spot_name: 'A1',
      spot_status: 'kosong',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      spot_name: 'A2',
      spot_status: 'kosong',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      spot_name: 'A3',
      spot_status: 'kosong',
      createdAt: new Date(),
      updatedAt: new Date()
    }]
  )
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

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
    return queryInterface.bulkInsert('Drivers', [{
      nama: 'Amin',
      telp: '08765439220',
      createdAt: new Date(),
      updatedAt:  new Date()
    },
    {
      nama: 'Udin',
      telp: '08765453630',
      createdAt: new Date(),
      updatedAt:  new Date()
    },{
      nama: 'Yanto',
      telp: '08765783030',
      createdAt: new Date(),
      updatedAt:  new Date()
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

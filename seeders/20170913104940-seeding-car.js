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
    return queryInterface.bulkInsert('Cars', [{
      no_plat: 'B156ZA',
      merk: 'Toyota',
      warna: 'Hitam',
      createdAt: new Date(),
      updatedAt:  new Date()
    },
    {
      no_plat: 'B675PO',
      merk: 'Honda',
      warna: 'Merah',
      createdAt: new Date(),
      updatedAt:  new Date()
    },{
      no_plat: 'B789UA',
      merk: 'Suzuki',
      warna: 'Biru',
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

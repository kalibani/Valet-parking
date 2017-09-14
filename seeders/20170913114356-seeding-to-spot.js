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
    return queryInterface.bulkInsert('spots', [{
      nama_spot: 'A1',
      status: 'ISI',
      createdAt: new Date(),
      updatedAt:  new Date()
    },
    {
      nama_spot: 'B1',
      status: 'KOSONG',
      createdAt: new Date(),
      updatedAt:  new Date()
<<<<<<< HEAD
    },
    {
      nama_spot: 'C1',
      status: 'ISI',
      createdAt: new Date(),
      updatedAt:  new Date()
    }
  ])
=======
    },{
      nama_spot: 'B3',
      status: 'ISI',
      createdAt: new Date(),
      updatedAt:  new Date()
    }]
  )
>>>>>>> backup
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

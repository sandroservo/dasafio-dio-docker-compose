'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('companies', [{
      name: 'Nubank',
      bio: 'Eu incididunt tempor aliqua duis ea est in quis aliqua veniam aliqua non.',
      website: 'https://numbank.com.br',
      email: 'nubank@nubank.com',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'Magazine Luiza',
      bio: 'Eu incididunt tempor aliqua duis ea est in quis aliqua veniam aliqua non.',
      website: 'https://magazineluiza.com.br',
      email: 'magazieneluiza@magazieneluiza.com',
      created_at: new Date(),
      updated_at: new Date()

    }, {
      name: 'OniBiteCode',
      bio: 'Eu incididunt tempor aliqua duis ea est in quis aliqua veniam aliqua non.',
      website: 'https://onib.com.br',
      email: 'onebitecode@onebitecode.com',
      created_at: new Date(),
      updated_at: new Date()
    }])
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('companies', null, {});

  }

};

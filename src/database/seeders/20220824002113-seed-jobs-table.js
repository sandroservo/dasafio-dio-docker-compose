'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const [companies] = await queryInterface.sequelize.query('SELECT id FROM companies;');

    await queryInterface.bulkInsert('jobs', [{
      title: 'Full-stack javascript Developer',
      description: 'Lorem Incididunt ad sit ut quis aute non deserunt cupidatat cupidatat veniam dolor eiusmod.',
      limit_date: '2022-03-31',
      company_id: companies[0].id,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      title: 'Full-stack  Developer(Reactjs)',
      description: 'Lorem Incididunt ad sit ut quis aute non deserunt cupidatat cupidatat veniam dolor eiusmod.',
      limit_date: '2022-04-15',
      company_id: companies[0].id,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      title: 'Back-end  Developer(Nodejs)',
      description: 'Lorem Incididunt ad sit ut quis aute non deserunt cupidatat cupidatat veniam dolor eiusmod.',
      limit_date: '2022-04-15',
      company_id: companies[1].id,
      created_at: new Date(),
      updated_at: new Date()
    }]);

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('jobs', null, {});

  }
};

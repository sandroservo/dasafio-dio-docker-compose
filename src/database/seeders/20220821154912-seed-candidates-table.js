'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('candidates', [{
      name: 'Sandro Servo',
      bio: 'I\'m a full-stack javascript developer with experience on MERN stack.',
      email: 'sandro_servo@hotmail.com',
      phone: '111-111',
      open_to_work: true,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'Marcos Aurelio ',
      bio: 'Font-end developer | React | PHP | Next.js | Typescript',
      email: 'systemboy@hotamil.com',
      phone: '111-111',
      open_to_work: true,
      created_at: new Date(),
      updated_at: new Date()

    },{
      name: 'Moises Maginho ',
      bio: 'Font-end developer | React | PHP | Next.js | Typescript',
      email: 'magim@hotamil.com',
      phone: '111-111',
      open_to_work: true,
      created_at: new Date(),
      updated_at: new Date()

    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('candidates', null, {});
  }
};

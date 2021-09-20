'use strict';
const faker = require('faker-br');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for(let i=0; i < 100; i++) {
      await queryInterface.bulkInsert('students', [{
        name: faker.name.findName(),
        email: faker.internet.email(),
        cpf: faker.br.cpf(),
        created_at: new Date(),
        updated_at: new Date(),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('students', null, {});
  }
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     
  //   await queryInterface.bulkInsert('Users', [
  //     { login: 'petr',email: 'p@p', password:'123', role_id: 2, createdAt: new Date(), updatedAt: new Date() },
  //     { login: 'ivan',email: 'i@i', password:'12', role_id: 2, createdAt: new Date(), updatedAt: new Date() },
  //     { login: 'sergey',email: 's@s', password:'1234', role_id: 2, createdAt: new Date(), updatedAt: new Date() }
  // ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Genders', [ // название из миграция с 's'
      { gender: 'Мужской', createdAt: new Date(), updatedAt: new Date() },
      { gender: 'Женский', createdAt: new Date(), updatedAt: new Date() },
      { gender: 'Другое', createdAt: new Date(), updatedAt: new Date() },
    ]);
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

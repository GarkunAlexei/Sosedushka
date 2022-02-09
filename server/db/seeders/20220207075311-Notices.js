'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Notices', [
        { address: 'Матвеевская',description: 'двушка в брежневке', cost:'55000', user_id: 1, createdAt: new Date(), updatedAt: new Date() },
        { address: 'Киевская', description: 'трешка с видом на москва реку', cost:'90000', user_id: 2, createdAt: new Date(), updatedAt: new Date() },
        { address: 'Бирюлево', description: 'однушка в старой хрущевке', cost:'40000', user_id: 3, createdAt: new Date(), updatedAt: new Date() }
    ], {});
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

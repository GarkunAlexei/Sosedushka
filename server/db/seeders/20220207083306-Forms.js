'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    //   await queryInterface.bulkInsert('Forms', [
    //     { 
    //       phone: '777-77-77',
    //       birthday: new Date(1965, 11, 17), 
    //       photo:'https://static.dw.com/image/36742552_303.jpg', 
    //       user_id: 6, 
    //       about_me:'пожарник',
    //       budget: '50000',
    //       gender_id: 1,
    //       createdAt: new Date(), updatedAt: new Date() 
    //     },
    //     { 
    //       phone: '555-55-55',
    //       birthday: new Date(1967, 11, 17), 
    //       photo:'https://nlmk.com/upload/resize_cache/iblock/c66/280_280_2/Lisin-Vladimir.jpg',
    //       user_id: 7,
    //       about_me:'инженер технолог',
    //       budget: '60000',
    //       gender_id: 1,
    //       createdAt: new Date(), updatedAt: new Date() 
    //     },
    //     { 
    //       phone: '333-33-33',
    //       birthday: new Date(1968, 11, 17),
    //       photo:'https://s0.rbk.ru/v6_top_pics/media/img/4/29/756398298502294.jpg',
    //       user_id: 8,
    //       about_me:'садовник',
    //       budget: '70000',
    //       gender_id: 1,
    //       createdAt: new Date(), updatedAt: new Date()
    //      },
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

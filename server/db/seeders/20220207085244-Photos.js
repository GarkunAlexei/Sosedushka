'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
   
    //   await queryInterface.bulkInsert('Photos', [
    //     { 
    //       photo: 'https://img.gazeta.ru/files3/179/14096179/Depositphotos_303868220_L-pic_32ratio_900x600-900x600-31493.jpg', 
    //       notice_id: 19, 
    //       createdAt: new Date(), updatedAt: new Date() 
    //     },
    //     { 
    //       photo: 'https://remont-f.ru/upload/iblock/597/dizayn-interyera-kvartiry-v-sovremennom-stile-gostinaja-2.jpg', 
    //       notice_id: 20, 
    //       createdAt: new Date(), updatedAt: new Date() 
    //     },
    //     { photo: 'http://m.asninfo.ru/images/comfortlive/a7778d5d/9d284ff749ff5feeeb1391ea.jpg',
    //       notice_id: 21,
    //       createdAt: new Date(), updatedAt: new Date() 
    //     },

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

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
   
      await queryInterface.bulkInsert('Photos', [
        { 
          photo: 'https://img.gazeta.ru/files3/179/14096179/Depositphotos_303868220_L-pic_32ratio_900x600-900x600-31493.jpg', 
          notice_id: 19, 
          createdAt: new Date(), updatedAt: new Date() 
        },
        { 
          photo: 'https://remont-f.ru/upload/iblock/597/dizayn-interyera-kvartiry-v-sovremennom-stile-gostinaja-2.jpg', 
          notice_id: 20, 
          createdAt: new Date(), updatedAt: new Date() 
        },
        { photo: 'http://m.asninfo.ru/images/comfortlive/a7778d5d/9d284ff749ff5feeeb1391ea.jpg',
          notice_id: 21,
          createdAt: new Date(), updatedAt: new Date() 
        },
        // { photo: 'https://remont-f.ru/upload/iblock/50e/dizayn-interyera-2-komnatnoj-kvartiry-101-kv-m-foto-4-3991.jpg',
        //   notice_id: 2,
        //   createdAt: new Date(), updatedAt: new Date() 
        // },
        // { photo: 'https://marin-dom.ru/media/k2/items/cache/bf337492a0864d5a8d1619941820aa93_L.jpg', 
        //   notice_id: 3,
        //   createdAt: new Date(), updatedAt: new Date() 
        // },
        // { photo: 'https://n1s2.starhit.ru/d3/ee/a0/d3eea0d3573eb08bfe7247ea1e10ca08/460x344_0_8afbc1b0289768f96d7f8b831ea01ad9@1280x958_0xac120003_4801230521627720471.jpg', 
        //   notice_id: 3,
        //   createdAt: new Date(), updatedAt: new Date() 
        // }
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

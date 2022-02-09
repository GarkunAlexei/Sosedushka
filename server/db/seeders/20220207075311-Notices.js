'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    //   await queryInterface.bulkInsert('Notices', [
    //     { address: 'Москва, Большой Черкасский переулок',coords: '[55.75647757207701, 37.62602005129343]',description: 'Лаконичный интерьер в стиле неоклассика. Открытая планировка, кухня-гостиная. Полноразмерная кухня оборудована немецкой встроенной техникой Kueppersbusch и укомплектована полным набором посуды и кофемашиной.', cost:'55000', user_id: 2, createdAt: new Date(), updatedAt: new Date() },
    //     { address: 'Москва, Красная площадь',coords: '[55.75647757207701, 37.62602005129343]',  description: 'Лаконичный интерьер в стиле неоклассика. Открытая планировка, кухня-гостиная. Полноразмерная кухня оборудована немецкой встроенной техникой Kueppersbusch и укомплектована полным набором посуды и кофемашиной.', cost:'90000', user_id: 3, createdAt: new Date(), updatedAt: new Date() },
    //     { address: 'Москва, Большой Черкасский переулок',coords: '[55.75647757207701, 37.62602005129343]',description: 'Лаконичный интерьер в стиле неоклассика. Открытая планировка, кухня-гостиная. Полноразмерная кухня оборудована немецкой встроенной техникой Kueppersbusch и укомплектована полным набором посуды и кофемашиной.', cost:'55000', user_id: 4, createdAt: new Date(), updatedAt: new Date() },
    //     { address: 'Москва, Красная площадь',coords: '[55.75647757207701, 37.62602005129343]',  description: 'Лаконичный интерьер в стиле неоклассика. Открытая планировка, кухня-гостиная. Полноразмерная кухня оборудована немецкой встроенной техникой Kueppersbusch и укомплектована полным набором посуды и кофемашиной.', cost:'90000', user_id: 5, createdAt: new Date(), updatedAt: new Date() },
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

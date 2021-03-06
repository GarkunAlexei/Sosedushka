'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Locations', [ // название из миграция с 's'
      { district: 'Академический', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Алексеевский', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Бабушкинский', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Басманный', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Бескудниковский', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Бутырский', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Войковский', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Гагаринский', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Головинский', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Даниловский', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Донской', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Красносельский', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Мещанский', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Можайский', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Нагорный', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Нижегородский', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Обручевский', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Останкинский', createdAt: new Date(), updatedAt: new Date() },
      { district: 'поселение Внуковское', createdAt: new Date(), updatedAt: new Date() },
      { district: 'поселение Московский', createdAt: new Date(), updatedAt: new Date() },
      { district: 'поселение Сосенское', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Пресненский', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Арбат', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Аэропорт', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Бибирево', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Богородское', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Братеево', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Восточное Дегунино', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Выхино-Жулебино', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Гольяново', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Дорогомилово', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Замоскворечье', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Зюзино', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Зябликово', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Измайлово', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Коньково', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Коптево', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Косино-Ухтомский', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Крылатское', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Кузьминки', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Кунцево', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Левобережный', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Лефортово', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Люблино', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Марфино', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Марьина Роща', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Марьино', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Митино', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Москворечье-Сабурово', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Нагатино-Садовники', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Нагатинский Затон', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Некрасовка', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Ново-Переделкино', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Новогиреево', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Новокосино', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Орехово-Борисово Северное', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Отрадное', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Очаково-Матвеевское', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Перово', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Печатники', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Покровское-Стрешнево', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Преображенское', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Проспект Вернадского', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Раменки', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Ростокино', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Свиблово', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Северное Бутово', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Северное Медведково', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Северное Тушино', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Сокол', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Соколиная Гора', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Сокольники', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Солнцево', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Строгино', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Текстильщики', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Тёплый Стан', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Тропарёво-Никулино', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Филёвский Парк', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Фили-Давыдково', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Хамовники', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Ховрино', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Хорошёво-Мнёвники', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Царицыно', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Черёмушки', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Чертаново Северное', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Чертаново Центральное', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Чертаново Южное', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Щукино', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Южное Бутово', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Южное Тушино', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Якиманка', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Ясенево', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Рязанский', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Савёловский', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Таганский', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Тверской', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Тимирязевский', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Хорошёвский', createdAt: new Date(), updatedAt: new Date() },
      { district: 'Южнопортовый', createdAt: new Date(), updatedAt: new Date() },
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

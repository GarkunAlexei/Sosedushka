'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Entries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hobby_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Interests',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      form_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Forms',
          key: 'id',
        },
        onDelete: 'CASCADE',
        
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Entries');
  }
};

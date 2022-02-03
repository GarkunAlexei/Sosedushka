'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Notice}) {
      this.belongsTo(Notice, { foreignKey: 'notice_id' });
    }
  }
  Photo.init({
    photo: DataTypes.STRING,
    notice_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Form extends Model {
    static associate({Interest, Gender, User}) {
      // define association here
      this.belongsToMany(Interest, {through: 'Entries', foreignKey: 'hobby_id'});
      this.belongsTo(Gender, { foreignKey: 'gender_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Form.init({
    phone: DataTypes.STRING,
    birthday: DataTypes.DATE,
    photo: DataTypes.STRING,
    about_me: DataTypes.TEXT,
    budget: DataTypes.STRING,
    gender_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Form',
  });
  return Form;
};

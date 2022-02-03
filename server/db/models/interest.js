'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Interest extends Model {
    static associate({Form}) {
      // define association here
      this.belongsToMany(Form, {through: 'Entries', foreignKey: 'form_id'})
    }
  }
  Interest.init({
    interest: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Interest',
  });
  return Interest;
};

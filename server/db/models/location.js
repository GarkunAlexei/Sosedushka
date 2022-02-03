'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Notice}) {
      this.hasMany(Notice, { foreignKey: 'location_id' });
    }
  }
  Location.init({
    district: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};

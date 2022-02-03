'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Photo, Location, User}) {
      this.hasMany(Photo, { foreignKey: 'notice_id' });
      this.belongsTo(Location, { foreignKey: 'location_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Notice.init({
    address: DataTypes.STRING,
    description: DataTypes.TEXT,
    cost: DataTypes.STRING,
    coords: DataTypes.JSON,
    location_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Notice',
  });
  return Notice;
};

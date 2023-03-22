'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class refresh_admin_token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.admin);
    }
  }
  refresh_admin_token.init({
    token: DataTypes.TEXT,
    adminId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'refresh_admin_token',
  });
  return refresh_admin_token;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class refresh_dokter_token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.dokter);
    }
  }
  refresh_dokter_token.init({
    token: DataTypes.TEXT,
    dokterId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'refresh_dokter_token',
  });
  return refresh_dokter_token;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class refresh_pasien_token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.pasien);
    }
  }
  refresh_pasien_token.init({
    token: DataTypes.TEXT,
    pasienId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'refresh_pasien_token',
  });
  return refresh_pasien_token;
};
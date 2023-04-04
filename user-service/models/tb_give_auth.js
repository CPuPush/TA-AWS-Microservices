'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_give_auth extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.pasien);
      this.belongsTo(models.dokter);
    }
  }
  tb_give_auth.init({
    pasienId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dokterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'tb_give_auth',
  });
  return tb_give_auth;
};
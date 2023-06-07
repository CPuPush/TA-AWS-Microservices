'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_media.init({
    image_url: {
      type: DataTypes.STRING
    },
    tbMedicalRecordId: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'tb_media',
  });
  return tb_media;
};
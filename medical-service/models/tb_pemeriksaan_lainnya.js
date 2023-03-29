'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_pemeriksaan_lainnya extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.tb_medical_record)
    }
  }
  tb_pemeriksaan_lainnya.init({
    tbMedicalRecordId: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    jantung: {
      type: DataTypes.STRING
    },
    paru: {
      type: DataTypes.STRING
    },
    ekg: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'tb_pemeriksaan_lainnya',
  });
  return tb_pemeriksaan_lainnya;
};
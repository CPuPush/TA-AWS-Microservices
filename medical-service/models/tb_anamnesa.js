'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_anamnesa extends Model {
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
  tb_anamnesa.init({
    tbMedicalRecordId: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    riwayat_penyakit_dahulu: {
      type: DataTypes.STRING,
    },
    riwayat_penyakit_keluarga: {
      type: DataTypes.STRING,
    },
    riwayat_kecelakaan: {
      type: DataTypes.STRING,
    },
    riwayat_perawatan_rumah_sakit: {
      type: DataTypes.STRING,
    },
    riwayat_operasi: {
      type: DataTypes.STRING,
    },
    merokok:{
      type: DataTypes.STRING,
    },
    minum_alkohol: {
      type: DataTypes.STRING,
    },
    olahraga: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'tb_anamnesa',
  });
  return tb_anamnesa;
};
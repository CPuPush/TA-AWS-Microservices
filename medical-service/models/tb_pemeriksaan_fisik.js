'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_pemeriksaan_fisik extends Model {
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
  tb_pemeriksaan_fisik.init({
    tbMedicalRecordId: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    tinggi_badan: {
      type: DataTypes.REAL
    },
    berat_badan: {
      type: DataTypes.REAL
    },
    indeks_masa_tubuh: {
      type: DataTypes.REAL
    },
    kulit: {
      type: DataTypes.STRING
    },
    sistem_limfa: {
      type: DataTypes.STRING
    },
    thyroid: {
      type: DataTypes.STRING
    },
    denyut_nadi: {
      type: DataTypes.INTEGER
    },
    karakter: {
      type: DataTypes.STRING
    },
    vena: {
      type: DataTypes.STRING
    },
    oedema: {
      type: DataTypes.STRING
    },
    tekanan_darah: {
      type: DataTypes.STRING
    },
    detak_jantung: {
      type: DataTypes.STRING
    },
    mur_mur_jantung: {
      type: DataTypes.STRING
    },
    frekuensi_nafas: {
      type: DataTypes.INTEGER
    },
    trachea:{
      type: DataTypes.STRING
    },
    inspeksi:{
      type: DataTypes.STRING
    },
    palpasi: {
      type: DataTypes.STRING
    },
    auskultasi: {
      type: DataTypes.STRING
    },
    perkusi: {
      type: DataTypes.STRING
    },
    mulut: {
      type: DataTypes.STRING
    },
    hati: {
      type: DataTypes.STRING
    },
    limpa:{
      type: DataTypes.STRING
    },
    massa: {
      type: DataTypes.STRING
    },
    colok_dubur:{
      type: DataTypes.STRING
    },
    ginjal: {
      type: DataTypes.STRING
    },
    saraf_cranial: {
      type: DataTypes.STRING
    },
    sistem_motorik: {
      type: DataTypes.STRING
    },
    sistem_sensorik: {
      type: DataTypes.STRING
    },
    refleks: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'tb_pemeriksaan_fisik',
  });
  return tb_pemeriksaan_fisik;
};
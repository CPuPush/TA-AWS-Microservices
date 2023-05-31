'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_laboratorium extends Model {
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
  tb_laboratorium.init({   
    tbMedicalRecordId: {
      type: DataTypes.INTEGER,
    },
    hb: {
      type: DataTypes.REAL
    },
    leukosit: {
      type: DataTypes.REAL
    },
    led: {
      type: DataTypes.REAL
    },
    eritrosit: {
      type: DataTypes.REAL
    },
    hematrokit: {
      type: DataTypes.REAL
    },
    trombosit: {
      type: DataTypes.REAL
    },
    golongan_darah: {
      type: DataTypes.ENUM,
      values: ['A', 'AB', 'B', 'O', 'A+', 'AB+', 'B+', 'O+','A-', 'AB-', 'B-', 'O-']
    },
    mcv: {
      type: DataTypes.REAL
    },
    mch:{
      type: DataTypes.REAL
    },
    mchc: {
      type: DataTypes.REAL
    },
    basofil: {
      type: DataTypes.REAL
    },
    eosinofil:{
      type: DataTypes.REAL
    },
    n_batang:{
      type: DataTypes.REAL
    },
    n_segmen: {
      type: DataTypes.REAL
    },
    limfosit: {
      type: DataTypes.REAL
    },
    monosit: {
      type: DataTypes.REAL
    },
    gula_darah_puasa: {
      type: DataTypes.REAL
    },
    total_kolesterol: {
      type: DataTypes.REAL
    },
    hdl:{
      type: DataTypes.REAL
    },
    ldl:{
      type: DataTypes.REAL
    },
    trigliserida:{
      type: DataTypes.REAL
    },
    ureum_darah: {
      type: DataTypes.REAL
    },
    kreatinin_darah: {
      type: DataTypes.REAL
    },
    asam_urat: {
      type: DataTypes.REAL
    },
    sgot: {
      type: DataTypes.REAL
    },
    sgpt: {
      type: DataTypes.REAL
    },
    warna: {
      type: DataTypes.STRING
    },
    kekeruhan:{
      type: DataTypes.STRING
    },
    berat_jenis: {
      type: DataTypes.REAL
    },
    ph: {
      type: DataTypes.REAL
    },
    leukosit_urine: {
      type: DataTypes.STRING
    },
    eritrosit_urine: {
      type: DataTypes.STRING
    },
    silinder: {
      type: DataTypes.STRING
    },
    kristal: {
      type: DataTypes.STRING
    },
    epitel:{
      type: DataTypes.STRING
    },
    protein: {
      type: DataTypes.STRING
    },
    glukosa: { 
      type: DataTypes.STRING
    },
    bilirubin: {
      type: DataTypes.STRING
    },
    urobilin: {
      type: DataTypes.STRING
    },
    benda_keton: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'tb_laboratorium',
  });
  return tb_laboratorium;
};
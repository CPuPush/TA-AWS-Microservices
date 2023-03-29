const {tb_pemeriksaan_fisik} = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
  try {
    const {tbMedicalRecordId} = req.params;
    const {
      tinggi_badan,
      berat_badan,
      indeks_masa_tubuh,
      kulit,
      sistem_limfa,
      thyroid,
      denyut_nadi,
      karakter,
      vena,
      oedema,
      tekanan_darah,
      detak_jantung,
      mur_mur_jantung,
      frekuensi_nafas,
      trachea,
      inspeksi,
      palpasi,
      auskultasi,
      perkusi,
      mulut,
      hati,
      limpa,
      massa,
      colok_dubur,
      ginjal,
      saraf_cranial,
      sistem_motorik,
      sistem_sensorik,
      refleks
    } = req.body;

    const Schema = {
      tinggi_badan: "number",
      berat_badan: "number",
      indeks_masa_tubuh: "number",
      kulit: "string",
      sistem_limfa: "string",
      thyroid: "string",
      denyut_nadi: "number",
      karakter: "string",
      vena: "string",
      oedema: "string",
      tekanan_darah: "string",
      detak_jantung: "string",
      mur_mur_jantung: "string",
      frekuensi_nafas: "number",
      trachea: "string",
      inspeksi: "string",
      palpasi: "string",
      auskultasi: "string",
      perkusi: "string",
      mulut: "string",
      hati: "string",
      limpa: "string",
      massa: "string",
      colok_dubur: "string",
      ginjal: "string",
      saraf_cranial: "string",
      sistem_motorik: "string",
      sistem_sensorik: "string",
      refleks: "string"
    }

    const validate = v.validate(req.body, Schema);
    
    if(validate.length){
      return res.status(400).json({
        status: "error",
        message: validate
      })
    }

    const data = await tb_pemeriksaan_fisik.create({
      tbMedicalRecordId,
      tinggi_badan,
      berat_badan,
      indeks_masa_tubuh,
      kulit,
      sistem_limfa,
      thyroid,
      denyut_nadi,
      karakter,
      vena,
      oedema,
      tekanan_darah,
      detak_jantung,
      mur_mur_jantung,
      frekuensi_nafas,
      trachea,
      inspeksi,
      palpasi,
      auskultasi,
      perkusi,
      mulut,
      hati,
      limpa,
      massa,
      colok_dubur,
      ginjal,
      saraf_cranial,
      sistem_motorik,
      sistem_sensorik,
      refleks
    })

    return res.status(201).json({
      status: "success",
      data
    })
  } catch (error) {
    if(error.name === "SequelizeForeignKeyConstraintError"){
      return res.status(400).json({
        status: "error",
        message: "foreign key invalid"
      })
    }else if(error.name === "SequelizeUniqueConstraintError"){
      return res.status(400).json({
        status: "error",
        message: `pemeriksaan fisik had created into the data id`
      })
    }
    return res.status(500).json(error)
  }
}
/*
tbMedicalRecordId: {
      type: DataTypes.INTEGER,
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
*/
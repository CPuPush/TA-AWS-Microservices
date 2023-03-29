const {tb_anamnesa} = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
  try {
    const {tbMedicalRecordId} = req.params;
    const {
      riwayat_penyakit_dahulu,
      riwayat_penyakit_keluarga,
      riwayat_kecelakaan,
      riwayat_perawatan_rumah_sakit,
      riwayat_operasi,
      merokok,
      minum_alkohol,
      olahraga
    } = req.body;

    const Schema = {
      riwayat_penyakit_dahulu: "string",
      riwayat_penyakit_keluarga: "string",
      riwayat_kecelakaan: "string",
      riwayat_perawatan_rumah_sakit: "string",
      riwayat_operasi: "string",
      merokok: "string",
      minum_alkohol: "string",
      olahraga: "string"
    }
    const validate = v.validate(req.body, Schema);

    if(validate.length){
      return res.status(400).json({
        status: "error",
        message: validate
      });
    }

    const data = await tb_anamnesa.create({
      tbMedicalRecordId,
      riwayat_penyakit_dahulu,
      riwayat_penyakit_keluarga,
      riwayat_kecelakaan,
      riwayat_perawatan_rumah_sakit,
      riwayat_operasi,
      merokok,
      minum_alkohol,
      olahraga
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
    }else if(error.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({
        status: "error",
        message: `anamnesa had created into the data id`
      })
    }
    return res.status(500).json(error);
  }
};

/*
tb_anamnesa.init({
    tb_medical_recordsId: {
      type: DataTypes.INTEGER,
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
*/
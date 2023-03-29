const {tb_pemeriksaan_lainnya} = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
  try {
    const {tbMedicalRecordId} = req.params;
    const {
      jantung,
      paru,
      ekg
    } = req.body;

    const Schema = {
      jantung: "string",
      paru: "string",
      ekg: "string"
    }

    const validate = v.validate(req.body, Schema);
    if(validate.length){
      return res.status(400).json({
        status: "error",
        message: validate
      })
    }

    const data = await tb_pemeriksaan_lainnya.create({
      tbMedicalRecordId,
      jantung,
      paru,
      ekg
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
*/
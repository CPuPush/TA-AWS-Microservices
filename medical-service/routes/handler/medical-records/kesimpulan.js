const {tb_kesimpulan} = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res)=>{
  try {
    const tbMedicalRecordId = req.params.tbMedicalRecordId;
    const {
      kesimpulan,
      anjuran
    } = req.body;

    const Schema = {
      kesimpulan:"string",
      anjuran:"string"
    }

    const validate = v.validate(req.body, Schema);
    if(validate.length){
      return res.status(400).json({
        status: 'error',
        message: validate
      })
    }

    const data = await tb_kesimpulan.create({
      tbMedicalRecordId,
      kesimpulan,
      anjuran
    })
    return res.status(201).json({
      status: "success",
      data
    })

  } catch (error) { 
    return res.status(500).json(error);
  }
};

/*
nama: {
      type: DataTypes.STRING,
      allowNull: false
    },
    jenis_kelamin: {
      type: DataTypes.ENUM,
      values:['perempuan','laki-laki'],
      allowNull: false
    },
    tanggal_lahir: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    umur: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: false
    },
    no_rekam_medis: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    tgl_pemeriksaan: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tujuan_pemeriksaan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pasien_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
*/
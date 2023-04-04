const {tb_medical_record} = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res)=>{
  try {
    const {pasienId} = req.params;
    const {
      nama,
      jenis_kelamin,
      tanggal_lahir,
      umur,
      alamat,
      no_rekam_medis,
      tgl_pemeriksaan,
      tujuan_pemeriksaan,
      dokterId
    } = req.body;

    const Schema = {
      nama: "string|empty:false",
      jenis_kelamin: "string|empty:false",
      tanggal_lahir: "string|empty:false",
      umur: "number|empty:false",
      alamat: "string|empty:false",
      no_rekam_medis: "number|empty:false",
      tgl_pemeriksaan: "string|empty:false",
      tujuan_pemeriksaan: "string|empty:false",
      dokterId: "number|empty:false"
    }

    const validate = v.validate(req.body, Schema);
    if(validate.length){
      return res.status(400).json({
        status: 'error',
        message: validate
      })
    }

    const data = await tb_medical_record.create({
      nama,
      jenis_kelamin,
      tanggal_lahir,
      umur,
      alamat,
      no_rekam_medis,
      tgl_pemeriksaan,
      tujuan_pemeriksaan,
      pasienId,
      dokterId
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
        message: error.errors[0].message
      })
    }
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
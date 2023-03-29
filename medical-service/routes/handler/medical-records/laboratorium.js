const {tb_laboratorium} = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
  try {
    const {tbMedicalRecordId} = req.params;
    const {
      hb,
      leukosit,
      led,
      eritrosit,
      hematrokit,
      trombosit,
      golongan_darah,
      mcv,
      mch,
      mchc,
      basofil,
      eosinofil,
      n_batang,
      n_segmen,
      limfosit,
      monosit,
      gula_darah_puasa,
      total_kolesterol,
      hdl,
      ldl,
      trigliserida,
      ureum_darah,
      kreatinin_darah,
      asam_urat,
      sgot,
      sgpt,
      warna,
      kekeruhan,
      berat_jenis,
      ph,
      leukosit_urine,
      eritrosit_urine,
      silinder,
      kristal,
      epitel,
      protein,
      glukosa,
      bilirubin,
      urobilin,
      benda_keton
    } = req.body;

    const Schema = {
      hb:"number",
      leukosit:"number",
      led:"number",
      eritrosit:"number",
      hematrokit:"number",
      trombosit:"number",
      golongan_darah:"string",
      mcv:"number",
      mch:"number",
      mchc:"number",
      basofil:"number",
      eosinofil:"number",
      n_batang:"number",
      n_segmen:"number",
      limfosit:"number",
      monosit:"number",
      gula_darah_puasa:"number",
      total_kolesterol:"number",
      hdl:"number",
      ldl:"number",
      trigliserida:"number",
      ureum_darah:"number",
      kreatinin_darah:"number",
      asam_urat:"number",
      sgot:"number",
      sgpt:"number",
      warna:"string",
      kekeruhan:"string",
      berat_jenis:"number",
      ph:"number",
      leukosit_urine:"string",
      eritrosit_urine:"string",
      silinder:"string",
      kristal:"string",
      epitel:"string",
      protein:"string",
      glukosa:"string",
      bilirubin:"string",
      urobilin:"string",
      benda_keton:"string"
    }
    
    const validate = v.validate(req.body, Schema);
    
    if(validate.length){
      return res.status(400).json({
        status: "error",
        message: validate
      })
    };

    const data = await tb_laboratorium.create({
      tbMedicalRecordId,
      hb,
      leukosit,
      led,
      eritrosit,
      hematrokit,
      trombosit,
      golongan_darah,
      mcv,
      mch,
      mchc,
      basofil,
      eosinofil,
      n_batang,
      n_segmen,
      limfosit,
      monosit,
      gula_darah_puasa,
      total_kolesterol,
      hdl,
      ldl,
      trigliserida,
      ureum_darah,
      kreatinin_darah,
      asam_urat,
      sgot,
      sgpt,
      warna,
      kekeruhan,
      berat_jenis,
      ph,
      leukosit_urine,
      eritrosit_urine,
      silinder,
      kristal,
      epitel,
      protein,
      glukosa,
      bilirubin,
      urobilin,
      benda_keton
    });

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
        message: `laboratorium had created into the data id`
      })
    }
    return res.status(500).json(error);
  }
};

/*
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
    eritrosit: {
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
*/
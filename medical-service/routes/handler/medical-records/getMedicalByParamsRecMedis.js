const {tb_medical_record} = require('../../../models');

module.exports = async (req, res) => {
  try {
    const {no_rek_medis} = req.params;

    const data = await tb_medical_record.findOne({
      where: {
        no_rekam_medis: no_rek_medis
      }
    })
    if(!data){
      return res.status(404).json({
        status: "error",
        message: "Medical Record not found" 
      })
    }  
    return res.status(200).json({
      status: "success",
      data
    })
  } catch (error) {
    return res.status(500).json(error);
  }
};
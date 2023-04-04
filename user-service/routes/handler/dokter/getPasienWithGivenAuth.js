const {tb_give_auth, pasien} = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res)=>{  
  try {
    const {dokterId} = req.params;
    
    const data = await tb_give_auth.findAll({
      include: {
        model: pasien,
        attributes: ['id', 'nama', 'jenis_kelamin', 'alamat', 'role', 'email']
      },
      where:{
        dokterId
      },
      attributes: ['id', 'dokterId', 'pasienId']
    });

    return res.status(200).json({
      status: "success",
      data
    })

  } catch (error) {
    if(error.name === "SequelizeValidationError"){
      return res.status(400).json({
        status: "error",
        message: "dokter cannot found"
      })
    }
    return res.status(500).json(error);
  }

};
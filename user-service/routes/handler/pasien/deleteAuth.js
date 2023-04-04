const {tb_give_auth} = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res)=>{  
  try {
    const {pasienId} = req.params;
    const {dokterId} = req.body;

    const schema = {
      dokterId: "number|empty:false"
    }

    const validate = v.validate(req.body, schema);
    if(validate.length){
      return res.status(400).json({
        status: "error",
        message: validate
      })
    }
    await tb_give_auth.destroy({
      where: {
        pasienId,
        dokterId
      }
    });

    return res.status(201).json({
      status: "success",
      message: "authorization successfully deleted"
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
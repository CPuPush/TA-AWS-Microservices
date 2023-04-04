const {tb_give_auth} = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res)=>{  
  try {
    const {pasienId} = req.params;
    const {dokterId} = req.body;

    const Schema = {
      dokterId: "number|empty:false"
    }

    const validate = v.validate(req.body, Schema);
    if(validate.length){
      return res.status(400).json({
        status: "error",
        message: validate
      })
    }

    const data = await tb_give_auth.findOne({
      where: {
        pasienId,
        dokterId
      }
    })
  
    if (data) {
      return res.status(400).json({
        status: "error",
        message: "authorization already granted"
      })
    }
    
    await tb_give_auth.create({
      pasienId,
      dokterId
    });

    return res.status(201).json({
      status: "success",
      message: "authorization successfully granted"
    })

  } catch (error) {
    if(error.name === "SequelizeForeignKeyConstraintError"){
      return res.status(400).json({
        status: "error",
        message: "dokterId or pasienId not found"
      })
    }
    return res.status(500).json(error);
  }

};
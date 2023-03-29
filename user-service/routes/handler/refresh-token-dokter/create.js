const {dokter, refresh_dokter_token} = require('../../../models');

const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
  try {
    const {dokterId, 
      refresh_token} = req.body;
    
    const schema={
      dokterId: "number", 
      refresh_token: "string"
    }
    const validate = v.validate(req.body, schema);
    if(validate.length){
      return res.status(400).json({
        status: 'error',
        message: validate
      });
    }
    const data = await dokter.findByPk(dokterId);
    if(!data){
      return res.status(404).json({
        status: 'error',
        message: 'dokter not found'
      })
    }
    const createRefreshToken = await refresh_dokter_token.create({
      token: refresh_token,
      dokterId
    });
    return res.status(201).json({
      status: 'success',
      data: {
        id: createRefreshToken.id,
      }
    });
    
  } catch (error) {
    return res.status(500).json(error);
  }
};
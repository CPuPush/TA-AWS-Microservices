const {pasien, refresh_pasien_token} = require('../../../models');

const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
  try {
    const {pasienId, 
      refresh_token} = req.body;
    
    const schema={
      pasienId: "number", 
      refresh_token: "string"
    }
    console.log('test1');
    const validate = v.validate(req.body, schema);
    if(validate.length){
      return res.status(400).json({
        status: 'error',
        message: validate
      });
    }
    console.log('test2');
    const data = await pasien.findByPk(pasienId);
    if(!data){
      return res.status(404).json({
        status: 'error',
        message: 'pasien not found'
      })
    }
    console.log('test3');
    const createRefreshToken = await refresh_pasien_token.create({
      token: refresh_token,
      pasienId
    });
    console.log('test4');
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
const {admin, refresh_admin_token} = require('../../../models');

const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
  try {
    const {adminId, 
      refresh_token} = req.body;
    
    const schema={
      adminId: "number", 
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
    const data = await admin.findByPk(adminId);
    if(!data){
      return res.status(404).json({
        status: 'error',
        message: 'admin not found'
      })
    }
    console.log('test3');
    const createRefreshToken = await refresh_admin_token.create({
      token: refresh_token,
      adminId
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
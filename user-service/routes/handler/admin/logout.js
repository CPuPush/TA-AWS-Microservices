const {admin, refresh_admin_token} = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
  try {
    const schema = {
      adminId: 'number|empty:false'
    }
    const validate = v.validate(req.body, schema);
    if(validate.length){
      return res.status(400).json({
        status: 'error',
        message: validate   
      })
    }
    const {adminId} = req.body;
    const data = await admin.findByPk(adminId);

    if(!data){
      return res.status(404).json({
        status: 'error',
        message: 'admin not found'
      });
    }

    await refresh_admin_token.destroy({
      where: {
        adminId
      }
    });

    return res.status(200).json({
      status: 'success',
      message: 'refresh token admin deleted'
    })
  } catch (error) {
    return res.status(500).json(error);
  }

};
const {pasien, refresh_pasien_token} = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
  try {
    const schema = {
      pasienId: 'number|empty:false'
    }
    const validate = v.validate(req.body, schema);
    if(validate.length){
      return res.status(400).json({
        status: 'error',
        message: validate   
      })
    }
    const {pasienId} = req.body;
    const data = await pasien.findByPk(pasienId);

    if(!data){
      return res.status(404).json({
        status: 'error',
        message: 'admin not found'
      });
    }

    await refresh_pasien_token.destroy({
      where: {
        pasienId
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
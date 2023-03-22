const {dokter, refresh_dokter_token} = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
  try {
    const schema = {
      dokterId: 'number|empty:false'
    }
    const validate = v.validate(req.body, schema);
    if(validate.length){
      return res.status(400).json({
        status: 'error',
        message: validate   
      })
    }
    const {dokterId} = req.body;
    const data = await dokter.findByPk(dokterId);

    if(!data){
      return res.status(404).json({
        status: 'error',
        message: 'admin not found'
      });
    }

    await refresh_dokter_token.destroy({
      where: {
        dokterId
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
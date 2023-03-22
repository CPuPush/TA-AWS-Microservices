const bcrypt = require('bcrypt');
const {admin} = require('../../../models');

const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) =>{
  try {
    const schema = {
      email: 'email|empty:false',
      password: 'string|empty:false'
    }

    const validate = v.validate(req.body, schema);

    if(validate.length){
      return res.status(400).json({
        status: 'error',
        message: validate
      });
    }
    const {
      email,
      password
    } = req.body;
    // check email
    const user = await admin.findOne({
      where: {
        email
      }
    });
    if(!user){
      return res.status(404).json({
        status: 'error',
        message: 'admin not found'
      });
    }
    // check password
    const isValidPassword = await bcrypt.compare(password, user.password);

    if(!isValidPassword){
      return res.status(404).json({
        status: 'error',
        message: 'password is wrong'
      })
    }
    return res.status(200).json({
      status: 'success',
      data: {
        id: user.id,
        username: user.nama,
        email: user.email,
        role: user.role,
      }
    })

  } catch (error) {
    return res.status(500).json(error);
  }
};
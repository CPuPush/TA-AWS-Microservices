const bcypt = require('bcrypt');
const { pasien } = require('../../../models');

const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
  try {
    const schema = {
      nama: 'string|empty:false',
      jenis_kelamin: 'string|empty:false',
      alamat: 'string|optional',
      email: 'email|empty:false',
      password: 'string|empty:false'
    }
    const validate = v.validate(req.body, schema);
    
    if(validate.length){
      return res.status(400).json({
        status: 'error',
        message: validate
      })
    }

    const {
      nama,
      jenis_kelamin,
      alamat,
      email,
      password
    } = req.body;

    // check email unique
    const user = await pasien.findOne({
      where:{
        email
      }
    });

    if(user){
      return res.status(409).json({
        status:'error',
        message: 'email already exists'
      })
    }
    
    const hashPassword = await bcypt.hash(password, 10);
    const data = {
      nama,
      jenis_kelamin,
      alamat,
      role: 'pasien',
      email,
      password: hashPassword
    };
    
    // send to database
    const createPasien = await pasien.create(data);

    return res.status(201).json({
      status: 'success',
      data: {
        id: createPasien.id,
        email: createPasien.email
      }
    })
  } catch (error) {
    return res.status(500).json(error);
  }
};
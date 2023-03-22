const bcypt = require('bcrypt');
const { dokter } = require('../../../models');

const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
  try {
    const schema = {
      nama: 'string|empty:false',
      jenis_kelamin: 'string|empty:false',
      alamat: 'string|optional',
      no_str: 'number|empty:false',
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
      no_str,
      email,
      password
    } = req.body;

    // check email unique
    const user = await dokter.findOne({
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
    const check_str = await dokter.findOne({
      where: {
        no_str
      }
    })

    if(check_str){
      return res.status(409).json({
        status: 'error',
        message: 'no_str already exists'
      });
    }
    const hashPassword = await bcypt.hash(password, 10);
    const data = {
      nama,
      jenis_kelamin,
      alamat,
      no_str,
      role: 'dokter',
      email,
      status: "menunggu",
      password: hashPassword
    };
    
    // send to database
    const createDokter = await dokter.create(data);

    return res.status(201).json({
      status: 'success',
      data: {
        id: createDokter.id,
        email: createDokter.email
      }
    })
  } catch (error) {
    return res.status(500).json(error);
  }
};
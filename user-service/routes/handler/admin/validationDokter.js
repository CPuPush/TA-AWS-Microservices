const {dokter} = require('../../../models');
const validator = require('fastest-validator');
const v = new validator();

module.exports = async (req, res) => {
  try {
    const schema = {
      id: 'number|empty:false',
      status: {
        type: "enum",
        values: ["menunggu", "disetujui", "ditolak"]
      }
    }

    const validate = v.validate(req.body, schema);
    if(validate.length){
      return res.status(400).json({
        status: 'error',
        message: validate
      })
    }
    const {id, status} = req.body;

    const data = await dokter.findByPk(id);
    if(!data){
      return res.status(400).json({
        status: 'error',
        message: 'dokter not found'
      });
    }

    await dokter.update({
      status
    }, {
      where:{
        id
      }
    });
    
    const dataUpdate = await dokter.findByPk(id,{
      attributes: ['id', 'nama', 'jenis_kelamin', 'alamat', 'no_str', 'role', 'status', 'email']
    });

    return res.status(200).json({
      status: 'success',
      message: 'dokter validate successfully',
      data: dataUpdate
    })

  } catch (error) {
    return res.status(500).json(error);
  }
};
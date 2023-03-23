const {dokter} = require('../../../models');

module.exports = async (req, res) => {
  try {
    const status = req.body.status || [];
    const sqlInject = {
      attributes: ['id', 'nama', 'email', 'jenis_kelamin', 'alamat', 'no_str', 'role', 'status']
    }

    if(status.length){
      // inject 
      sqlInject.where = {
        status
      }
    }

    const data = await dokter.findAll(sqlInject);
    return res.status(200).json({
      status: 'success',
      data
    })
  } catch (error) {
    return res.status(500).json(error);
  }
}
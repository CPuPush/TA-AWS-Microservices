const {dokter} = require('../../../models');

module.exports = async (req, res) => {
  try {
    const {id} = req.params;
    const user = await dokter.findByPk(id,{
      attributes: ['id', 'nama', 'jenis_kelamin', 'alamat', 'role', 'email']
    });

    if(!user){
      return res.status(404).json({
        status: 'error',
        message: 'dokter not found'
      });
    }
    return res.status(200).json({
      status: 'success',
      data: user
    })
  } catch (error) {
    return res.status(500).json(error);
  }
};
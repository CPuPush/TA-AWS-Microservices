const {pasien} = require('../../../models');

module.exports = async (req, res) => {
  try {
    const data = await pasien.findAll({
      attributes: ['id', 'nama', 'jenis_kelamin', 'alamat', 'role', 'email']
    });
    return res.status(200).json({
      status: 'success',
      data
    })
  } catch (error) {
    return res.status(500).json(error);
  }
}
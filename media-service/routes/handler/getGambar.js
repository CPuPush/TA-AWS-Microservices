const {tb_media} = require('../../models');

module.exports = async (req, res) => {
  try {
    const media = await tb_media.findAll({
      attributes: ['id', 'image_url', 'tbMedicalRecordId']
    });
    const mappedMedia = media.map((m) => {
      m.image_url = `http://${req.get('host')}/${m.image_url}`
      return m;
    });

    return res.status(200).json({
      status: 'success',
      data: mappedMedia
    })
  } catch (error) {
    return res.status(500).json(error);
  }
}
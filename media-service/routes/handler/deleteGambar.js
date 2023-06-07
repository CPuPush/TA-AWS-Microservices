const {tb_media} = require('../../models');
const fs = require('fs');

module.exports = async (req, res) => {
  try {
    const {tbMedicalRecordId} = req.params;
    const mediaId = await tb_media.findAll({
      where: {
        tbMedicalRecordId
      }
    });
    console.log(mediaId[0].image_url);
    if(mediaId.length < 1){
      return res.status(404).json({
        status: 'error',
        message: "Gambar tidak ditemukan"
      })
    }
    
    for(let i = 0; i < mediaId.length;i++){
      fs.unlink(`./public/${mediaId[i].image_url}`, (err) => {
        if(err){
          return res.status(400).json({
            status: 'error',
            message: err.message
          })
        }
      })
    }
    
    await tb_media.destroy({
      where:{
        tbMedicalRecordId
      }
    })
    return res.status(200).json({
      status: 'success',
      message: 'Delete successfully'
    });

  } catch (error) {
    return res.status(500).json(error);
  }
};
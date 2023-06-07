const {tb_media} = require('../../models');
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const isBase64 = require('is-base64');
const base64Img = require('base64-img');

const {
  BUCKET_NAME,
  BUCKET_REGION,
  ACCESS_KEY,
  SECRET_ACCESS_KEY
} = process.env;

const s3 = new S3Client({
  credentials: {
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
  region: BUCKET_REGION,
})
module.exports = async (req, res) => {
  const params = {
    Bucket: BUCKET_NAME,
    Key: req.file.originalname,
    Body: req.file.buffer,
    ContentType: req.file
  }
  const command = new PutObjectCommand(params)
};


/*
try {
    const {tbMedicalRecordId} = req.params;
    const {image} = req.body
    if(!isBase64(image, {mimeRequired: true})){
      return res.status(400).json({
        status: 'error',
        message: 'invalid base64'
      })
    }

    base64Img.img(image, './public/images', Date.now(), async (err, filepath) => {
      if(err){
        return res.status(400).json({
          status: 'error',
          message: err.message
        })
      }
      // pisahkan public\images\<nama file> menjadi ['public', 'images','<nama file>']. selanjutnya di pop() artinya menghapus array terahir dan yang di return adalah array yang dihapus
      // console.log(filepath);
      const filename = filepath.split("\\").pop();

      const media = await tb_media.create({
        image_url: `images/${filename}`,
        tbMedicalRecordId: +tbMedicalRecordId
      });


      return res.status(201).json({
        status: 'success',
        data: {
          id: media.id,
          image: `${req.get('host')}/images/${filename}`,
          tbMedicalRecordId: media.tbMedicalRecordId
        }
      })
    })
  } catch (error) {
    return res.status(500).json(error);
  }
*/
const {tb_media} = require('../models');
const express = require('express');
const router = express.Router();
const crypto = require('crypto');

// Multer
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage: storage});

// AWS S3
const { S3Client,PutObjectCommand, GetObjectCommand, DeleteObjectCommand } = require("@aws-sdk/client-s3");
const {getSignedUrl} = require('@aws-sdk/s3-request-presigner');

// S3 access
const bucketName = process.env.AWS_BUCKET_NAME;
const bucketRegion = process.env.AWS_BUCKET_REGION;
const accessKey = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3Client({
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey
  },
  region: bucketRegion
});


router.post('/:tbMedicalRecordId', upload.single('file'), async (req, res) => {
  try {
    const {tbMedicalRecordId} = req.params;
    const file = req.file;
    console.log(file);

    const randomImageName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex');
    const keys = randomImageName();

    const params = {
      Bucket: bucketName,
      Key: keys,
      Body: req.file.buffer,
      ContentType: req.file.mimetype
    }

    const command = new PutObjectCommand(params);
    
    await s3.send(command)

    await tb_media.create({
      image_url: keys,
      tbMedicalRecordId
    })

    return res.status(200).json({
      status: 'success',
      message: 'Gambar berhasil diupload',
    })

  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get('/:tbMedicalRecordId', async (req, res) => {
  try {
    const {tbMedicalRecordId} = req.params;
    const datas = await tb_media.findAll({
      where: {
        tbMedicalRecordId
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    });

    for (const data of datas){
      const getObjectParams = {
        Bucket: bucketName,
        Key: data.image_url,
      }
      const command = new GetObjectCommand(getObjectParams);
      const url = await getSignedUrl(s3, command, {expiresIn: 3600});
      data.image_url = url
    }
    return res.status(200).json({
      status: 'success',
      data: datas
    });
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.delete('/:tbMedicalRecordId', async (req, res) => {
  try {
    const {tbMedicalRecordId} = req.params;
    const datas = await tb_media.findAll({
      where:{
        tbMedicalRecordId
      }
    })
    
    for (const data of datas){
      const params = {
        Bucket : bucketName,
        Key: data.image_url
      }

      const command = new DeleteObjectCommand(params);

      await s3.send(command);

      await tb_media.destroy({
        where: {
          tbMedicalRecordId
        }
      })
    }

    return res.status(200).json({
      status: "success",
      message : "gambar berhasil dihapus"
    })
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
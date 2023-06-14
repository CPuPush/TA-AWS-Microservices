const express = require('express');
const router = express.Router();
const apiAdapter = require('./apiAdapter');
const {
  URL_MEDIA_SERVICE
} = process.env;
const multer = require('multer')
const api = apiAdapter(URL_MEDIA_SERVICE);
const storage = multer.memoryStorage();
const upload = multer({storage: storage});

const FormData = require('form-data');

router.post('/:tbMedicalRecordId', upload.single('file'), async (req, res) =>{
  try {
    const {tbMedicalRecordId} = req.params;

    const formData = new FormData();
    formData.append('file', req.file.buffer, req.file.originalname);

    const user = await api.post(
      `${URL_MEDIA_SERVICE}/media/${tbMedicalRecordId}`,
      formData,
      {
        headers: {
          ...formData.getHeaders(),
        },
      }
    );
    
    return res.json(user.data);

  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get('/:tbMedicalRecordId', async (req, res) => {
  try {
    const {tbMedicalRecordId} = req.params;
    const user = await api.get(`${URL_MEDIA_SERVICE}/media/${tbMedicalRecordId}`);
    return res.json(user.data);
  } catch (error) {
    if(error.code == 'ECONNREFUSED'){
      return res.status(500).json({
        status: 'error',
        message: 'service unavailable'
      })
    }else{
      const {status, data} = error.response;
      return res.status(status).json(data);
    }
  }
});

router.delete('/:tbMedicalRecordId', async (req, res) => {
  try {
    const {tbMedicalRecordId} = req.params;
    const user = await api.delete(`${URL_MEDIA_SERVICE}/media/${tbMedicalRecordId}`);
    return res.json(user.data);
  } catch (error) {
    if(error.code == 'ECONNREFUSED'){
      return res.status(500).json({
        status: 'error',
        message: 'service unavailable'
      })
    }else{
      const {status, data} = error.response;
      return res.status(status).json(data);
    }
  }
});

module.exports = router;

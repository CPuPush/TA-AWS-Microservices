const apiAdapter = require('../../apiAdapter');
const {
  URL_MEDICAL_SERVICE,
  URL_MEDIA_SERVICE
} = process.env;
const api = apiAdapter(URL_MEDICAL_SERVICE);

module.exports = async (req, res) => {
  try {
    const {tbMedicalRecordId} = req.params;
    const medicals = await api.get(`${URL_MEDICAL_SERVICE}/medical-record/${tbMedicalRecordId}`);
    const medias = await api.get(`${URL_MEDIA_SERVICE}/media/${tbMedicalRecordId}`);
    const medical = medicals.data;
    const media = medias.data;
    const mergedData = {
      medical,
      media
    }
    return res.json(mergedData);
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
};

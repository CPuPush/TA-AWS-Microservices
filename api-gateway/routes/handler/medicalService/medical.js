const apiAdapter = require('../../apiAdapter');
const {
  URL_MEDICAL_SERVICE,
  URL_USER_SERVICE
} = process.env;

const api = apiAdapter(URL_MEDICAL_SERVICE);
const apis = apiAdapter(URL_USER_SERVICE);

module.exports = async (req, res) => {
  try {
    const {pasienId} = req.params;
    const requestBody = {
      ...req.body,
      dokterId: req.user.data.id
    }
    await apis.get(`${URL_USER_SERVICE}/pasien/${pasienId}`);
    const user = await api.post(`${URL_MEDICAL_SERVICE}/medical-record/data/${pasienId}`, requestBody);
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
};

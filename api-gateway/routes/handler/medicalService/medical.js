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
    const dokterId = req.user.data.id;
    const requestBody = {
      ...req.body,
      dokterId
    }
    const data = await apis.get(`${URL_USER_SERVICE}/dokter/pasienAuth/${dokterId}`);
    // console.log(data.data.data.length);
    // for(let i =0; i < data.data.data.length; i++){
    //   if(data.data.data[i].pasienId !== pasienId){
    //     return res.status(403).json({
    //       status: "error",
    //       message: "Authorization not given from pasien"
    //     })
    //   }
    // }
    console.log(data.data.data.length);
    // if(data.data.data[0])
    if(data.data.data.length == 0){
      return res.status(403).json({
        status: "error",
        message: "FORBIDDEN"
      })
    }else{
      for(let i = 0 ; i< data.data.data.length; i++){
        if(!(data.data.data[i].pasienId == pasienId)){
          return res.status(403).json({
            status: "error",
            message: "FORBIDDEN"
          })
        }
      }
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

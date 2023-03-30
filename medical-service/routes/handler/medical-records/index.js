const medical = require('./medical');
const anamnesa = require('./anamnesa');
const pemeriksaanFisik = require('./pemeriksaanFisik');
const laboratorium = require('./laboratorium');
const pemeriksaanLainnya = require('./pemeriksaanLainnya');
const getMedical = require('./getMedical');
const kesimpulan = require('./kesimpulan');
const getMedicalByParamsRecMedis = require('./getMedicalByParamsRecMedis');
const getMedicalByPasienId = require('./getMedicalByPasienId');

module.exports= {
  medical,
  anamnesa,
  pemeriksaanFisik,
  laboratorium,
  pemeriksaanLainnya,
  getMedical,
  kesimpulan,
  getMedicalByParamsRecMedis,
  getMedicalByPasienId
}
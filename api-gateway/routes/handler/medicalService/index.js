const medical = require('./medical');
const anamnesa = require('./anamnesa');
const pemeriksaanFisik = require('./pemeriksaanFisik');
const laboratorium = require('./laboratorium');
const pemeriksaanLainnya = require('./pemeriksaanLainnya');
const kesimpulan = require('./kesimpulan');
const getMedical = require('./getMedical');
const getMedicalByPasienId = require('./getMedicalByPasienId');

module.exports = {
  medical,
  anamnesa,
  pemeriksaanFisik,
  laboratorium,
  pemeriksaanLainnya,
  kesimpulan,
  getMedical,
  getMedicalByPasienId
};
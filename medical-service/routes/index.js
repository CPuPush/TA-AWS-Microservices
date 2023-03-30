const express = require('express');
const router = express.Router();
const medicalController = require('./handler/medical-records');

router.get('/:tbMedicalRecordId', medicalController.getMedical);
router.get('/data/medical/:pasien_id', medicalController.getMedicalByPasienId);

router.post('/data/:pasien_id', medicalController.medical);
router.post('/anamnesa/:tbMedicalRecordId',  medicalController.anamnesa);
router.post('/pemeriksaan-fisik/:tbMedicalRecordId', medicalController.pemeriksaanFisik);
router.post('/laboratorium/:tbMedicalRecordId', medicalController.laboratorium);
router.post('/pemeriksaan-lainnya/:tbMedicalRecordId', medicalController.pemeriksaanLainnya);
router.post('/kesimpulan/:tbMedicalRecordId', medicalController.kesimpulan);

router.get('/data/:no_rek_medis', medicalController.getMedicalByParamsRecMedis);

module.exports = router;
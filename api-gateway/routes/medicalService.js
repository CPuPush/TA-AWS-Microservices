const express = require('express');
const router = express.Router();
const medicalController = require('./handler/medicalService');
const authentication = require('../middleware/authentication');

router.post('/data/:pasien_id', medicalController.medical);

router.post('/anamnesa/:tbMedicalRecordId',  medicalController.anamnesa);
router.post('/pemeriksaan-fisik/:tbMedicalRecordId', medicalController.pemeriksaanFisik);
router.post('/laboratorium/:tbMedicalRecordId', medicalController.laboratorium);
router.post('/pemeriksaan-lainnya/:tbMedicalRecordId', medicalController.pemeriksaanLainnya);
router.post('/kesimpulan/:tbMedicalRecordId', medicalController.kesimpulan);



module.exports = router;

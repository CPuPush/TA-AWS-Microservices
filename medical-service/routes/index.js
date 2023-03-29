const express = require('express');
const router = express.Router();
const medicalController = require('./handler/medical-records');

router.get('/:tbMedicalRecordId', medicalController.getMedical);
router.post('/data', medicalController.medical);
router.post('/anamnesa/:tbMedicalRecordId',  medicalController.anamnesa);
router.post('/pemeriksaan-fisik/:tbMedicalRecordId', medicalController.pemeriksaanFisik);
router.post('/laboratorium/:tbMedicalRecordId', medicalController.laboratorium);
router.post('/pemeriksaan-lainnya/:tbMedicalRecordId', medicalController.pemeriksaanLainnya);
router.post('/kesimpulan/:tbMedicalRecordId', medicalController.kesimpulan);


module.exports = router;
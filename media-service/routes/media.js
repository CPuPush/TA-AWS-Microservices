const express = require('express');
const router = express.Router();
const mediaHander = require('./handler/index');

/* GET users listing. */
router.post('/:tbMedicalRecordId', mediaHander.postGambar);
router.get('/:tbMedicalRecordId', mediaHander.getGambar);
router.delete('/:tbMedicalRecordId', mediaHander.deleteGambar);
module.exports = router;

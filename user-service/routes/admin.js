const express = require('express');
const router = express.Router();
const adminController = require('./handler/admin');

router.post('/login', adminController.login);
router.post('/validation', adminController.dokterValidation);
router.post('/dokter', adminController.destroyDokter);
router.post('/logout', adminController.logout);

module.exports = router;